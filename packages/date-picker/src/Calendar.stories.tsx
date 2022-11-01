import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { subDays, addDays } from 'date-fns';
import { CalendarRange, CalendarSingle, CalendarSingleProps } from './Calendar';

export default {
	title: 'forms/DatePicker/Calendar',
	component: CalendarSingle,
} as ComponentMeta<typeof CalendarSingle>;

const Template = (props: CalendarSingleProps) => {
	const [value, setValue] = useState<Date>();
	return <CalendarSingle selected={value} onSelect={setValue} {...props} />;
};

export const Basic: ComponentStory<typeof CalendarSingle> = (args) => (
	<Template {...args} />
);
Basic.args = {};

// https://react-day-picker.js.org/basics/customization#multiple-months
export const MultipleMonths: ComponentStory<typeof CalendarSingle> = (args) => (
	<Template {...args} />
);
MultipleMonths.args = {
	numberOfMonths: 2,
};

const today = new Date();
const lastWeek = subDays(today, 7);
const nextWeek = addDays(today, 7);
// https://react-day-picker.js.org/basics/modifiers#disabling-days
export const MinMaxDates: ComponentStory<typeof CalendarSingle> = (args) => (
	<Template {...args} />
);
MinMaxDates.args = {
	disabled: [{ before: lastWeek }, { after: nextWeek }],
};

// https://react-day-picker.js.org/guides/input-fields#example-range-selection
export const Range = () => {
	const [range, setRange] = useState<DateRange>();
	return (
		<CalendarRange selected={range} numberOfMonths={2} onSelect={setRange} />
	);
};
