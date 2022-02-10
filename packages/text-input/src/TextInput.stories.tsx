import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { Field } from '@ag.ds-next/field';
import { TextInput } from './TextInput';

export default {
	title: 'forms/TextInput',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Basic: ComponentStory<typeof TextInput> = (args) => (
	<Field label="Basic TextInput">
		<TextInput {...args} />
	</Field>
);
Basic.args = {};

export const Required: ComponentStory<typeof TextInput> = (args) => (
	<Field label="Basic TextInput" required>
		<TextInput {...args} />
	</Field>
);
Required.args = {
	required: true,
};

export const Disabled: ComponentStory<typeof TextInput> = (args) => (
	<Field label="Disabled TextInput">
		<TextInput {...args} />
	</Field>
);
Disabled.args = {
	disabled: true,
};

export const Invalid: ComponentStory<typeof TextInput> = (args) => (
	<Field
		label="Email"
		message="Enter an email address in the correct format, like name@example.com"
		invalid
	>
		<TextInput {...args} />
	</Field>
);
Invalid.args = {
	type: 'email',
};

export const Valid: ComponentStory<typeof TextInput> = (args) => (
	<Field
		label="Email"
		message="The email address you have entered is valid"
		valid
	>
		<TextInput {...args} />
	</Field>
);
Valid.args = {
	type: 'email',
	value: 'hello@example.com',
};

export const Hint: ComponentStory<typeof TextInput> = (args) => (
	<Field label="Email" hint="We will only use this to respond to your question">
		<TextInput {...args} />
	</Field>
);
Hint.args = {};

export const Block: ComponentStory<typeof TextInput> = (args) => (
	<Field label="Block TextInput">
		<TextInput {...args} />
	</Field>
);
Block.args = {
	block: true,
};

export const MaxWidths: ComponentStory<typeof TextInput> = (args) => (
	<Stack gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Field key={size} label={`TextInput max width ${size}`}>
				<TextInput {...args} maxWidth={size} />
			</Field>
		))}
	</Stack>
);
MaxWidths.args = {};

export const Password: ComponentStory<typeof TextInput> = (args) => (
	<Field label="Password" required>
		<TextInput {...args} />
	</Field>
);
Password.args = {
	type: 'password',
};
