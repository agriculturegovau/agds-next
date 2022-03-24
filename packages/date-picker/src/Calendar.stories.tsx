import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Calendar, CalendarProps } from './Calendar';
import { DateUtils } from 'react-day-picker';

export default {
	title: 'forms/DatePicker/Calendar',
	component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template = (props: CalendarProps) => {
	const [value, setValue] = useState(new Date());
	return (
		<Stack gap={3}>
			<Calendar selectedDays={value} onDayClick={setValue} {...props} />
			{value ? (
				<Text fontSize="xs" color="muted">
					Value: {value.toLocaleDateString()}
				</Text>
			) : null}
		</Stack>
	);
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
	const [from, setFrom] = useState();
	const [to, setTo] = useState();

	function handleDayClick(day) {
		const range = DateUtils.addDayToRange(day, { from, to });
		setFrom(range.from);
		setTo(range.to);
	}

	function handleResetClick() {
		setFrom(undefined);
		setTo(undefined);
	}

	// const { from, to } = this.state;
	const modifiers = { start: from, end: to };

	return (
		<Stack gap={2}>
			<Calendar
				numberOfMonths={2}
				selectedDays={[from, { from, to }]}
				modifiers={modifiers}
				onDayClick={handleDayClick}
				range
			/>
			<p>
				{!from && !to && 'Please select the first day.'}
				{from && !to && 'Please select the last day.'}
				{from &&
					to &&
					`Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
				{from && to && (
					<button className="link" onClick={() => handleResetClick()}>
						Reset
					</button>
				)}
			</p>
		</Stack>
	);
};
