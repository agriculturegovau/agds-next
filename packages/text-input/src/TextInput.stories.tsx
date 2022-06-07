import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { TextInput } from './TextInput';

export default {
	title: 'forms/TextInput',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const OnLight: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
OnLight.args = {
	label: 'Example',
};

export const OnDark: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<TextInput {...args} />
	</Box>
);
OnDark.args = {
	label: 'Example',
};

export const Required: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
Required.args = {
	required: true,
	label: 'Example',
};

export const Disabled: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
Disabled.args = {
	disabled: true,
	label: 'Example',
};

export const Invalid: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
Invalid.args = {
	type: 'email',
	label: 'Email',
	message:
		'Enter an email address in the correct format, like name@example.com',
	invalid: true,
};

export const Valid: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
Valid.args = {
	type: 'email',
	label: 'Email',
	message: 'The email address you have entered is valid',
	value: 'hello@example.com',
	valid: true,
};

export const Hint: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
Hint.args = {
	label: 'Email',
	type: 'email',
	hint: 'We will only use this to respond to your question',
};

export const Block: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);
Block.args = {
	block: true,
	label: 'Block',
};

export const MaxWidths: ComponentStory<typeof TextInput> = (args) => (
	<Stack gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<TextInput
				key={size}
				{...args}
				label={`TextInput max width ${size}`}
				maxWidth={size}
			/>
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
