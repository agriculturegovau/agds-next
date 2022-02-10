import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { Field } from '@ag.ds-next/field';
import { Textarea } from './Textarea';

export default {
	title: 'forms/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const Basic: ComponentStory<typeof Textarea> = (args) => (
	<Field label="Basic Textarea">
		<Textarea {...args} />
	</Field>
);
Basic.args = {};

export const Required: ComponentStory<typeof Textarea> = (args) => (
	<Field label="Basic Textarea" required>
		<Textarea {...args} />
	</Field>
);
Required.args = {
	required: true,
};

export const Disabled: ComponentStory<typeof Textarea> = (args) => (
	<Field label="Disabled Textarea">
		<Textarea {...args} />
	</Field>
);
Disabled.args = {
	disabled: true,
};

export const Invalid: ComponentStory<typeof Textarea> = (args) => (
	<Field
		label="Message"
		message="The message you have entered is invalid"
		invalid
	>
		<Textarea {...args} />
	</Field>
);
Invalid.args = {
	value: '1e039ur4urf',
};

export const Valid: ComponentStory<typeof Textarea> = (args) => (
	<Field label="Message" message="The message you have entered is valid" valid>
		<Textarea {...args} />
	</Field>
);
Valid.args = {
	value: 'Lorem ipsum dolar',
};

export const Hint: ComponentStory<typeof Textarea> = (args) => (
	<Field
		label="Message"
		hint="We will only use this to respond to your question"
	>
		<Textarea {...args} />
	</Field>
);
Hint.args = {};

export const Block: ComponentStory<typeof Textarea> = (args) => (
	<Field label="Block Textarea">
		<Textarea {...args} />
	</Field>
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
