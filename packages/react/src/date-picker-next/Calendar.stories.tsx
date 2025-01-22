import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { subDays, addDays, getYear } from 'date-fns';
import { CalendarRange, CalendarSingle, CalendarSingleProps } from './Calendar';
import { CalendarProvider, CalendarProviderProps } from './CalendarContext';

const meta: Meta<CalendarSingleProps & CalendarProviderProps> = {
	title: 'forms/DatePicker/Calendar',
	component: CalendarSingle,
	render: function Render({ yearRange, ...props }) {
		const [value, setValue] = useState<Date>();
		return (
			<CalendarProvider yearRange={yearRange}>
				<CalendarSingle onSelect={setValue} selected={value} {...props} />
			</CalendarProvider>
		);
	},
};

export default meta;

type Story = StoryObj<CalendarSingleProps & CalendarProviderProps>;

const today = new Date();
const lastWeek = subDays(today, 7);
const nextWeek = addDays(today, 7);
const thisYear = getYear(new Date());

export const Basic: Story = {};

// https://react-day-picker.js.org/basics/customization#multiple-months
export const MultipleMonths: Story = {
	args: {
		numberOfMonths: 2,
	},
};

// https://react-day-picker.js.org/basics/modifiers#disabling-days
export const MinMaxDates: Story = {
	args: {
		disabled: [{ before: lastWeek }, { after: nextWeek }],
	},
};

export const CustomYearRange: Story = {
	args: {
		yearRange: { from: thisYear - 2, to: thisYear + 5 },
	},
};

export const DisabledYearRange: Story = {
	args: {
		yearRange: { from: thisYear, to: thisYear },
	},
};

// https://react-day-picker.js.org/guides/input-fields#example-range-selection
export const Range = () => {
	const [range, setRange] = useState<DateRange>();
	return (
		<CalendarProvider yearRange={undefined}>
			<CalendarRange numberOfMonths={2} onSelect={setRange} selected={range} />
		</CalendarProvider>
	);
};
