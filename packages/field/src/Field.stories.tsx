import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Field } from './Field';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldMessage } from './FieldMessage';
import { FieldHint } from './FieldHint';
import { useFieldA11yProps, useFieldIds } from './index';

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

export const SecondaryLabel: ComponentStory<typeof Field> = (args) => (
	<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
);
SecondaryLabel.args = {
	label: 'Label',
	secondaryLabel: '(dd/mm/yyy)',
};

export const Modular: ComponentStory<typeof Field> = ({
	label,
	secondaryLabel,
	hint,
	message,
	invalid,
	required,
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
		<FieldContainer invalid={invalid}>
			<FieldLabel
				htmlFor={fieldId}
				required={required}
				secondaryLabel={secondaryLabel}
			>
				{label}
			</FieldLabel>
			{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
			{message && invalid ? (
				<FieldMessage id={messageId}>{message}</FieldMessage>
			) : null}
			<input {...a11yProps} />
		</FieldContainer>
	);
};
Modular.args = {
	label: 'Label',
	hint: 'Hint',
	message: 'Message',
};
