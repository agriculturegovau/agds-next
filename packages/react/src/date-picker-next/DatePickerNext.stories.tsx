import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { sub, subDays, addDays } from 'date-fns';
import { Box } from '../box';
import { Stack } from '../stack';
import { Button, ButtonGroup } from '../button';
import { DatePickerNext, DatePickerNextProps } from './DatePickerNext';
import { isValidDate } from './utils';

type DateOrStringOrUndefined = Date | string | undefined;

function ControlledDatePickerNext(props: DatePickerNextProps) {
	const [value, setValue] = useState<DateOrStringOrUndefined>();

	const isInvalid = useCallback(
		(value: DateOrStringOrUndefined) =>
			!isValidDate(value, {
				minDate: props.minDate ? sub(props.minDate, { days: 1 }) : undefined,
				maxDate: props.maxDate,
			}),
		[props.maxDate, props.minDate]
	);

	const invalid = props.invalid || value ? isInvalid(value) : false;

	return (
		<DatePickerNext
			{...props}
			invalid={invalid}
			message={props.message || (invalid ? 'Enter a valid date' : undefined)}
			onChange={setValue}
			value={value}
		/>
	);
}

const meta: Meta<typeof DatePickerNext> = {
	title: 'forms/DatePickerNext/DatePickerNext',
	component: DatePickerNext,
	args: {
		label: 'Example',
	},
	render: ControlledDatePickerNext,
};

export default meta;

type Story = StoryObj<typeof DatePickerNext>;

export const Basic: Story = {};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

const today = new Date();
const lastWeek = subDays(today, 7);
const nextWeek = addDays(today, 7);
export const MinMaxDates: Story = {
	args: {
		minDate: lastWeek,
		maxDate: nextWeek,
	},
};

export const InitialMonth: Story = {
	args: {
		initialMonth: new Date(1999, 11, 1),
	},
};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const Invalid: Story = {
	args: {
		invalid: true,
		message: 'Enter a valid date',
	},
};

export const Hint: Story = {
	args: {
		hint: 'We will only use this to respond to your question',
	},
};

export const Block: Story = {
	args: {
		block: true,
	},
};

export const AlternativeDateFormat: Story = {
	args: {
		dateFormat: 'd MMM yyyy',
	},
};

export const CustomAllowedDateFormats: Story = {
	args: {
		allowedDateFormats: ['dd/MM/yyyy', 'dd-MM-yyyy', 'dd MM yyyy'],
	},
};

export const ScrollExample: Story = {
	render: (props) => (
		<Box>
			<Box height="1000px"></Box>
			<ControlledDatePickerNext {...props} />
			<Box height="1000px"></Box>
		</Box>
	),
};

export const ClearableExample: Story = {
	render: function Render(props) {
		const [value, setValue] = useState<Date | string | undefined>();
		return (
			<Stack alignItems="flex-start" gap={4}>
				<DatePickerNext {...props} onChange={setValue} value={value} />
				<ButtonGroup>
					<Button onClick={() => setValue(new Date(1999, 11, 25))}>
						Set pre-defined date
					</Button>
					<Button onClick={() => setValue(undefined)} variant="secondary">
						Clear
					</Button>
				</ButtonGroup>
			</Stack>
		);
	},
};
