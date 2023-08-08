import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { cleanup, render, screen, act } from '../../../../test-utils';
import { Stack } from '../stack';
import { Button } from '../button';
import { formatHumanReadableDate, parseDate } from '../date-picker/utils';
import { yupDateField, errorMessage } from '../date-picker/test-utils';
import {
	DateRangePicker,
	DateRangePickerProps,
	DateRangeWithString,
} from './DateRangePicker';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderDateRangePicker(props: DateRangePickerProps) {
	return render(<DateRangePicker {...props} />);
}

function ClearableDateRangePicker({
	initialValue,
}: {
	initialValue: DateRangeWithString;
}) {
	const [value, setValue] = useState<DateRangeWithString>(initialValue);
	return (
		<Stack gap={4} alignItems="flex-start">
			<DateRangePicker
				value={value}
				onChange={setValue}
				onFromInputChange={(from) => setValue({ ...value, from })}
				onToInputChange={(to) => setValue({ ...value, to })}
			/>
			<Button
				data-testid="clear"
				onClick={() => setValue({ from: undefined, to: undefined })}
			>
				Clear
			</Button>
		</Stack>
	);
}

const fromDateFieldBase = yupDateField
	// Ensures the start date is always after the end date
	.max(yup.ref('to'), 'Start date must be before the end date');

const toDateFieldBase = yupDateField
	// Ensures the start date is always after the end date
	.min(yup.ref('from'), 'Start date must be before the end date');

const formSchema = (required: boolean) =>
	yup
		.object({
			dateRange: yup
				.object({
					from: required
						? fromDateFieldBase.required(errorMessage)
						: fromDateFieldBase.optional(),
					to: required
						? toDateFieldBase.required(errorMessage)
						: toDateFieldBase.optional(),
				})
				.required(),
		})
		.required();

export type FormSchema = yup.InferType<ReturnType<typeof formSchema>>;

function DateRangePickerInsideForm({
	required,
	onSubmit,
	onError,
}: {
	required: boolean;
	onSubmit: (value: FormSchema) => void;
	onError: () => void;
}) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: { dateRange: { from: undefined, to: undefined } },
		resolver: yupResolver(formSchema(required)),
	});
	return (
		<form
			onSubmit={handleSubmit((value) => onSubmit(value), onError)}
			noValidate
		>
			<Controller
				control={control}
				name="dateRange"
				render={({ field: { ref, value, onChange, ...field } }) => (
					<DateRangePicker
						legend="Date range"
						fromInputRef={ref}
						{...field}
						value={value}
						onChange={onChange}
						onFromInputChange={(from) => onChange({ ...value, from })}
						onToInputChange={(to) => onChange({ ...value, to })}
						fromInvalid={Boolean(errors.dateRange?.from?.message)}
						toInvalid={Boolean(errors.dateRange?.to?.message)}
						message={
							errors.dateRange?.from?.message || errors.dateRange?.to?.message
						}
						required
					/>
				)}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
}

async function getInputs() {
	return await screen.getAllByRole('textbox');
}

async function getFromInput() {
	const inputs = await getInputs();
	const el = inputs[0];
	expect(el).toBeInstanceOf(HTMLInputElement);
	expect(el).toBeInTheDocument();
	return el as HTMLInputElement;
}

async function getToInput() {
	const inputs = await getInputs();
	const el = inputs[1];
	expect(el).toBeInstanceOf(HTMLInputElement);
	expect(el).toBeInTheDocument();
	return el as HTMLInputElement;
}

async function getErrorMessage(message = errorMessage) {
	const el = await screen.findByText(message);
	expect(el).toBeInstanceOf(HTMLSpanElement);
	expect(el).toBeInTheDocument();
	return el as HTMLSpanElement;
}

async function getLegend(text = 'Date format') {
	const el = await screen.getByText(text).closest('legend');
	expect(el).toBeInstanceOf(HTMLLegendElement);
	expect(el).toBeInTheDocument();
	return el as HTMLLegendElement;
}

async function getSubmitButton() {
	const el = await screen.getByText('Submit').closest('button');
	expect(el).toBeInstanceOf(HTMLButtonElement);
	expect(el).toBeInTheDocument();
	return el as HTMLButtonElement;
}

describe('DateRangePicker', () => {
	it('renders correctly', () => {
		const { container } = renderDateRangePicker({
			value: { from: new Date(2000, 0, 1), to: new Date(2000, 0, 2) },
			onChange: console.log,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderDateRangePicker({
			value: { from: new Date(2000, 0, 1), to: new Date(2000, 0, 2) },
			onChange: console.log,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		await act(async () => {
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('updates correctly based on the `value` prop', async () => {
		const fromDateString = '01/01/2000';
		const fromDate = parseDate(fromDateString) as Date;
		const fromFormattedDate = formatHumanReadableDate(fromDate);

		const toDateString = '02/01/2000';
		const toDate = parseDate(toDateString) as Date;
		const toFormattedDate = formatHumanReadableDate(toDate);

		const { container } = render(
			<ClearableDateRangePicker
				initialValue={{
					from: fromDate,
					to: toDate,
				}}
			/>
		);

		let inputs = container.querySelectorAll('input');
		let calendarTriggers = container.querySelectorAll('button');

		// The inputs should be a formatted display value of `initialValue`
		expect(inputs[0]).toHaveValue(fromDateString);
		expect(inputs[1]).toHaveValue(toDateString);

		// The calendar button trigger should have an aria-label with the formatted display value of `initialValue`
		expect(calendarTriggers[0]).toHaveAttribute(
			'aria-label',
			`Change Date, ${fromFormattedDate}`
		);
		expect(calendarTriggers[1]).toHaveAttribute(
			'aria-label',
			`Change Date, ${toFormattedDate}`
		);

		// Click the `clear` button to clear the value
		await userEvent.click(screen.getByTestId('clear'));

		inputs = container.querySelectorAll('input');
		calendarTriggers = container.querySelectorAll('button');

		// The inputs should be empty
		expect(inputs[0]).toHaveValue('');
		expect(inputs[1]).toHaveValue('');

		// The calendar button triggers aria-label should be updated
		expect(calendarTriggers[0]).toHaveAttribute('aria-label', 'Choose date');
		expect(calendarTriggers[1]).toHaveAttribute('aria-label', 'Choose date');
	});

	it('responds to an `onChange` callback', async () => {
		const onChange = jest.fn();

		const { container } = renderDateRangePicker({
			value: { from: undefined, to: undefined },
			onChange: onChange,
		});

		const fromDateString = '01/01/2000';
		const fromDate = parseDate(fromDateString) as Date;
		const fromFormattedDate = formatHumanReadableDate(fromDate);

		const toDateString = '02/01/2000';
		const toDate = parseDate(toDateString) as Date;
		const toFormattedDate = formatHumanReadableDate(toDate);

		// Type in the input fields
		await userEvent.type(await getFromInput(), fromDateString);
		expect(await getFromInput()).toHaveValue(fromDateString);
		await userEvent.type(await getToInput(), toDateString);
		expect(await getToInput()).toHaveValue(toDateString);

		expect(onChange).toHaveBeenCalledTimes(
			fromDateString.length + toDateString.length
		);

		const calendarTriggers = container.querySelectorAll('button');

		// The calendar button triggers should have an aria-label with the formatted display value
		expect(calendarTriggers[0]).toHaveAttribute(
			'aria-label',
			`Change Date, ${fromFormattedDate}`
		);
		expect(calendarTriggers[1]).toHaveAttribute(
			'aria-label',
			`Change Date, ${toFormattedDate}`
		);
	});

	it('legend: renders a hidden legend by default when optional', async () => {
		const defaultLegend = 'Date range';

		renderDateRangePicker({
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
			required: false,
		});
		expect(await await (await getLegend(defaultLegend)).textContent).toEqual(
			`${defaultLegend} (optional)`
		);
	});

	it('legend: renders a hidden legend by default when required', async () => {
		const defaultLegend = 'Date range';

		renderDateRangePicker({
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
			required: true,
		});
		expect(await (await getLegend(defaultLegend)).textContent).toEqual(
			`${defaultLegend}`
		);
	});

	it('legend: can render a different legend when optional', async () => {
		const legend = 'Date period';

		renderDateRangePicker({
			legend,
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
		});
		expect(await (await getLegend(legend)).textContent).toEqual(
			`${legend} (optional)`
		);
	});

	it('legend: can render a different legend when required', async () => {
		const legend = 'Date period';

		renderDateRangePicker({
			legend,
			required: true,
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
		});
		expect(await (await getLegend(legend)).textContent).toEqual(`${legend}`);
	});

	it('shows date format when legend is supplied', async () => {
		const { container } = renderDateRangePicker({
			legend: 'Date range',
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
		});
		const inputFromId = await (await getFromInput())?.id;
		const labelFrom = container.querySelector(`[for="${inputFromId}"]`);

		const inputToId = await (await getToInput())?.id;
		const labelTo = container.querySelector(`[for="${inputToId}"]`);

		expect(labelFrom?.textContent).toEqual('Start date (dd/mm/yyyy)');
		expect(labelTo?.textContent).toEqual('End date (dd/mm/yyyy)');
	});

	it('shows date format when no legend is supplied', async () => {
		const { container } = renderDateRangePicker({
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
		});
		const inputFromId = await (await getFromInput())?.id;
		const labelFrom = container.querySelector(`[for="${inputFromId}"]`);

		const inputToId = await (await getToInput())?.id;
		const labelTo = container.querySelector(`[for="${inputToId}"]`);

		expect(labelFrom?.textContent).toEqual(
			'Start date (dd/mm/yyyy) (optional)'
		);
		expect(labelTo?.textContent).toEqual('End date (dd/mm/yyyy) (optional)');
	});

	it('invalid: can render an invalid state when both fields are invalid', async () => {
		renderDateRangePicker({
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
			fromInvalid: true,
			toInvalid: true,
			message: errorMessage,
		});
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getToInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('invalid: can render an invalid state when only from is invalid', async () => {
		renderDateRangePicker({
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
			fromInvalid: true,
			toInvalid: false,
			message: errorMessage,
		});
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getToInput()).toHaveAttribute('aria-invalid', 'false');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('invalid: can render an invalid state when only to is invalid', async () => {
		renderDateRangePicker({
			value: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			onChange: console.log,
			fromInvalid: false,
			toInvalid: true,
			message: errorMessage,
		});
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'false');
		expect(await getToInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('formSchema: yupDateField works when optional', () => {
		const optionalFormSchema = formSchema(false);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: undefined, to: undefined },
			})
		).toEqual(true);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: new Date(), to: new Date() },
			})
		).toEqual(true);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: '', to: '' },
			})
		).toEqual(false);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: '123', to: '' },
			})
		).toEqual(false);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: '123', to: '456' },
			})
		).toEqual(false);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: 'hi', to: 'hello' },
			})
		).toEqual(false);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: '02/02/200', to: '2/02/2002' },
			})
		).toEqual(false);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: '2/2/2003', to: undefined },
			})
		).toEqual(false);
	});

	it('formSchema: yupDateField works when required', () => {
		const requiredFormSchema = formSchema(true);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: new Date(), to: new Date() },
			})
		).toEqual(true);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: undefined, to: undefined },
			})
		).toEqual(false);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: '', to: '' },
			})
		).toEqual(false);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: '123', to: '' },
			})
		).toEqual(false);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: '123', to: '456' },
			})
		).toEqual(false);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: 'hi', to: 'hello' },
			})
		).toEqual(false);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: '02/02/200', to: '2/02/2002' },
			})
		).toEqual(false);
		expect(
			requiredFormSchema.isValidSync({
				dateRange: { from: '2/2/2003', to: undefined },
			})
		).toEqual(false);
	});

	it('form: can be submitted with a value', async () => {
		const fromValidDateAsString = '02/03/2023';
		const toValidDateAsString = '03/03/2023';

		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in a valid value
		await userEvent.type(await getFromInput(), fromValidDateAsString);
		await expect(await getFromInput()).toHaveValue(fromValidDateAsString);

		await userEvent.type(await getToInput(), toValidDateAsString);
		await expect(await getToInput()).toHaveValue(toValidDateAsString);

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).not.toHaveBeenCalled();
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: {
				from: parseDate(fromValidDateAsString),
				to: parseDate(toValidDateAsString),
			},
		});
	});

	it('form: can be submitted without a value as an optional field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).not.toHaveBeenCalled();
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: { from: undefined, to: undefined },
		});
	});

	it('form: shows validation errors as an optional field with invalid value', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getFromInput(), 'hi');
		await userEvent.type(await getToInput(), 'hello');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getFromInput()).toHaveFocus();
		expect(await getFromInput()).toHaveValue('hi');
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getToInput()).toHaveValue('hello');
		expect(await getToInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await userEvent.clear(await getFromInput());
		await expect(await getFromInput()).toHaveValue('');
		await userEvent.clear(await getToInput());
		await expect(await getToInput()).toHaveValue('');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: { from: undefined, to: undefined },
		});
	});

	it('form: shows validation errors as an optional field with a semi-real date value', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getFromInput(), '1/2/2020');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getFromInput()).toHaveFocus();
		expect(await getFromInput()).toHaveValue('1/2/2020');
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await userEvent.clear(await getFromInput());
		await expect(await getFromInput()).toHaveValue('');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: { from: undefined, to: undefined },
		});
	});

	it('form: shows validation errors when `to` date is before `from` date', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				required={true}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		const fromDate = '05/01/2000';
		const toDate = '01/01/2000'; // Before from date
		await userEvent.type(await getFromInput(), fromDate);
		await userEvent.type(await getToInput(), toDate);

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage(
			'Start date must be before the end date'
		);
		expect(errorMessage).toBeInTheDocument();
		expect(await getFromInput()).toHaveFocus();
		expect(await getFromInput()).toHaveValue(fromDate);
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getToInput()).toHaveValue(toDate);
		expect(await getToInput()).toHaveAttribute('aria-invalid', 'true');
	});

	it('form: shows validation errors as an optional field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getFromInput(), 'hello');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getFromInput()).toHaveFocus();
		expect(await getFromInput()).toHaveValue('hello');
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await userEvent.clear(await getFromInput());
		await expect(await getFromInput()).toHaveValue('');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: { from: undefined, to: undefined },
		});
	});

	it('form: shows validation errors as a required field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				required={true}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getFromInput(), 'hi');
		await userEvent.type(await getToInput(), 'hello');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getFromInput()).toHaveFocus();
		expect(await getFromInput()).toHaveValue('hi');
		expect(await getFromInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getToInput()).toHaveValue('hello');
		expect(await getToInput()).toHaveAttribute('aria-invalid', 'true');

		const fromValidDateAsString = '02/03/2023';
		const toValidDateAsString = '03/03/2023';

		// Type in a valid value
		await userEvent.clear(await getFromInput());
		await expect(await getFromInput()).toHaveValue('');
		await userEvent.type(await getFromInput(), fromValidDateAsString);
		await expect(await getFromInput()).toHaveValue(fromValidDateAsString);

		await userEvent.clear(await getToInput());
		await expect(await getToInput()).toHaveValue('');
		await userEvent.type(await getToInput(), toValidDateAsString);
		await expect(await getToInput()).toHaveValue(toValidDateAsString);

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: {
				from: parseDate(fromValidDateAsString),
				to: parseDate(toValidDateAsString),
			},
		});
	});
});
