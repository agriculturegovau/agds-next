import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { Field } from '@ag.ds-next/field';
import { TextInput } from './TextInput';

export default {
	title: 'forms/text-input',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const LightInput: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field label="Light Input">
			<TextInput {...args} />
		</Field>
	</Box>
);
LightInput.args = {};

export const DarkInput: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="dark" padding={1}>
		<Field label="Dark Input">
			<TextInput {...args} />
		</Field>
	</Box>
);
DarkInput.args = {};

export const DisabledInput: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field label="Disabled Input">
			<TextInput {...args} />
		</Field>
	</Box>
);
DisabledInput.args = {
	disabled: true,
};

export const InvalidInput: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			errorMessage="Enter an email address in the correct format, like name@example.com"
		>
			<TextInput {...args} />
		</Field>
	</Box>
);
InvalidInput.args = {
	type: 'email',
};

export const InputHint: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			hint="We will only use this to respond to your question"
		>
			<TextInput {...args} />
		</Field>
	</Box>
);
InputHint.args = {};

export const BlockInput: ComponentStory<typeof TextInput> = (args) => (
	<Box background="body" palette="light" width="100%">
		<Field label="Block Input">
			<TextInput {...args} />
		</Field>
	</Box>
);
BlockInput.args = {
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
		<Field
			label="Email"
			hint="We will only use this to respond to your question"
		>
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
