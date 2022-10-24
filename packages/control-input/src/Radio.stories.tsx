import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio';

export default {
	title: 'Components/Radio',
	component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Basic = Template.bind({});
Basic.args = {
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
