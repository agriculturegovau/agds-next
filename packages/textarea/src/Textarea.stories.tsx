import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { Field } from '@ag.ds-next/field';
import { Textarea } from './Textarea';

export default {
	title: 'forms/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const Light: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="light">
		<Field label="Light Field">
			<Textarea {...args} />
		</Field>
	</Box>
);
Light.args = {};

export const Dark: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="dark" padding={1}>
		<Field label="Dark Field">
			<Textarea {...args} />
		</Field>
	</Box>
);
Dark.args = {};

export const Disabled: ComponentStory<typeof Textarea> = (args) => (
	<Box background="body" palette="light">
		<Field label="Disabled Textarea">
			<Textarea {...args} />
		</Field>
	</Box>
);
Disabled.args = {
	disabled: true,
};

export const Invalid: ComponentStory<typeof Textarea> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Message"
			message="The message you have entered is invalid"
			invalid
		>
			<Textarea {...args} />
		</Field>
	</Box>
);
Invalid.args = {};

export const Valid: ComponentStory<typeof Textarea> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Message"
			message="The message you have entered is valid"
			valid
		>
			<Textarea {...args} />
		</Field>
	</Box>
);
Valid.args = {
	value: 'hello@example.com',
};

export const Hint: ComponentStory<typeof Textarea> = (args) => (
	<Box background="body" palette="light">
		<Field
			label="Message"
			hint="We will only use this to respond to your question"
		>
			<Textarea {...args} />
		</Field>
	</Box>
);
Hint.args = {};

export const Block: ComponentStory<typeof Textarea> = (args) => (
	<Box background="body" palette="light" width="100%">
		<Field label="Block Textarea">
			<Textarea {...args} />
		</Field>
	</Box>
);
Block.args = {
	block: true,
};

export const MaxWidths: ComponentStory<typeof Textarea> = (args) => (
	<Stack background="body" palette="light" gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Field key={size} label={`Textarea max width ${size}`}>
				<Textarea {...args} maxWidth={size} />
			</Field>
		))}
	</Stack>
);
MaxWidths.args = {};

export const TextareaPlaceholder: ComponentStory<typeof Textarea> = (args) => (
	<Box background="body" palette="light">
		<Field label="Message">
			<Textarea {...args} />
		</Field>
	</Box>
);
TextareaPlaceholder.args = {
	placeholder: 'Enter an email',
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/text-Textarea
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
			<Field key={type} label={`Textarea type ${type}`}>
				<Textarea placeholder={`Placeholder for ${type}`} type={type} block />
			</Field>
		))}
	</Stack>
);
