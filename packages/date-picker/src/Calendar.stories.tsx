import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { CalendarRange, CalendarSingle, CalendarSingleProps } from './Calendar';

export default {
	title: 'forms/DatePicker/Calendar',
	component: CalendarSingle,
} as ComponentMeta<typeof CalendarSingle>;

const Template = (props: CalendarSingleProps) => {
	const [value, setValue] = useState<Date>();
	return <CalendarSingle selected={value} onSelect={setValue} {...props} />;
};

export const OnLight: ComponentStory<typeof CalendarSingle> = (args) => (
	<Template {...args} />
);
OnLight.args = {};

export const OnDark: ComponentStory<typeof CalendarSingle> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {};

// https://react-day-picker.js.org/basics/customization#multiple-months
export const MultipleMonths: ComponentStory<typeof CalendarSingle> = (args) => (
	<Template {...args} />
);
MultipleMonths.args = {
	numberOfMonths: 2,
};

const today = new Date();
const lastWeek = new Date(
	today.getFullYear(),
	today.getMonth(),
	today.getDate() - 7
);
const nextWeek = new Date(
	today.getFullYear(),
	today.getMonth(),
	today.getDate() + 7
);

// https://react-day-picker.js.org/basics/modifiers#disabling-days
export const DisablingDays: ComponentStory<typeof CalendarSingle> = (args) => (
	<Template {...args} />
);
DisablingDays.args = {
	disabled: [lastWeek, nextWeek],
};

export const DisablingDaysRange: ComponentStory<typeof CalendarSingle> = (
	args
) => <Template {...args} />;
DisablingDaysRange.args = {
	disabled: [{ from: lastWeek, to: nextWeek }],
};

export const DisablingDaysBeforeAfter: ComponentStory<typeof CalendarSingle> = (
	args
) => <Template {...args} />;
DisablingDaysBeforeAfter.args = {
	disabled: [{ before: lastWeek }, { after: nextWeek }],
};

// https://react-day-picker.js.org/guides/input-fields#example-range-selection
export const Range = () => {
	const [range, setRange] = useState<DateRange>();
	return (
		<CalendarRange selected={range} numberOfMonths={2} onSelect={setRange} />
	);
};
