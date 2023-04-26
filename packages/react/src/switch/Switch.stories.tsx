import { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
	title: 'forms/Switch',
	component: Switch,
	render: function Render(props) {
		const [isChecked, setChecked] = useState(false);
		return <Switch {...props} checked={isChecked} onChange={setChecked} />;
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
	args: {
		size: 'md',
		label: 'Show establishments',
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
		label: 'Show establishments',
	},
};
