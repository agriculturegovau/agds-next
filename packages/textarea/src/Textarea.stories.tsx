import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { Textarea } from './Textarea';

export default {
	title: 'forms/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	label: 'Example',
};

export const Required = Template.bind({});
Required.args = {
	label: 'Example',
	required: true,
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	label: 'Example',
	hideOptionalLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Example',
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Example',
	message: 'The message you have entered is invalid',
	value: '1e039ur4urf',
	invalid: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Example',
	message: 'We will only use this to respond to your question',
};

export const Block = Template.bind({});
Block.args = {
	label: 'Block',
	block: true,
};

export const MaxWidths: ComponentStory<typeof Textarea> = (args) => (
	<Stack background="body" palette="light" gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Textarea key={size} {...args} label={size} maxWidth={size} />
		))}
	</Stack>
);
MaxWidths.args = {};
