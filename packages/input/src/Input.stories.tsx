import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { Box, Stack } from '@ag.ds-next/box';
import { Field } from '@ag.ds-next/field';

export default {
	title: 'forms/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const LightInput: ComponentStory<typeof Input> = (args) => (
	<Box background="body" palette="light">
		<Field label="Light Input">
			<Input {...args} />
		</Field>
	</Box>
);
LightInput.args = {};

export const DarkInput: ComponentStory<typeof Input> = (args) => (
	<Box background="body" palette="dark" padding={1}>
		<Field label="Dark Input">
			<Input {...args} />
		</Field>
	</Box>
);
DarkInput.args = {};

export const DisabledInput: ComponentStory<typeof Input> = (args) => (
	<Box background="body" palette="light">
		<Field label="Disabled Input">
			<Input {...args} />
		</Field>
	</Box>
);
DisabledInput.args = {
	disabled: true,
};

export const InvalidInput: ComponentStory<typeof Input> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			errorMessage="Enter an email address in the correct format, like name@example.com"
		>
			<Input {...args} />
		</Field>
	</Box>
);
InvalidInput.args = {
	type: 'email',
};

export const InputHint: ComponentStory<typeof Input> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			hint="We will only use this to respond to your question"
		>
			<Input {...args} />
		</Field>
	</Box>
);
InputHint.args = {};

export const BlockInput: ComponentStory<typeof Input> = (args) => (
	<Box background="body" palette="light" width="100%">
		<Field label="Block Input">
			<Input {...args} />
		</Field>
	</Box>
);
BlockInput.args = {
	block: true,
};

export const MaxWidths: ComponentStory<typeof Input> = (args) => (
	<Stack background="body" palette="light" gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Field key={size} label={`Input max width ${size}`}>
				<Input {...args} maxWidth={size} />
			</Field>
		))}
	</Stack>
);
MaxWidths.args = {};

export const InputPlaceholder: ComponentStory<typeof Input> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Email"
			hint="We will only use this to respond to your question"
		>
			<Input {...args} />
		</Field>
	</Box>
);
InputPlaceholder.args = {
	placeholder: 'Enter an email',
	type: 'email',
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
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
				<Input placeholder={`Placeholder for ${type}`} type={type} block />
			</Field>
		))}
	</Stack>
);
