import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Box } from '@ag.ds-next/box';
import { Switch } from './Switch';

export default {
	title: 'navigation/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
	const [isChecked, setChecked] = useState(false);
	return (
		<Switch
			{...args}
			checked={isChecked}
			onChange={() => setChecked(!isChecked)}
		/>
	);
};

export const OnLight = Template.bind({});
OnLight.args = {
	checked: false,
	size: 'md',
	label: 'Show grid',
};

export const OnDark: ComponentStory<typeof Switch> = (args) => {
	return (
		<Box palette="dark" background="body" padding={1}>
			<Template {...args} />
		</Box>
	);
};
OnDark.args = {
	checked: false,
	size: 'md',
	label: 'Show grid',
};
