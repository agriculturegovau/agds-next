import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';
import { Box, Flex, Stack } from '../box';
import { Button, ButtonGroup } from '../button';
import { Select } from '../select';
import { Prose } from '../prose';
import { DateRangePicker, DateRangeWithString } from './DateRangePicker';

export default {
	title: 'forms/DatePicker/DateRangePicker',
	component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>;

const Template: ComponentStory<typeof DateRangePicker> = (args) => {
	const [range, setRange] = useState<DateRangeWithString>({
		from: undefined,
		to: undefined,
	});
	return (
		<DateRangePicker
			{...args}
			value={range}
			onChange={setRange}
			onFromInputChange={(from) => setRange((range) => ({ ...range, from }))}
			onToInputChange={(to) => setRange((range) => ({ ...range, to }))}
		/>
	);
};

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};

const today = new Date();
const lastWeek = subDays(today, 7);
const nextWeek = addDays(today, 7);
export const MinMaxDates = Template.bind({});
MinMaxDates.args = {
	minDate: lastWeek,
	maxDate: nextWeek,
};

export const Legend = Template.bind({});
Legend.args = {
	legend: 'Date range',
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	legend: 'Date range',
	hideOptionalLabel: true,
};

export const Hint = Template.bind({});
Hint.args = {
	legend: 'Date range',
	hint: 'Hint text',
};

export const Invalid = Template.bind({});
Invalid.args = {
	legend: 'Date range',
	fromInvalid: true,
	toInvalid: true,
	message: 'Enter a valid date',
};

export const FromInvalid = Template.bind({});
FromInvalid.args = {
	legend: 'Date range',
	fromInvalid: true,
	message: 'Enter a valid date',
};

export const ToInvalid = Template.bind({});
ToInvalid.args = {
	legend: 'Date range',
	toInvalid: true,
	message: 'Enter a valid date',
};

export const Required = Template.bind({});
Required.args = {
	legend: 'Date range',
	required: true,
};

export const Labels = Template.bind({});
Labels.args = {
	fromLabel: 'From',
	toLabel: 'To',
};

export const FiltersExample = () => {
	const [option, setOption] = useState<string>();

	const [range, setRange] = useState<DateRangeWithString>({
		from: undefined,
		to: undefined,
	});

	const dateFrom =
		range.from && typeof range.from !== 'string'
			? range.from.toLocaleDateString()
			: 'Not set';

	const dateTo =
		range.to && typeof range.to !== 'string'
			? range.to.toLocaleDateString()
			: 'Not set';

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
				<DateRangePicker
					value={range}
					onChange={setRange}
					onFromInputChange={(from) => setRange({ ...range, from })}
					onToInputChange={(to) => setRange({ ...range, to })}
				/>
			</Flex>
			<Prose>
				<ul>
					<li>Option: {option || 'Not set'}</li>
					<li>Date from: {dateFrom}</li>
					<li>Date to: {dateTo}</li>
				</ul>
			</Prose>
		</Stack>
	);
};

export const ScrollExample: ComponentStory<typeof DateRangePicker> = (args) => {
	return (
		<Box>
			<Box height="1000px"></Box>
			<Template {...args} />
			<Box height="1000px"></Box>
		</Box>
	);
};

export const ControlledExample = () => {
	const [range, setRange] = useState<DateRangeWithString>({
		from: undefined,
		to: undefined,
	});
	return (
		<Stack gap={4} alignItems="flex-start">
			<DateRangePicker
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
};
