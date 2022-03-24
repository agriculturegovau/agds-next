import React, { useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Calendar, CalendarProps } from './Calendar';
import { DateUtils } from 'react-day-picker';
import { DateRange } from './DateRangePicker';

export default {
	title: 'forms/DatePicker/Calendar',
	component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template = (props: CalendarProps) => {
	const [value, setValue] = useState(new Date());
	return <Calendar selectedDays={value} onDayClick={setValue} {...props} />;
};

export const OnLight: ComponentStory<typeof Calendar> = (args) => (
	<Template {...args} />
);
OnLight.args = {};

export const OnDark: ComponentStory<typeof Calendar> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {};

export const MultipleMonths: ComponentStory<typeof Calendar> = (args) => (
	<Template {...args} />
);
MultipleMonths.args = {
	numberOfMonths: 2,
};

export const DisabledDays: ComponentStory<typeof Calendar> = (args) => (
	<Template {...args} />
);
DisabledDays.args = {
	initialMonth: new Date(2017, 3),
	disabledDays: [
		new Date(2017, 3, 12),
		new Date(2017, 3, 2),
		{
			after: new Date(2017, 3, 20),
			before: new Date(2017, 3, 25),
		},
	],
};

export const DisabledWeekdays: ComponentStory<typeof Calendar> = (args) => (
	<Template {...args} />
);
DisabledWeekdays.args = {
	disabledDays: [{ daysOfWeek: [0, 6] }],
};

export const Range = () => {
	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});

	const handleDayClick = useCallback((day: Date) => {
		setRange((range) => {
			const newRange = DateUtils.addDayToRange(day, range);
			return { from: newRange.from || undefined, to: newRange.to || undefined };
		});
	}, []);

	const modifiers = { start: range.from, end: range.to };

	return (
		<Calendar
			numberOfMonths={2}
			selectedDays={[range.from, range]}
			modifiers={modifiers}
			onDayClick={handleDayClick}
			range
		/>
	);
};
