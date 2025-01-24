import { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';
import { Box } from '../box';
import { Stack } from '../stack';
import { Button, ButtonGroup } from '../button';
import {
	DateRange,
	DateRangePicker,
	DateRangePickerProps,
} from './DateRangePicker';

function ControlledDateRangePicker(props: DateRangePickerProps) {
	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});
	return <DateRangePicker {...props} onChange={setRange} value={range} />;
}

const meta: Meta<typeof DateRangePicker> = {
	title: 'forms/DateRangePicker',
	component: DateRangePicker,
	render: ControlledDateRangePicker,
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

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

export const Legend: Story = {
	args: {
		legend: 'Date range',
	},
};

export const HideOptionalLabel: Story = {
	args: {
		legend: 'Date range',
		hideOptionalLabel: true,
	},
};

export const Hint: Story = {
	args: {
		legend: 'Date range',
		hint: 'Hint text',
	},
};

export const Invalid: Story = {
	args: {
		legend: 'Date range',
		fromInvalid: true,
		toInvalid: true,
		message: 'Enter a valid date',
	},
};

export const FromInvalid: Story = {
	args: {
		legend: 'Date range',
		fromInvalid: true,
		message: 'Enter a valid date',
	},
};

export const ToInvalid: Story = {
	args: {
		legend: 'Date range',
		toInvalid: true,
		message: 'Enter a valid date',
	},
};

export const ToInvalidWithHint: Story = {
	args: {
		legend: 'Date range',
		toInvalid: true,
		message: 'Enter a valid date',
		hint: 'Hint text',
	},
};

export const Required: Story = {
	args: {
		legend: 'Date range',
		required: true,
	},
};

export const Labels: Story = {
	args: {
		fromLabel: 'From',
		toLabel: 'To',
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
			<ControlledDateRangePicker {...props} />
			<Box height="1000px"></Box>
		</Box>
	),
};

export const ClearableExample: Story = {
	render: function Render(props) {
		const [range, setRange] = useState<DateRange>({
			from: undefined,
			to: undefined,
		});
		return (
			<Stack alignItems="flex-start" gap={4}>
				<DateRangePicker {...props} onChange={setRange} value={range} />
				<ButtonGroup>
					<Button
						onClick={() =>
							setRange({
								from: new Date(2020, 7, 14),
								to: new Date(2020, 7, 18),
							})
						}
					>
						Set pre-defined range
					</Button>
					<Button
						onClick={() => setRange({ from: undefined, to: undefined })}
						variant="secondary"
					>
						Clear range
					</Button>
				</ButtonGroup>
			</Stack>
		);
	},
};
