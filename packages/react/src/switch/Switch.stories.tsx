import { StoryObj, Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
	title: 'forms/Switch',
	component: Switch,
};

export default meta;

const Template: StoryFn<typeof Switch> = (args) => {
	const [isChecked, setChecked] = useState(false);
	return <Switch {...args} checked={isChecked} onChange={setChecked} />;
};

export const Basic: StoryObj<typeof Switch> = {
	args: {
		size: 'md',
		label: 'Show establishments',
	},
	render: Template,
};
