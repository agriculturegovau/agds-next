import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { TextInput } from './TextInput';

export default {
	title: 'forms/TextInput',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	label: 'Example',
};

export const Required = Template.bind({});
Required.args = {
	required: true,
	label: 'Example',
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	label: 'Example',
	hideOptionalLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	label: 'Example',
};

export const Invalid = Template.bind({});
Invalid.args = {
	type: 'email',
	label: 'Email',
	message:
		'Enter an email address in the correct format, like name@example.com',
	invalid: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Email',
	type: 'email',
	hint: 'We will only use this to respond to your question',
};

export const Block = Template.bind({});
Block.args = {
	block: true,
	label: 'Block',
};

export const MaxWidths: ComponentStory<typeof TextInput> = (args) => (
	<Stack gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<TextInput key={size} {...args} label={size} maxWidth={} />
		))}
	</Stack>
);
MaxWidths.args = {};

export const Password: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
Password.args = {
	label: 'Password',
	type: 'password',
	required: true,
};
