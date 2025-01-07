import { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldMessage } from './FieldMessage';
import { FieldHint } from './FieldHint';
import { useFieldA11yProps, useFieldIds } from './index';

const meta: Meta<typeof Field> = {
	title: 'forms/Field',
	component: Field,
	render: (args) => (
		<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
	),
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Basic: Story = {
	args: {
		label: 'Example',
	},
};

export const Required: Story = {
	args: {
		label: 'Example',
		required: true,
	},
};

export const Invalid: Story = {
	args: {
		label: 'Example',
		message: 'This field is invalid',
		invalid: true,
	},
};

export const SecondaryLabel: Story = {
	args: {
		label: 'Example',
		secondaryLabel: '(dd/mm/yyyy)',
	},
};

export const HideOptionalLabel: Story = {
	args: {
		label: 'Example',
		hideOptionalLabel: true,
	},
};

export const Modular: Story = {
	args: {
		label: 'Example',
		hint: 'Hint text',
		message: 'Message',
		invalid: true,
	},
	render: function Render({
		label,
		hideOptionalLabel,
		secondaryLabel,
		hint,
		message,
		invalid,
		required,
	}) {
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
					hideOptionalLabel={hideOptionalLabel}
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
	},
};
