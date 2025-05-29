import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDays, format } from 'date-fns';
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
import { parseDate } from '../date-picker/utils';
import { formatHumanReadableDate } from '../date-picker-next/utils';
import { errorMessage, yupDateField } from '../date-picker/test-utils';
import {
	DateRangePicker,
	type DateRange,
	type DateRangePickerProps,
	type DateRangeWithString,
} from './DateRangePicker';

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

function renderDateRangePicker(props: ControlledDatePickerProps) {
	return render(<ControlledDateRangePicker {...props} />);
}

type ControlledDatePickerProps = Omit<
	DateRangePickerProps,
	'value' | 'onChange'
> & {
	initialValue?: DateRangePickerProps['value']; // value is not allowed as it is controlled, but an `initialValue` can be passed in
	onChange?: DateRangePickerProps['onChange']; // onChange is optional
};

function ControlledDateRangePicker({
	initialValue = { from: undefined, to: undefined },
	onChange: onChangeProp,
	...props
}: ControlledDatePickerProps) {
	const [value, setValue] = useState<DateRangeWithString>(initialValue);

	function onChange(value: DateRange) {
		setValue(value);
		onChangeProp?.(value);
	}

	return (
		<DateRangePicker
			onChange={onChange}
			onFromInputChange={(from) => setValue({ ...value, from })}
			onToInputChange={(to) => setValue({ ...value, to })}
			value={value}
			{...props}
		/>
	);
}

const fromDateFieldBase = yupDateField
	// Ensures the start date is always before the end date
	.max(yup.ref('to'), 'Start date must be before the end date');

const toDateFieldBase = yupDateField
	// Ensures the end date is always after the start date
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
			noValidate
			onSubmit={handleSubmit((value) => onSubmit(value), onError)}
		>
			<Controller
				control={control}
				name="dateRange"
				render={({ field: { ref, value, onChange, ...field } }) => (
					<DateRangePicker
						fromInputRef={ref}
						legend="Date range"
						{...field}
						fromInvalid={Boolean(errors.dateRange?.from?.message)}
						message={
							errors.dateRange?.from?.message || errors.dateRange?.to?.message
						}
						onChange={onChange}
						onFromInputChange={(from) => onChange({ ...value, from })}
						onToInputChange={(to) => onChange({ ...value, to })}
						required
						toInvalid={Boolean(errors.dateRange?.to?.message)}
						value={value}
					/>
				)}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
}

async function getErrorMessage(message = errorMessage) {
	const el = await screen.findByText(message);
	expect(el).toBeInstanceOf(HTMLSpanElement);
	expect(el).toBeInTheDocument();
	return el as HTMLSpanElement;
}

function getLegend(text = 'Date format') {
	return screen.getByText(text).closest('legend') as HTMLLegendElement;
}

describe('DateRangePicker', () => {
	it.skip('renders correctly', () => {
		const { container } = renderDateRangePicker({
			initialValue: { from: new Date(2000, 0, 1), to: new Date(2000, 0, 2) },
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderDateRangePicker({
			initialValue: { from: new Date(2000, 0, 1), to: new Date(2000, 0, 2) },
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
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
		const fromDateString = '01/01/2000';
		const fromDate = parseDate(fromDateString) as Date;

		const toDateString = '02/01/2000';
		const toDate = parseDate(toDateString) as Date;

		render(
			<ControlledDateRangePicker
				initialValue={{
					from: fromDate,
					to: toDate,
				}}
			/>
		);

		expect(
			screen.getByRole('textbox', {
				name: 'Start date (e.g. 05/08/2015) (optional)',
			})
		).toHaveValue(fromDateString);
		expect(
			screen.getByRole('textbox', {
				name: 'End date (e.g. 06/08/2015) (optional)',
			})
		).toHaveValue(toDateString);
	});

	it('responds to an `onChange` callback when a date is valid', async () => {
		const onChange = jest.fn();

		renderDateRangePicker({
			onChange,
		});

		const fromDateString = '01/01/2000';
		const fromDate = parseDate(fromDateString) as Date;
		const fromFormattedDate = formatHumanReadableDate(fromDate);

		const toDateString = '02/01/2000';
		const toDate = parseDate(toDateString) as Date;
		const toFormattedDate = formatHumanReadableDate(toDate);

		const user = userEvent.setup();

		// Type in the input fields
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'Start date (e.g. 05/08/2015) (optional)',
				}),
				fromDateString
			)
		);
		await act(() => user.keyboard('{Tab}'));
		expect(
			screen.getByRole('textbox', {
				name: 'Start date (e.g. 05/08/2015) (optional)',
			})
		).toHaveValue(fromDateString);
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'End date (e.g. 06/08/2015) (optional)',
				}),
				toDateString
			)
		);
		await act(() => user.keyboard('{Tab}'));
		expect(
			screen.getByRole('textbox', {
				name: 'End date (e.g. 06/08/2015) (optional)',
			})
		).toHaveValue(toDateString);

		expect(onChange).toHaveBeenCalledTimes(2);

		// The calendar button triggers should have an aria-label with the formatted display value
		expect(
			screen.getByRole('button', {
				name: `Change start date, ${fromFormattedDate}`,
			})
		).toBeVisible();
		expect(
			screen.getByRole('button', {
				name: `Change end date, ${toFormattedDate}`,
			})
		).toBeVisible();
	});

	it('responds to an `onFromInputChange` callback when a date is invalid', async () => {
		const onFromInputChange = jest.fn();

		renderDateRangePicker({
			onFromInputChange,
		});

		const fromDateString = '01.01.2000';

		const user = userEvent.setup();

		// Type in the input fields
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'Start date (e.g. 05/08/2015) (optional)',
				}),
				fromDateString
			)
		);
		await act(() => user.keyboard('{Tab}'));
		expect(
			screen.getByRole('textbox', {
				name: 'Start date (e.g. 05/08/2015) (optional)',
			})
		).toHaveValue(fromDateString);

		expect(onFromInputChange).toHaveBeenCalledWith(fromDateString);

		// The calendar button triggers should have an aria-label with the formatted display value
		expect(
			screen.getByRole('button', { name: 'Choose start date' })
		).toBeVisible();
	});

	it('responds to an `onToInputChange` callback when a date is invalid', async () => {
		const onToInputChange = jest.fn();

		renderDateRangePicker({
			onToInputChange,
		});

		const toDateString = '01.01.2000';

		const user = userEvent.setup();

		// Type in the input fields
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'End date (e.g. 06/08/2015) (optional)',
				}),
				toDateString
			)
		);
		await act(() => user.keyboard('{Tab}'));
		expect(
			screen.getByRole('textbox', {
				name: 'End date (e.g. 06/08/2015) (optional)',
			})
		).toHaveValue(toDateString);

		expect(onToInputChange).toHaveBeenCalledWith(toDateString);

		// The calendar button triggers should have an aria-label with the formatted display value
		expect(
			screen.getByRole('button', {
				name: 'Choose end date',
			})
		).toBeVisible();
	});

	it('formats valid dates to the default date format (dd/MM/yyyy)', async () => {
		renderDateRangePicker({});

		const user = userEvent.setup();

		// Type valid dates in the input fields that are not in the display format
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'Start date (e.g. 05/08/2015) (optional)',
				}),
				'5 June 2023'
			)
		);
		await act(() => user.keyboard('{Tab}'));
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'End date (e.g. 06/08/2015) (optional)',
				}),
				'10 June 2023'
			)
		);
		await act(() => user.keyboard('{Tab}'));

		// The inputs should be formatted to dd/mm/yyyy
		expect(
			await screen.findByRole('textbox', {
				name: 'Start date (e.g. 05/08/2015) (optional)',
			})
		).toHaveValue('05/06/2023');
		expect(
			await screen.findByRole('textbox', {
				name: 'End date (e.g. 06/08/2015) (optional)',
			})
		).toHaveValue('10/06/2023');
	});

	it('formats valid dates to the `dateFormat` prop', async () => {
		renderDateRangePicker({ dateFormat: 'd MMM yyyy' });

		const user = userEvent.setup();

		// Type valid dates in the input fields that are not in the display format
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'Start date (e.g. 5 Aug 2015) (optional)',
				}),
				'05/06/2023'
			)
		);
		await act(() => user.keyboard('{Tab}'));
		await act(() =>
			user.type(
				screen.getByRole('textbox', {
					name: 'End date (e.g. 6 Aug 2015) (optional)',
				}),
				'10/06/2023'
			)
		);
		await act(() => user.keyboard('{Tab}'));

		// The inputs should be formatted to the dateFormat prop
		expect(
			screen.getByRole('textbox', {
				name: 'Start date (e.g. 5 Aug 2015) (optional)',
			})
		).toHaveValue('5 Jun 2023');
		expect(
			await screen.findByRole('textbox', {
				name: 'End date (e.g. 6 Aug 2015) (optional)',
			})
		).toHaveValue('10 Jun 2023');
	});

	describe('allowedDateFormats', () => {
		it('formats when a valid format is entered', async () => {
			renderDateRangePicker({
				allowedDateFormats: ['dd-MM-yyyy'],
			});

			const user = userEvent.setup();

			// Type valid dates in the input fields that are not in the display format
			await act(() =>
				user.type(
					screen.getByRole('textbox', {
						name: 'Start date (e.g. 05/08/2015) (optional)',
					}),
					'23-05-2023'
				)
			);
			await act(() => user.keyboard('{Tab}'));
			await act(() =>
				user.type(
					screen.getByRole('textbox', {
						name: 'End date (e.g. 06/08/2015) (optional)',
					}),
					'24-06-2023'
				)
			);
			await act(() => user.keyboard('{Tab}'));

			// The inputs should be formatted to the dateFormat prop
			expect(
				await screen.findByRole('textbox', {
					name: 'Start date (e.g. 05/08/2015) (optional)',
				})
			).toHaveValue('23/05/2023');
			expect(
				await screen.findByRole('textbox', {
					name: 'End date (e.g. 06/08/2015) (optional)',
				})
			).toHaveValue('24/06/2023');
		});

		it('doesn’t format when an invalid format is entered', async () => {
			renderDateRangePicker({
				allowedDateFormats: ['dd-MM-yyyy'],
			});

			const user = userEvent.setup();

			// Type valid dates in the input fields that are not in the display format
			await act(() =>
				user.type(
					screen.getByRole('textbox', {
						name: 'Start date (e.g. 05/08/2015) (optional)',
					}),
					'05-23-2023'
				)
			);
			await act(() => user.keyboard('{Tab}'));

			await act(() =>
				user.type(
					screen.getByRole('textbox', {
						name: 'End date (e.g. 06/08/2015) (optional)',
					}),
					'06-24-2023'
				)
			);
			await act(() => user.keyboard('{Tab}'));

			// The inputs should not be formatted to the dateFormat prop
			expect(
				screen.getByRole('textbox', {
					name: 'Start date (e.g. 05/08/2015) (optional)',
				})
			).toHaveValue('05-23-2023');
			expect(
				screen.getByRole('textbox', {
					name: 'End date (e.g. 06/08/2015) (optional)',
				})
			).toHaveValue('06-24-2023');
		});

		it('adds the dateFormat to allowedDateFormats if not explicitly specificied and formats appropriately', async () => {
			renderDateRangePicker({
				allowedDateFormats: ['MM/dd/yyyy'],
				dateFormat: 'dd MMMM yyyy',
			});

			const user = userEvent.setup();

			// Type valid dates in the input field that isn't in the display format
			await act(() =>
				user.type(
					screen.getByRole('textbox', {
						name: 'Start date (e.g. 05 August 2015) (optional)',
					}),
					'08 Feb 2023'
				)
			);
			await act(() => user.keyboard('{Tab}'));

			await act(() =>
				user.type(
					screen.getByRole('textbox', {
						name: 'End date (e.g. 06 August 2015) (optional)',
					}),
					'09 Mar 2023'
				)
			);
			await act(() => user.keyboard('{Tab}'));

			// The inputs should be formatted to the dateFormat prop
			expect(
				screen.getByRole('textbox', {
					name: 'Start date (e.g. 05 August 2015) (optional)',
				})
			).toHaveValue('08 February 2023');
			expect(
				screen.getByRole('textbox', {
					name: 'End date (e.g. 06 August 2015) (optional)',
				})
			).toHaveValue('09 March 2023');
		});
	});

	it('legend: renders a hidden legend by default when optional', async () => {
		renderDateRangePicker({
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			required: false,
		});
		expect(
			screen.getByText(
				(_, element) => element?.textContent === 'Date range (optional)'
			)
		).toBeVisible();
	});

	it('legend: renders a hidden legend by default when required', async () => {
		const defaultLegend = 'Date range';

		renderDateRangePicker({
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			required: true,
		});
		expect(getLegend(defaultLegend).textContent).toEqual(`${defaultLegend}`);
	});

	it('legend: can render a different legend when optional', async () => {
		const legend = 'Date period';

		renderDateRangePicker({
			legend,
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
		});
		expect(getLegend(legend).textContent).toEqual(`${legend} (optional)`);
	});

	it('legend: can render a different legend when required', async () => {
		const legend = 'Date period';

		renderDateRangePicker({
			legend,
			required: true,
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
		});
		expect(getLegend(legend).textContent).toEqual(`${legend}`);
	});

	it('shows date format when legend is supplied', async () => {
		renderDateRangePicker({
			legend: 'Date range',
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
		});
		const inputFrom = screen.getByRole('textbox', {
			name: 'Start date (e.g. 05/08/2015)',
		});

		const inputTo = screen.getByRole('textbox', {
			name: 'End date (e.g. 06/08/2015)',
		});

		expect(inputFrom).toBeVisible();
		expect(inputTo).toBeVisible();
	});

	it('shows date format when no legend is supplied', async () => {
		const { container } = renderDateRangePicker({
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
		});
		const inputFromId = screen.getByRole('textbox', {
			name: 'Start date (e.g. 05/08/2015) (optional)',
		})?.id;
		const labelFrom = container.querySelector(`[for="${inputFromId}"]`);

		const inputToId = screen.getByRole('textbox', {
			name: 'End date (e.g. 06/08/2015) (optional)',
		})?.id;
		const labelTo = container.querySelector(`[for="${inputToId}"]`);

		expect(labelFrom?.textContent).toEqual(
			`Start date (e.g. ${format(mockSystemTime, 'dd/MM/yyyy')}) (optional)`
		);
		expect(labelTo?.textContent).toEqual(
			`End date (e.g. ${format(
				addDays(mockSystemTime, 1),
				'dd/MM/yyyy'
			)}) (optional)`
		);
	});

	it('invalid: can render an invalid state when both fields are invalid', async () => {
		renderDateRangePicker({
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			fromInvalid: true,
			toInvalid: true,
			message: errorMessage,
		});
		expect(
			screen.getByRole('textbox', {
				name: 'Start date (e.g. 05/08/2015) (optional)',
			})
		).toHaveAttribute('aria-invalid', 'true');
		expect(
			screen.getByRole('textbox', {
				name: 'End date (e.g. 06/08/2015) (optional)',
			})
		).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('invalid: can render an invalid state when only from is invalid', async () => {
		renderDateRangePicker({
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			fromInvalid: true,
			toInvalid: false,
			message: errorMessage,
		});
		expect(
			screen.getByRole('textbox', {
				name: 'Start date (e.g. 05/08/2015) (optional)',
			})
		).toHaveAttribute('aria-invalid', 'true');
		expect(
			screen.getByRole('textbox', {
				name: 'End date (e.g. 06/08/2015) (optional)',
			})
		).toHaveAttribute('aria-invalid', 'false');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('invalid: can render an invalid state when only to is invalid', async () => {
		renderDateRangePicker({
			initialValue: { from: new Date(2000, 1, 1), to: new Date(2000, 1, 2) },
			fromInvalid: false,
			toInvalid: true,
			message: errorMessage,
		});
		expect(
			screen.getByRole('textbox', {
				name: 'Start date (e.g. 05/08/2015) (optional)',
			})
		).toHaveAttribute('aria-invalid', 'false');
		expect(
			screen.getByRole('textbox', {
				name: 'End date (e.g. 06/08/2015) (optional)',
			})
		).toHaveAttribute('aria-invalid', 'true');
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
		const fromValidDateAsString = '02/03/2024';
		const toValidDateAsString = '03/03/2024';

		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		const user = userEvent.setup();

		// Type in a valid value
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' }),
				fromValidDateAsString
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue(fromValidDateAsString);

		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' }),
				toValidDateAsString
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveValue(toValidDateAsString);

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
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
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		const user = userEvent.setup();

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
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
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		const user = userEvent.setup();

		// Type in an invalid value
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' }),
				'hi'
			)
		);
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' }),
				'hello'
			)
		);

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveFocus();
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue('hi');
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveAttribute('aria-invalid', 'true');
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveValue('hello');
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await act(() =>
			user.clear(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue('');
		await act(() =>
			user.clear(
				screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveValue('');

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: { from: undefined, to: undefined },
		});
	});

	it('form: shows validation errors as an optional field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				onError={onError}
				onSubmit={onSubmit}
				required={false}
			/>
		);

		const user = userEvent.setup();

		// Type in an invalid value
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' }),
				'hello'
			)
		);

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveFocus();
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue('hello');
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveAttribute('aria-invalid', 'true');

		// Type in a valid value
		await act(() =>
			user.clear(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue('');

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: { from: undefined, to: undefined },
		});
	});

	it('form: shows validation errors as a required field', async () => {
		const onSubmit = jest.fn();
		const onError = jest.fn();

		render(
			<DateRangePickerInsideForm
				onError={onError}
				onSubmit={onSubmit}
				required
			/>
		);

		const user = userEvent.setup();

		// Type in an invalid value
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' }),
				'hi'
			)
		);
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' }),
				'hello'
			)
		);

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
		expect(onError).toHaveBeenCalledTimes(1);

		// Expect an error
		const errorMessage = await getErrorMessage();
		expect(errorMessage).toBeInTheDocument();
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveFocus();
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue('hi');
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveAttribute('aria-invalid', 'true');
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveValue('hello');
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveAttribute('aria-invalid', 'true');

		const fromValidDateAsString = '02/03/2024';
		const toValidDateAsString = '03/03/2024';

		// Type in a valid value
		await act(() =>
			user.clear(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue('');
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' }),
				fromValidDateAsString
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'Start date (e.g. 05/08/2015)' })
		).toHaveValue(fromValidDateAsString);

		await act(() =>
			user.clear(
				screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveValue('');
		await act(() =>
			user.type(
				screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' }),
				toValidDateAsString
			)
		);
		expect(
			screen.getByRole('textbox', { name: 'End date (e.g. 06/08/2015)' })
		).toHaveValue(toValidDateAsString);

		// Submit the form
		await act(() => user.click(screen.getByRole('button', { name: 'Submit' })));
		expect(onSubmit).toHaveBeenCalledWith({
			dateRange: {
				from: parseDate(fromValidDateAsString),
				to: parseDate(toValidDateAsString),
			},
		});
	});

	describe('focus', () => {
		const todayDate = new Date(mockSystemTime);

		const fromDate = new Date(todayDate);
		fromDate.setDate(todayDate.getDate() - 2);
		const fromFormattedDate = formatHumanReadableDate(fromDate);

		const toDate = new Date(todayDate);
		toDate.setDate(todayDate.getDate() + 2);
		const toFormattedDate = formatHumanReadableDate(toDate);

		it('contains all the required data attributes in the calendar table cells required for focus events', async () => {
			renderDateRangePicker({
				initialValue: {
					from: fromDate,
					to: toDate,
				},
			});

			const startDateButton = screen.getByRole('button', {
				name: `Change start date, ${fromFormattedDate}`,
			});
			fireEvent.click(startDateButton);

			await waitFor(() => {
				[
					'td[data-start-day="true"]',
					'td[data-end-day="true"]',
					'td[data-selected="true"]',
					'td[data-today="true"]',
				].forEach((query) => {
					const element = document.querySelector(query);
					expect(element).toBeInTheDocument();
				});
			});
		});

		// Target tests should be run when any changes are made to the component
		// We disable these tests to reduce runtime duration in pipeline
		describe.skip('race condition targets', () => {
			it('focuses on `start-date` when both dates are selected and the "change start date" button is clicked', async () => {
				renderDateRangePicker({
					initialValue: {
						from: fromDate,
						to: toDate,
					},
				});

				const startDateButton = screen.getByRole('button', {
					name: `Change start date, ${fromFormattedDate}`,
				});
				fireEvent.click(startDateButton);

				await waitFor(() => {
					const startDayElement = document.querySelector(
						'td[data-start-day="true"]'
					);
					expect(startDayElement).toBeInTheDocument();
					expect(startDayElement).toHaveFocus();
				});
			});

			it('focuses on `end-date` when both dates are selected and the "change end date" button is clicked', async () => {
				renderDateRangePicker({
					initialValue: {
						from: fromDate,
						to: toDate,
					},
				});

				const endDateButton = screen.getByRole('button', {
					name: `Change end date, ${toFormattedDate}`,
				});
				fireEvent.click(endDateButton);

				await waitFor(() => {
					const endDayElement = document.querySelector(
						'td[data-end-day="true"]'
					);
					expect(endDayElement).toBeInTheDocument();
					expect(endDayElement).toHaveFocus();
				});
			});

			describe('one date currently selected', () => {
				async function renderAndCheckFocuses({
					ariaLabel,
					buttonName,
					initialValue,
				}: {
					ariaLabel: string;
					buttonName: string;
					initialValue: DateRange;
				}) {
					renderDateRangePicker({
						initialValue,
					});

					const buttonElement = screen.getByRole('button', {
						name: buttonName,
					});
					fireEvent.click(buttonElement);

					await waitFor(() => {
						const targetElement = document.querySelector(
							'td[data-selected="true"]'
						);
						expect(targetElement).toBeInTheDocument();
						expect(targetElement).toHaveFocus();
						// Check expected element to have focus is the correct date by aria-label
						expect(targetElement?.getAttribute('aria-label')).toBe(ariaLabel);
					});
				}

				it('focuses on the `start-date` when the start date is selected and the "Change start date" button is pressed', async () => {
					await renderAndCheckFocuses({
						ariaLabel: `Selected. ${fromFormattedDate}`,
						buttonName: `Change start date, ${fromFormattedDate}`,
						initialValue: {
							from: fromDate,
							to: undefined,
						},
					});
				});

				it('focuses on the `start-date` when the start date is selected and the "Choose end date" button is pressed', async () => {
					await renderAndCheckFocuses({
						ariaLabel: `Selected. ${fromFormattedDate}`,
						buttonName: 'Choose end date',
						initialValue: {
							from: fromDate,
							to: undefined,
						},
					});
				});

				it('focuses on the `end-date` when the end date is selected and the "Choose start date" button is pressed', async () => {
					await renderAndCheckFocuses({
						ariaLabel: `Selected. ${toFormattedDate}`,
						buttonName: 'Choose start date',
						initialValue: {
							from: undefined,
							to: toDate,
						},
					});
				});

				it('focuses on the `end-date` when the end date is selected and the "Change end date" button is pressed', async () => {
					await renderAndCheckFocuses({
						ariaLabel: `Selected. ${toFormattedDate}`,
						buttonName: `Change end date, ${toFormattedDate}`,
						initialValue: {
							from: undefined,
							to: toDate,
						},
					});
				});
			});

			it('focuses to the `today` date by default', async () => {
				renderDateRangePicker({
					initialValue: {
						from: undefined,
						to: undefined,
					},
				});

				const startDateButton = screen.getByRole('button', {
					name: `Choose start date`,
				});
				fireEvent.click(startDateButton);

				await waitFor(() => {
					const todayElement = document.querySelector('td[data-today="true"]');
					expect(todayElement).toBeInTheDocument();
					expect(todayElement).toHaveFocus();
				});
			});
		});
	});
});
