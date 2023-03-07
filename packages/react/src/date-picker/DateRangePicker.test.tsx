import '@testing-library/jest-dom';
import 'html-validate/jest';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { cleanup, render, screen } from '../../../../test-utils';
import { Stack } from '../box';
import { Button } from '../button';
import {
	DateRange,
	DateRangePicker,
	DateRangePickerProps,
} from './DateRangePicker';
import { yupDateField, errorMessage } from './test-utils';
import { formatHumanReadableDate, parseDate } from './utils';

afterEach(cleanup);

function renderDateRangePicker(props: DateRangePickerProps) {
	return render(<DateRangePicker {...props} />);
}

function ClearableDateRangePicker({
	initialValue,
}: {
	initialValue: DateRange;
}) {
	const [value, setValue] = useState<DateRange>(initialValue);
	return (
		<Stack gap={4} alignItems="flex-start">
			<DateRangePicker value={value} onChange={setValue} />
			<Button
				data-testid="clear"
				onClick={() => setValue({ from: undefined, to: undefined })}
			>
				Clear
			</Button>
		</Stack>
	);
}

const formSchema = (required: boolean) =>
	yup
		.object({
			dateRange: yup
				.object({
					from: required
						? yupDateField.required(errorMessage)
						: yupDateField.optional(),
					to: required
						? yupDateField.required(errorMessage)
						: yupDateField.optional(),
				})
				.required(),
		})
		.required();

type FormSchema = yup.InferType<ReturnType<typeof formSchema>>;

function DateRangePickerInsideForm({
	required,
	onSubmit,
	onError,
}: {
	required: boolean;
	onSubmit: (value: FormSchema) => void;
	onError: () => void;
}) {
	const { control, handleSubmit } = useForm<FormSchema>({
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
						fromInputRef={ref}
						{...field}
						value={value}
						onChange={onChange}
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

async function getErrorMessage() {
	const el = await screen.findByText(errorMessage);
	expect(el).toBeInstanceOf(HTMLSpanElement);
	expect(el).toBeInTheDocument();
	return el as HTMLSpanElement;
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

	it('renders a valid HTML structure', () => {
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
		const optionalFormSchema = formSchema(true);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: new Date(), to: new Date() },
			})
		).toEqual(true);
		expect(
			optionalFormSchema.isValidSync({
				dateRange: { from: undefined, to: undefined },
			})
		).toEqual(false);
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

	it.skip('form: can be submitted with a value', async () => {
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

		await userEvent.type(await getFromInput(), toValidDateAsString);
		await expect(await getFromInput()).toHaveValue(toValidDateAsString);

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

	it.skip('form: shows validation errors as an optional field with invalid value', async () => {
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

	it.skip('form: shows validation errors as an optional field with a semi-real date value', async () => {
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

	it.skip('form: shows validation errors as an optional field', async () => {
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

	it.skip('form: shows validation errors as a required field', async () => {
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
