import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { Flex } from '@ag.ds-next/box';
import { Field } from '@ag.ds-next/field';

export default {
	title: 'forms/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const LightInput: ComponentStory<typeof Input> = (args) => (
	<Flex background="body" palette="light">
		<Field label="Light Input">
			<Input {...args} />
		</Field>
	</Flex>
);
LightInput.args = {};

export const DarkInput: ComponentStory<typeof Input> = (args) => (
	<Flex background="body" palette="dark" padding={1}>
		<Field label="Dark Input">
			<Input {...args} />
		</Field>
	</Flex>
);
DarkInput.args = {};

export const InputWithFieldHint: ComponentStory<typeof Input> = (args) => (
	<Flex background="body" palette="light">
		<Field
			label="Email"
			hint="We will only use this to respond to your question"
		>
			<Input {...args} />
		</Field>
	</Flex>
);
InputWithFieldHint.args = {
	type: 'email',
};

export const DisabledInput: ComponentStory<typeof Input> = (args) => (
	<Flex background="body" palette="light">
		<Field label="Disabled Input">
			<Input {...args} />
		</Field>
	</Flex>
);
DisabledInput.args = {
	disabled: true,
};

export const InvalidFieldInput: ComponentStory<typeof Input> = (args) => (
	<Flex background="body" palette="light">
		<Field
			label="Invalid Input"
			errorMessage="Enter an email address in the correct format, like name@example.com"
		>
			<Input {...args} />
		</Field>
	</Flex>
);
InvalidFieldInput.args = {
	disabled: true,
};

export const InputWithPlaceholder: ComponentStory<typeof Input> = (args) => (
	<Flex background="body" palette="light">
		<Field label="Name">
			<Input {...args} />
		</Field>
	</Flex>
);
InputWithPlaceholder.args = {
	placeholder: 'Enter a name',
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
export const Types = () => (
	<Flex flexDirection="column" gap={1} background="body" palette="light">
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
	</Flex>
);
