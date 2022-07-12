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

// https://react-day-picker.js.org/basics/modifiers#disabling-days
export const DisablingDays: ComponentStory<typeof CalendarSingle> = (args) => (
	<Template {...args} />
);
DisablingDays.args = {
	defaultMonth: new Date(2022, 5, 10),
	disabled: [
		new Date(2022, 5, 10),
		new Date(2022, 5, 13),
		new Date(2022, 5, 16),
	],
};

// https://react-day-picker.js.org/basics/modifiers#disabling-days
export const DisablingDaysRange: ComponentStory<typeof CalendarSingle> = (
	args
) => <Template {...args} />;
DisablingDaysRange.args = {
	defaultMonth: new Date(2022, 4, 17),
	disabled: [{ from: new Date(2022, 4, 18), to: new Date(2022, 4, 25) }],
};

// https://react-day-picker.js.org/basics/modifiers#disabling-days
export const DisablingDaysBeforeAfter: ComponentStory<typeof CalendarSingle> = (
	args
) => <Template {...args} />;
DisablingDaysBeforeAfter.args = {
	defaultMonth: new Date(2022, 5, 8),
	disabled: [
		{ before: new Date(2022, 5, 3) },
		{ after: new Date(2022, 5, 28) },
	],
};

// https://react-day-picker.js.org/guides/input-fields#example-range-selection
export const Range = () => {
	const [range, setRange] = useState<DateRange>();
	return (
		<CalendarRange selected={range} numberOfMonths={2} onSelect={setRange} />
	);
};
