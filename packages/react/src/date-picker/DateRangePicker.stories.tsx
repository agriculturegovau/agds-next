import { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';
import { Box, Stack } from '../box';
import { Button, ButtonGroup } from '../button';
import {
	DateRangePicker,
	DateRangePickerProps,
	DateRangeWithString,
} from './DateRangePicker';

function ControlledDateRangePicker(props: DateRangePickerProps) {
	const [range, setRange] = useState<DateRangeWithString>({
		from: undefined,
		to: undefined,
	});
	return (
		<DateRangePicker
			{...props}
			value={range}
			onChange={setRange}
			onFromInputChange={(from) => setRange((range) => ({ ...range, from }))}
			onToInputChange={(to) => setRange((range) => ({ ...range, to }))}
		/>
	);
}

const meta: Meta<typeof DateRangePicker> = {
	title: 'forms/DatePicker/DateRangePicker',
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
		const [range, setRange] = useState<DateRangeWithString>({
			from: undefined,
			to: undefined,
		});
		return (
			<Stack gap={4} alignItems="flex-start">
				<DateRangePicker
					{...props}
					value={range}
					onChange={setRange}
					onFromInputChange={(from) => setRange({ ...range, from })}
					onToInputChange={(to) => setRange({ ...range, to })}
				/>
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
						variant="secondary"
						onClick={() => setRange({ from: undefined, to: undefined })}
					>
						Clear range
					</Button>
				</ButtonGroup>
			</Stack>
		);
	},
};
