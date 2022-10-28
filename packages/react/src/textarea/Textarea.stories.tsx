import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../box';
import { Textarea } from './Textarea';

export default {
	title: 'forms/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const Basic: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);
Basic.args = {
	label: 'Example',
};

export const Required: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);
Required.args = {
	label: 'Example',
	required: true,
};

export const Disabled: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);
Disabled.args = {
	label: 'Example',
	disabled: true,
};

export const Invalid: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);
Invalid.args = {
	label: 'Message',
	message: 'The message you have entered is invalid',
	value: '1e039ur4urf',
	invalid: true,
};

export const Valid: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);
Valid.args = {
	label: 'Message',
	message: 'The message you have entered is valid',
	value: 'Lorem ipsum dolar',
	valid: true,
};

export const Hint: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);
Hint.args = {
	label: 'Message',
	message: 'We will only use this to respond to your question',
	value: 'Lorem ipsum dolar',
};

export const Block: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);
Block.args = {
	block: true,
	label: 'Block',
};

export const MaxWidths: ComponentStory<typeof Textarea> = (args) => (
	<Stack background="body" palette="light" gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Textarea key={size} {...args} label={size} maxWidth={size} />
		))}
	</Stack>
);
MaxWidths.args = {};
