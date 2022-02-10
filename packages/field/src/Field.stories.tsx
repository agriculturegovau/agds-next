import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { TextInput } from '@ag.ds-next/text-input';
import { Field } from './Field';
import { FieldProvider } from './FieldProvider';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldMessage } from './FieldMessage';
import { FieldHint } from './FieldHint';

export default {
	title: 'forms/Field',
	component: Field,
} as ComponentMeta<typeof Field>;

export const Basic: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="light">
		<Field {...args}>
			<TextInput />
		</Field>
	</Box>
);
Basic.args = {
	label: 'Basic',
};

export const Required: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="light">
		<Field {...args}>
			<TextInput />
		</Field>
	</Box>
);
Required.args = {
	label: 'Basic',
	required: true,
};

export const Invalid: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="light">
		<Field {...args}>
			<TextInput />
		</Field>
	</Box>
);
Invalid.args = {
	label: 'Invalid',
	message: 'This field is invalid',
	invalid: true,
};

export const Valid: ComponentStory<typeof Field> = (args) => (
	<Box background="body" palette="light">
		<Field {...args}>
			<TextInput />
		</Field>
	</Box>
);
Valid.args = {
	label: 'Valid',
	message: 'This field is valid',
	valid: true,
};

export const Modular: ComponentStory<typeof Field> = (args) => (
	<Box background="body">
		<FieldProvider {...args}>
			<FieldContainer>
				<FieldLabel>{args.label}</FieldLabel>
				{args.hint ? <FieldHint>{args.hint}</FieldHint> : null}
				{args.message ? <FieldMessage>{args.message}</FieldMessage> : null}
				<TextInput />
			</FieldContainer>
		</FieldProvider>
	</Box>
);
Modular.args = {
	label: 'Label',
	hint: 'Hint',
	message: 'Message',
	invalid: false,
	valid: false,
};
