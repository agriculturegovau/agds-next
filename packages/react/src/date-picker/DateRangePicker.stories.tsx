import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';
import { Box, Flex, Stack } from '../box';
import { Button, ButtonGroup } from '../button';
import { Select } from '../select';
import { Prose } from '../prose';
import { DateRangePicker, DateRange } from './DateRangePicker';

const Template: StoryFn<typeof DateRangePicker> = (args) => {
	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});
	return <DateRangePicker {...args} value={range} onChange={setRange} />;
};

const meta: Meta<typeof DateRangePicker> = {
	title: 'forms/DatePicker/DateRangePicker',
	component: DateRangePicker,
	render: Template,
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

export const FiltersExample = () => {
	const [option, setOption] = useState<string>();

	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});

	return (
		<Stack gap={3}>
			<Flex gap={2}>
				<Select
					label="Example"
					placeholder="Please select"
					options={[
						{ label: 'A', value: 'a' },
						{ label: 'B', value: 'b' },
						{ label: 'C', value: 'c' },
					]}
					value={option}
					onChange={(e) => setOption(e.target.value)}
				/>
				<DateRangePicker value={range} onChange={setRange} />
			</Flex>
			<Prose>
				<ul>
					<li>Option: {option || 'Not set'}</li>
					<li>Date from: {range.from?.toLocaleDateString() || 'Not set'}</li>
					<li>Date to: {range.to?.toLocaleDateString() || 'Not set'}</li>
				</ul>
			</Prose>
		</Stack>
	);
};

export const ScrollExample: StoryFn<typeof DateRangePicker> = (args) => {
	return (
		<Box>
			<Box height="1000px"></Box>
			<Template {...args} />
			<Box height="1000px"></Box>
		</Box>
	);
};

export const ControlledExample = () => {
	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});
	return (
		<Stack gap={4} alignItems="flex-start">
			<DateRangePicker value={range} onChange={setRange} />
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
};
