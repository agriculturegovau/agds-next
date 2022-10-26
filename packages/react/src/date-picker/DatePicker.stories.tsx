import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';
import { Box, Stack } from '../box';
import { Button, ButtonGroup } from '../button';
import { DatePicker } from './DatePicker';

export default {
	title: 'forms/DatePicker/DatePicker',
	component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
	const [value, setValue] = useState<Date>();
	return <DatePicker {...args} value={value} onChange={setValue} />;
};

export const Basic = Template.bind({});
Basic.args = {
	label: 'Example',
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Example',
	disabled: true,
};

const today = new Date();
const lastWeek = subDays(today, 7);
const nextWeek = addDays(today, 7);
export const MinMaxDates = Template.bind({});
MinMaxDates.args = {
	label: 'Example',
	minDate: lastWeek,
	maxDate: nextWeek,
};

export const InitialMonth = Template.bind({});
InitialMonth.args = {
	label: 'Example',
	initialMonth: new Date('1999-12-01'),
};

export const Required = Template.bind({});
Required.args = {
	required: true,
	label: 'Example',
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Example',
	message: 'Enter a valid date',
	invalid: true,
};

export const Valid = Template.bind({});
Valid.args = {
	label: 'Example',
	message: 'The date you have entered is valid',
	valid: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Example',
	hint: 'We will only use this to respond to your question',
};

export const Block = Template.bind({});
Block.args = {
	block: true,
	label: 'Block',
};

export const ScrollExample: ComponentStory<typeof DatePicker> = (args) => (
	<Box>
		<Box height="1000px"></Box>
		<Template {...args} />
		<Box height="1000px"></Box>
	</Box>
);
ScrollExample.args = {
	label: 'Example',
};

export const ControlledExample = () => {
	const [value, setValue] = useState<Date>();
	return (
		<Stack gap={4} alignItems="flex-start">
			<DatePicker label="Controlled" value={value} onChange={setValue} />
			<ButtonGroup>
				<Button onClick={() => setValue(new Date('1999-12-25'))}>
					Set pre-defined date
				</Button>
				<Button variant="secondary" onClick={() => setValue(undefined)}>
					Clear
				</Button>
			</ButtonGroup>
		</Stack>
	);
};
