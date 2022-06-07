import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Radio } from './Radio';

export default {
	title: 'forms/Radio',
	component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const OnLight = Template.bind({});
OnLight.args = {
	children: 'Example',
	checked: true,
};

export const OnDark: ComponentStory<typeof Radio> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	children: 'Example',
	checked: true,
};

export const Size = Template.bind({});
Size.args = {
	size: 'sm',
	children: 'Small example',
	checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Disabled',
	disabled: true,
	checked: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	children: 'Invalid',
	invalid: true,
	checked: true,
};

export const Valid = Template.bind({});
Valid.args = {
	children: 'Valid',
	valid: true,
	checked: true,
};
