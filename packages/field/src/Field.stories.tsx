import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Field } from './Field';
import { FieldProvider } from './FieldContext';
import { FieldLabel } from './FieldLabel';
import { FieldError } from './FieldError';
import { FieldHint } from './FieldHint';

export default {
	title: 'forms/Field',
	component: Field,
} as ComponentMeta<typeof Field>;

export const LightField: ComponentStory<typeof Field> = (args) => (
	<Flex background="body" palette="light">
		<Field label="Light Field">
			<TextInput />
		</Field>
	</Flex>
);
LightField.args = {};

export const DarkField: ComponentStory<typeof Field> = (args) => (
	<Flex background="body" palette="dark" padding={1}>
		<Field label="Dark Field">
			<TextInput />
		</Field>
	</Flex>
);
DarkField.args = {};

export const Modular: ComponentStory<typeof Field> = (args) => (
	<Flex background="body">
		<FieldProvider hasHint={true} hasError={true}>
			<Stack gap={0.25}>
				<FieldLabel>Label</FieldLabel>
				<FieldHint>Hint</FieldHint>
				<FieldError>Field error</FieldError>
				<TextInput />
			</Stack>
		</FieldProvider>
	</Flex>
);
Modular.args = {};
