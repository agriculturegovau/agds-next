import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
	title: 'forms/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	children: 'Example',
	disabled: false,
};

export const Size = Template.bind({});
Size.args = {
	size: 'sm',
	children: 'Small example',
	disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Disabled',
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	children: 'Invalid',
	invalid: true,
	disabled: false,
};

export const Valid = Template.bind({});
Valid.args = {
	children: 'Valid',
	valid: true,
	disabled: false,
};
