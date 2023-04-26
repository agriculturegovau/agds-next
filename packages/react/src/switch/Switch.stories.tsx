import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
	title: 'forms/Switch',
	component: Switch,
};

export default meta;

export const Basic: StoryFn<typeof Switch> = (args) => {
	const [isChecked, setChecked] = useState(false);
	return <Switch {...args} checked={isChecked} onChange={setChecked} />;
};
Basic.args = {
	size: 'md',
	label: 'Show establishments',
};
