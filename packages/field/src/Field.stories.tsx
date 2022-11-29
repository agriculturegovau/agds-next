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

const Template: ComponentStory<typeof Field> = (args) => (
	<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
);

export const Basic = Template.bind({});
Basic.args = {
	label: 'Example',
};

export const Required = Template.bind({});
Required.args = {
	label: 'Example',
	required: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Example',
	message: 'This field is invalid',
	invalid: true,
};

export const SecondaryLabel = Template.bind({});
SecondaryLabel.args = {
	label: 'Example',
	secondaryLabel: '(dd/mm/yyy)',
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	label: 'Example',
	hideOptionalLabel: true,
};

export const Modular: ComponentStory<typeof Field> = ({
	label,
	hideOptionalLabel,
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
				hideOptionalLabel={hideOptionalLabel}
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
	label: 'Example',
	hint: 'Hint text',
	message: 'Message',
	invalid: true,
};
