import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

export default {
	title: 'forms/Switch',
	component: Switch,
} as Meta<typeof Switch>;

export const Basic: StoryFn<typeof Switch> = (args) => {
	const [isChecked, setChecked] = useState(false);
	return <Switch {...args} checked={isChecked} onChange={setChecked} />;
};
Basic.args = {
	size: 'md',
	label: 'Show establishments',
};
