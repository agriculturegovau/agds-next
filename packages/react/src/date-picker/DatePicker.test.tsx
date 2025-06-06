import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from '../../../../test-utils';
import { Button } from '../button';
import { formatHumanReadableDate } from '../date-picker-next/utils';
import { DatePicker, type DatePickerProps } from './DatePicker';
import { parseDate } from './utils';
import { errorMessage, yupDateField } from './test-utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

// Mock `useDebouncedCallback` so that the callback is called immediately
jest.mock('use-debounce', () => ({
	useDebouncedCallback: jest.fn().mockImplementation((callback) => {
		return callback;
	}),
}));

// Mock the current date so snapshot outputs are always consistent
const mockSystemTime = new Date(2015, 7, 5);
beforeAll(() => {
	jest.useFakeTimers({ advanceTimers: true });
	jest.setSystemTime(mockSystemTime);
});

afterAll(() => {
	jest.useRealTimers();
});

type ControlledDatePickerProps = Omit<DatePickerProps, 'value' | 'onChange'> & {
	initialValue?: DatePickerProps['value']; // value is not allowed as it is controlled, but an `initialValue` can be passed in
	onChange?: DatePickerProps['onChange']; // onChange is optional
};

function renderDatePicker(props: ControlledDatePickerProps) {
	return render(<ControlledDatePicker {...props} />);
}

function ControlledDatePicker({
	initialValue: initialValueProp,
	onChange: onChangeProp,
	...props
}: ControlledDatePickerProps) {
	const [value, setValue] = useState<Date | string | undefined>(
		initialValueProp
	);

	function onChange(value: Date | undefined) {
		setValue(value);
		onChangeProp?.(value);
	}

	return (
		<DatePicker
			onChange={onChange}
			onInputChange={setValue}
			value={value}
			{...props}
		/>
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
			noValidate
			onSubmit={handleSubmit((value) => onSubmit(value), onError)}
		>
			<Controller
				control={control}
				name="date"
				render={({ field: { ref, ...field } }) => (
					<DatePicker
						inputRef={ref}
						label="Date"
						{...field}
						id="date"
						invalid={Boolean(errors.date?.message)}
						message={errors.date?.message}
						onInputChange={field.onChange}
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
	it.skip('renders correctly', () => {
		const { container } = renderDatePicker({
			label: 'Example',
			initialValue: new Date(2000, 0, 1),
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderDatePicker({
			label: 'Example',
			initialValue: new Date(2000, 1, 1),
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// React 18's `useId` breaks this rule
				'valid-id': 'off',
				// Our Popover component uses inline styles as recommended by floating-ui - https://floating-ui.com/docs/usefloating#usage
				'no-inline-style': 'off',
			},
		});
		await act(async () => {
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('updates correctly based on the `value` prop', async () => {
		const dateString = '01/01/2000';
		const date = parseDate(dateString) as Date;

		render(<ControlledDatePicker initialValue={date} label="Example" />);

		// The input should be a formatted display value of `initialValue`
		expect(
			screen.getByRole('textbox', {
				name: 'Example (e.g. 05/08/2015) (optional)',
			})
		).toHaveValue(dateString);
	});

	it('can render an invalid state', async () => {
		renderDatePicker({
			label: 'Example',
			initialValue: new Date(2000, 1, 1),
			invalid: true,
			message: errorMessage,
		});
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('responds to an `onChange` callback when a date is valid', async () => {
		const onChange = jest.fn();

		renderDatePicker({
			label: 'Example',
			onChange,
		});

		const dateString = '01/01/2000';
		const date = parseDate(dateString) as Date;
		const formattedDate = formatHumanReadableDate(date);

		const user = userEvent.setup();

		// Type in the input field
		await act(async () => user.type(await getInput(), dateString));
		expect(await getInput()).toHaveValue(dateString);
		await act(() => user.keyboard('{Tab}'));

		expect(onChange).toHaveBeenLastCalledWith(date);

		// The calendar button trigger should have an aria-label with the formatted display value
		expect(
			screen.getByRole('button', { name: `Change date, ${formattedDate}` })
		).toBeVisible();
	});

	it('responds to an `onInputChange` callback when a date is invalid', async () => {
		const onInputChange = jest.fn();

		renderDatePicker({
			label: 'Example',
			onInputChange,
		});

		const user = userEvent.setup();

		const dateString = '01.01.2000';

		// Type in the input field
		await act(async () => user.type(await getInput(), dateString));
		expect(await getInput()).toHaveValue(dateString);
		await act(() => user.keyboard('{Tab}'));

		expect(onInputChange).toHaveBeenLastCalledWith(dateString);

		// The calendar button trigger should have the default aria-label
		expect(screen.getByRole('button', { name: `Choose date` })).toBeVisible();
	});

	it('formats valid dates to the default date format (dd/MM/yyyy)', async () => {
		renderDatePicker({ label: 'Example' });

		const user = userEvent.setup();

		// Type a valid date in the input field that isn't in the display format
		await act(async () => user.type(await getInput(), 'June 5th 2023'));
		await act(() => user.keyboard('{Tab}'));

		// The input should be formatted to dd/MM/yyyy
		expect(await getInput()).toHaveValue('05/06/2023');
	});

	it('formats valid dates to the `dateFormat` prop', async () => {
		renderDatePicker({
			label: 'Example',
			dateFormat: 'd MMM yyyy',
		});

		const user = userEvent.setup();

		// Type a valid date in the input field that isn't in the display format
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'Example (e.g. 5 Aug 2015) (optional)',
				}),
				'05 06 2023'
			)
		);
		await act(() => user.keyboard('{Tab}'));

		// The input should be formatted to the dateFormat prop
		expect(
			screen.getByRole('textbox', {
				name: 'Example (e.g. 5 Aug 2015) (optional)',
			})
		).toHaveValue('5 Jun 2023');
	});

	it('doesn’t format when an invalid format is entered', async () => {
		renderDatePicker({
			dateFormat: 'd MMM yyyy',
			label: 'Example',
		});

		const user = userEvent.setup();

		// Type a valid date in the input field that isn't in the allowed format
		await act(async () => user.type(await getInput(), '05.23.2023'));
		await act(() => user.keyboard('{Tab}'));

		// The input should not be formatted to the dateFormat prop
		expect(await getInput()).toHaveValue('05.23.2023');
	});

	describe('allowedDateFormats', () => {
		it('formats when a valid format is entered', async () => {
			renderDatePicker({
				allowedDateFormats: ['dd-MM-yyyy'],
				label: 'Example',
			});

			const user = userEvent.setup();

			// Type a valid date in the input field that is in the allowed format
			await act(async () => user.type(await getInput(), '23-05-2023'));
			await act(() => user.keyboard('{Tab}'));

			// The input should be formatted to the dateFormat prop
			expect(await getInput()).toHaveValue('23/05/2023');
		});

		it('doesn’t format when an invalid format is entered', async () => {
			renderDatePicker({
				allowedDateFormats: ['dd-MM-yyyy'],
				label: 'Example',
			});

			const user = userEvent.setup();

			// Type a valid date in the input field that isn't in the allowed format
			await act(async () => user.type(await getInput(), '05-23-2023'));
			await act(() => user.keyboard('{Tab}'));

			// The input should not be formatted to the dateFormat prop
			expect(await getInput()).toHaveValue('05-23-2023');
		});

		it('adds the dateFormat to allowedDateFormats if not explicitly specificied and formats appropriately', async () => {
			renderDatePicker({
				allowedDateFormats: ['MM/dd/yyyy'],
				dateFormat: 'dd MMMM yyyy',
				label: 'Example',
			});

			const user = userEvent.setup();

			// Type a valid date in the input field that isn't in the display format
			await act(() =>
				user.type(
					screen.getByRole('textbox', {
						name: 'Example (e.g. 05 August 2015) (optional)',
					}),
					'08 Feb 2023'
				)
			);
			await act(() => user.keyboard('{Tab}'));

			// The input should be formatted to the dateFormat prop
			expect(
				await screen.findByRole('textbox', {
					name: 'Example (e.g. 05 August 2015) (optional)',
				})
			).toHaveValue('08 February 2023');
		});
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
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		// Type in an invalid value
		await act(async () => userEvent.type(await getInput(), dateString));

		// Submit the form
		await act(async () => userEvent.click(await getSubmitButton()));
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
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		// Submit the form
		await act(async () => userEvent.click(await getSubmitButton()));
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
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		const user = userEvent.setup();

		// Type in an invalid value
		await act(async () => user.type(await getInput(), 'hello'));

		// Submit the form
		await act(async () => user.click(await getSubmitButton()));
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getInput()).toHaveFocus();
		expect(await getInput()).toHaveValue('hello');
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await act(async () => user.clear(await getInput()));
		expect(await getInput()).toHaveValue('');

		// Submit the form
		await act(async () => user.click(await getSubmitButton()));
		expect(onSubmit).toHaveBeenCalledWith({
			date: undefined,
		});
	});

	it('form: shows validation errors as an optional field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		const user = userEvent.setup();

		// Type in an invalid value
		await act(async () => user.type(await getInput(), 'hello'));

		// Submit the form
		await act(async () => user.click(await getSubmitButton()));
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getInput()).toHaveFocus();
		expect(await getInput()).toHaveValue('hello');
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await act(async () => user.clear(await getInput()));
		expect(await getInput()).toHaveValue('');

		// Submit the form
		await act(async () => user.click(await getSubmitButton()));
		expect(onSubmit).toHaveBeenCalledWith({
			date: undefined,
		});
	});

	it('form: shows validation errors as a required field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DatePickerInsideForm onError={onError} onSubmit={onSubmit} required />
		);

		const user = userEvent.setup();

		// Type in an invalid value
		await act(async () => user.type(await getInput(), 'hello'));

		// Submit the form
		await act(async () => user.click(await getSubmitButton()));
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(await getInput()).toHaveFocus();
		expect(await getInput()).toHaveValue('hello');
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');

		const validDateAsString = '02/03/2024';

		// Type in a valid value
		await act(async () => user.clear(await getInput()));
		expect(await getInput()).toHaveValue('');
		await act(async () => user.type(await getInput(), validDateAsString));
		expect(await getInput()).toHaveValue(validDateAsString);

		// Submit the form
		await act(async () => user.click(await getSubmitButton()));
		expect(onSubmit).toHaveBeenCalledWith({
			date: parseDate(validDateAsString),
		});
	});

	describe('focus', () => {
		const todayDate = new Date(mockSystemTime);
		const selectedDate = new Date(todayDate);
		selectedDate.setDate(todayDate.getDate() + 2);
		const selectedFormattedDate = formatHumanReadableDate(selectedDate);

		it('contains all the required data attributes in the calendar table cells required for focus events', async () => {
			renderDatePicker({
				label: 'Example',
				initialValue: selectedDate,
			});

			const selectDateButton = screen.getByRole('button', {
				name: `Change date, ${selectedFormattedDate}`,
			});
			fireEvent.click(selectDateButton);

			await waitFor(() => {
				['td[data-selected="true"]', 'td[data-today="true"]'].forEach(
					(query) => {
						const element = document.querySelector(query);
						expect(element).toBeInTheDocument();
					}
				);
			});
		});

		// Target tests should be run when any changes are made to the component
		// We disable these tests to reduce runtime duration in pipeline
		describe.skip('race condition targets', () => {
			it('focuses on the `selected` date when the calendar opens and there is a date value', async () => {
				renderDatePicker({
					label: 'Example',
					initialValue: selectedDate,
				});

				const selectDateButton = screen.getByRole('button', {
					name: `Change date, ${selectedFormattedDate}`,
				});
				fireEvent.click(selectDateButton);

				await waitFor(() => {
					const selectedDateElement = document.querySelector(
						'td[data-selected="true"]'
					);
					expect(selectedDateElement).toBeInTheDocument();
					expect(selectedDateElement).toHaveFocus();
				});
			});

			it('focuses on the `today` date when the calendar opens and there is no date value', async () => {
				renderDatePicker({
					label: 'Example',
				});

				const selectDateButton = screen.getByRole('button', {
					name: `Choose date`,
				});
				fireEvent.click(selectDateButton);

				await waitFor(() => {
					const todayDateElement = document.querySelector(
						'td[data-today="true"]'
					);
					expect(todayDateElement).toBeInTheDocument();
					expect(todayDateElement).toHaveFocus();
				});
			});
		});
	});
});
