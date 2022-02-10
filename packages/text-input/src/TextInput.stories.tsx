import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { Field } from '@ag.ds-next/field';
import { TextInput } from './TextInput';

export default {
	title: 'forms/TextInput',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Light: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="light">
		<Field label="Light Field">
			<TextInput {...args} />
		</Field>
	</Box>
);
Light.args = {};

export const Dark: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="dark" padding={1}>
		<Field label="Dark Field">
			<TextInput {...args} />
		</Field>
	</Box>
);
Dark.args = {};

export const Disabled: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field label="Disabled Input">
			<TextInput {...args} />
		</Field>
	</Box>
);
Disabled.args = {
	disabled: true,
};

export const Invalid: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			message="Enter an email address in the correct format, like name@example.com"
			invalid
		>
			<TextInput {...args} />
		</Field>
	</Box>
);
Invalid.args = {
	type: 'email',
};

export const Valid: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			message="The email address you have entered is valid"
			valid
		>
			<TextInput {...args} />
		</Field>
	</Box>
);
Valid.args = {
	type: 'email',
	value: 'hello@example.com',
};

export const Hint: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			hint="We will only use this to respond to your question"
		>
			<TextInput {...args} />
		</Field>
	</Box>
);
Hint.args = {};

export const Block: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light" width="100%">
		<Field label="Block Input">
			<TextInput {...args} />
		</Field>
	</Box>
);
Block.args = {
	block: true,
};

export const MaxWidths: ComponentStory<typeof TextInput> = (args) => (
	<Stack background="body" palette="light" gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Field key={size} label={`Input max width ${size}`}>
				<TextInput {...args} maxWidth={size} />
			</Field>
		))}
	</Stack>
);
MaxWidths.args = {};

export const InputPlaceholder: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field label="Email">
			<TextInput {...args} />
		</Field>
	</Box>
);
InputPlaceholder.args = {
	placeholder: 'Enter an email',
	type: 'email',
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/text-input
export const Types = () => (
	<Stack gap={1} background="body" palette="light">
		{[
			'text',
			'email',
			'tel',
			'url',
			'password',
			'file',
			'number',
			'date',
			'time',
			'datetime',
			'datetime-local',
			'month',
			'week',
		].map((type) => (
			<Field key={type} label={`Input type ${type}`}>
				<TextInput placeholder={`Placeholder for ${type}`} type={type} block />
			</Field>
		))}
	</Stack>
);
