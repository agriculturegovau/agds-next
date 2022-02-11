import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Field } from './Field';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldMessage } from './FieldMessage';
import { FieldHint } from './FieldHint';
import { useFieldA11yProps, useFieldIds } from '.';

export default {
	title: 'forms/Field',
	component: Field,
} as ComponentMeta<typeof Field>;

export const Basic: ComponentStory<typeof Field> = (args) => (
	<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
);
Basic.args = {
	label: 'Basic',
};

export const Required: ComponentStory<typeof Field> = (args) => (
	<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
);
Required.args = {
	label: 'Basic',
	required: true,
};

export const Invalid: ComponentStory<typeof Field> = (args) => (
	<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
);
Invalid.args = {
	label: 'Invalid',
	message: 'This field is invalid',
	invalid: true,
};

export const Valid: ComponentStory<typeof Field> = (args) => (
	<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
);
Valid.args = {
	label: 'Valid',
	message: 'This field is valid',
	valid: true,
};

export const Modular: ComponentStory<typeof Field> = ({
	label,
	hint,
	message,
	invalid,
}) => {
	const { fieldId, messageId, hintId } = useFieldIds();
	const a11yProps = useFieldA11yProps({
		fieldId,
		message,
		messageId,
		hint,
		hintId,
		invalid,
	});
	return (
		<FieldContainer>
			<FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
			{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
			{message ? <FieldMessage id={messageId}>{message}</FieldMessage> : null}
			<input {...a11yProps} />
		</FieldContainer>
	);
};
Modular.args = {
	label: 'Label',
	hint: 'Hint',
	message: 'Message',
};
