import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

export default {
	title: 'Components/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

export const Basic: ComponentStory<typeof Switch> = (args) => {
	const [isChecked, setChecked] = useState(false);
	return <Switch {...args} checked={isChecked} onChange={setChecked} />;
};
Basic.args = {
	size: 'md',
	label: 'Show establishments',
};
