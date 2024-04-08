import { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';
import { TimeInput, TimeInputProps, TimeValue } from './TimeInput';
import { isValidTime } from './utils';

const meta: Meta<typeof TimeInput> = {
	title: 'Forms/TimeInput',
	component: TimeInput,
	args: {
		label: 'Time',
	},
};

export default meta;

type Story = StoryObj<typeof TimeInput>;

export const Basic: Story = {
	render: Render,
};

export const Invalid: Story = {
	args: {
		value: { raw: '9:66' },
	},
	render: Render,
};

export const DifferentTimeFormat: Story = {
	args: {
		timeFormat: 'HH:mm',
		value: { raw: '21:30' },
	},
	render: Render,
};

function Render(props: TimeInputProps) {
	const [value, setValue] = useState<TimeValue>(props.value);

	const onChange = (timeValue: TimeValue) => {
		setValue(timeValue);
	};

	const invalid = value && !isValidTime(value.raw);

	return (
		<TimeInput
			{...props}
			invalid={invalid}
			message="Enter a valid time"
			onChange={onChange}
			value={value}
		/>
	);
}
