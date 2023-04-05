import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';
import { Box, Stack } from '../box';
import { Button, ButtonGroup } from '../button';
import { DatePicker } from './DatePicker';

const Template: StoryFn<typeof DatePicker> = (args) => {
	const [value, setValue] = useState<Date>();
	return <DatePicker {...args} value={value} onChange={setValue} />;
};

const meta: Meta<typeof DatePicker> = {
	title: 'forms/DatePicker/DatePicker',
	component: DatePicker,
	render: Template,
	args: {
		label: 'Example',
	},
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {};

export const Disabled: Story = {
	render: Template,
	args: {
		disabled: true,
	},
};

const today = new Date();
const lastWeek = subDays(today, 7);
const nextWeek = addDays(today, 7);
export const MinMaxDates: Story = {
	args: {
		label: 'Example',
		minDate: lastWeek,
		maxDate: nextWeek,
	},
};

export const InitialMonth: Story = {
	args: {
		label: 'Example',
		initialMonth: new Date(1999, 11, 1),
	},
};

export const Required: Story = {
	args: {
		required: true,
		label: 'Example',
	},
};

export const Invalid: Story = {
	args: {
		label: 'Example',
		message: 'Enter a valid date',
		invalid: true,
	},
};

export const Hint: Story = {
	args: {
		label: 'Example',
		hint: 'We will only use this to respond to your question',
	},
};

export const Block: Story = {
	args: {
		block: true,
		label: 'Block',
	},
};

export const ScrollExample: Story = {
	args: {
		label: 'Example',
	},
	render: (args) => (
		<Box>
			<Box height="1000px"></Box>
			<Template {...args} />
			<Box height="1000px"></Box>
		</Box>
	),
};

export const ControlledExample = () => {
	const [value, setValue] = useState<Date>();
	return (
		<Stack gap={4} alignItems="flex-start">
			<DatePicker label="Controlled" value={value} onChange={setValue} />
			<ButtonGroup>
				<Button onClick={() => setValue(new Date(1999, 11, 25))}>
					Set pre-defined date
				</Button>
				<Button variant="secondary" onClick={() => setValue(undefined)}>
					Clear
				</Button>
			</ButtonGroup>
		</Stack>
	);
};
