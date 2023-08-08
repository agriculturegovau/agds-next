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
import { DatePicker, DatePickerProps } from './DatePicker';
import { formatHumanReadableDate, parseDate } from './utils';
import { yupDateField, errorMessage } from './test-utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderDatePicker(props: DatePickerProps) {
	return render(<DatePicker {...props} />);
}

function ClearableDatePicker({ initialValue }: { initialValue?: Date }) {
	const [value, setValue] = useState<Date | undefined>(initialValue);
	return (
		<Stack gap={4} alignItems="flex-start">
			<DatePicker label="Clearable" value={value} onChange={setValue} />
			<Button data-testid="clear" onClick={() => setValue(undefined)}>
				Clear
			</Button>
		</Stack>
	);
}

const formSchema = (required: boolean) =>
	yup
		.object({
			date: required
				? yupDateField.required(errorMessage)
				: yupDateField.optional(),
		})
		.required();

type FormSchema = yup.InferType<ReturnType<typeof formSchema>>;

function DatePickerInsideForm({
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
		resolver: yupResolver(formSchema(required)),
	});
	return (
		<form
			onSubmit={handleSubmit((value) => onSubmit(value), onError)}
			noValidate
		>
			<Controller
				control={control}
				name="date"
				render={({ field: { ref, ...field } }) => (
					<DatePicker
						inputRef={ref}
						label="Date"
						{...field}
						onInputChange={field.onChange}
						id="date"
						invalid={Boolean(errors.date?.message)}
						message={errors.date?.message}
						required={required}
					/>
				)}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
}

async function getInput() {
	const el = await screen.getByRole('textbox');
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

describe('DatePicker', () => {
	it('renders correctly', () => {
		const { container } = renderDatePicker({
			label: 'Example',
			value: new Date(2000, 0, 1),
			onChange: console.log,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderDatePicker({
			label: 'Example',
			value: new Date(2000, 1, 1),
			onChange: console.log,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			// react 18s `useId` break this rule
			rules: { 'valid-id': 'off' },
		});
		await act(async () => {
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('updates correctly based on the `value` prop', async () => {
		const dateString = '01/01/2000';
		const date = parseDate(dateString) as Date;
		const formattedDate = formatHumanReadableDate(date);

		const { container } = render(<ClearableDatePicker initialValue={date} />);

		async function getCalendarTrigger() {
			return await container.querySelector('button[type="button"]');
		}

		// The input should be a formatted display value of `initialValue`
		expect(await getInput()).toHaveValue(dateString);

		// The calendar button trigger should have an aria-label with the formatted display value of `initialValue`
		expect(await getCalendarTrigger()).toHaveAttribute(
			'aria-label',
			`Change Date, ${formattedDate}`
		);

		// Click the `clear` button to clear the value
		await userEvent.click(await screen.getByTestId('clear'));

		// The input should be empty
		expect(await getInput()).toHaveValue('');

		// The calendar button triggers aria-label should be updated
		expect(await getCalendarTrigger()).toHaveAttribute(
			'aria-label',
			'Choose date'
		);
	});

	it('can render an invalid state', async () => {
		renderDatePicker({
			label: 'Example',
			value: new Date(2000, 1, 1),
			onChange: console.log,
			invalid: true,
			message: errorMessage,
		});
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('responds to an `onChange` callback', async () => {
		const onChange = jest.fn();

		const { container } = renderDatePicker({
			label: 'Example',
			value: undefined,
			onChange: onChange,
		});

		async function getCalendarTrigger() {
			return await container.querySelector('button[type="button"]');
		}

		const dateString = '01/01/2000';
		const date = parseDate(dateString) as Date;
		const formattedDate = formatHumanReadableDate(date);

		// Type in the input field
		await userEvent.type(await getInput(), dateString);
		expect(await getInput()).toHaveValue(dateString);

		expect(onChange).toHaveBeenCalledTimes(dateString.length);
		expect(onChange).toHaveBeenLastCalledWith(date);

		// The calendar button trigger should have an aria-label with the formatted display value
		expect(await getCalendarTrigger()).toHaveAttribute(
			'aria-label',
			`Change Date, ${formattedDate}`
		);
	});

	it('formSchema: yupDateField works when optional', () => {
		const optionalFormSchema = formSchema(false);
		expect(optionalFormSchema.isValidSync({ date: undefined })).toEqual(true);
		expect(optionalFormSchema.isValidSync({ date: new Date() })).toEqual(true);
		expect(optionalFormSchema.isValidSync({ date: '' })).toEqual(false);
		expect(optionalFormSchema.isValidSync({ date: '123' })).toEqual(false);
		expect(optionalFormSchema.isValidSync({ date: 'hello' })).toEqual(false);
		expect(optionalFormSchema.isValidSync({ date: '02/02/200' })).toEqual(
			false
		);
		expect(optionalFormSchema.isValidSync({ date: '2/2/2003' })).toEqual(false);
	});

	it('formSchema: yupDateField works when required', () => {
		const optionalFormSchema = formSchema(true);
		expect(optionalFormSchema.isValidSync({ date: undefined })).toEqual(false);
		expect(optionalFormSchema.isValidSync({ date: new Date() })).toEqual(true);
		expect(optionalFormSchema.isValidSync({ date: '' })).toEqual(false);
		expect(optionalFormSchema.isValidSync({ date: '123' })).toEqual(false);
		expect(optionalFormSchema.isValidSync({ date: 'hello' })).toEqual(false);
		expect(optionalFormSchema.isValidSync({ date: '02/02/200' })).toEqual(
			false
		);
		expect(optionalFormSchema.isValidSync({ date: '2/2/2003' })).toEqual(false);
	});

	it('form: can be submitted with a value', async () => {
		const dateString = '01/01/2000';
		const date = parseDate(dateString) as Date;

		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getInput(), dateString);

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).not.toHaveBeenCalled();
		expect(onSubmit).toHaveBeenCalledWith({
			date,
		});
	});

	it('form: can be submitted without a value as an optional field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).not.toHaveBeenCalled();
		expect(onSubmit).toHaveBeenCalledWith({
			date: undefined,
		});
	});

	it('form: shows validation errors as an optional field with invalid value', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getInput(), 'hello');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getInput()).toHaveFocus();
		expect(await getInput()).toHaveValue('hello');
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await userEvent.clear(await getInput());
		await expect(await getInput()).toHaveValue('');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			date: undefined,
		});
	});

	it('form: shows validation errors as an optional field with a semi-real date value', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getInput(), '1/2/2020');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getInput()).toHaveFocus();
		expect(await getInput()).toHaveValue('1/2/2020');
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await userEvent.clear(await getInput());
		await expect(await getInput()).toHaveValue('');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			date: undefined,
		});
	});

	it('form: shows validation errors as an optional field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm
				required={false}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getInput(), 'hello');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getInput()).toHaveFocus();
		expect(await getInput()).toHaveValue('hello');
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await userEvent.clear(await getInput());
		await expect(await getInput()).toHaveValue('');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			date: undefined,
		});
	});

	it('form: shows validation errors as a required field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm
				required={true}
				onSubmit={onSubmit}
				onError={onError}
			/>
		);

		// Type in an invalid value
		await userEvent.type(await getInput(), 'hello');

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getInput()).toHaveFocus();
		expect(await getInput()).toHaveValue('hello');
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');

		const validDateAsString = '02/03/2023';

		// Type in a valid value
		await userEvent.clear(await getInput());
		await expect(await getInput()).toHaveValue('');
		await userEvent.type(await getInput(), validDateAsString);
		await expect(await getInput()).toHaveValue(validDateAsString);

		// Submit the form
		await userEvent.click(await getSubmitButton());
		expect(onSubmit).toHaveBeenCalledWith({
			date: parseDate(validDateAsString),
		});
	});
});
