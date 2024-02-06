import { ReactNode } from 'react';
import { useId, FieldMaxWidth, tokens } from '../core';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldMessage } from './FieldMessage';

export type FieldProps = {
	children: ((a11yProps: A11yProps) => ReactNode) | ReactNode;
	/** Provides extra information about the field. */
	hint: string | undefined;
	/** Defines an identifier (ID) of the field, which must be unique. */
	id?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Describes the purpose of the field. */
	maxWidth?: FieldMaxWidth;
	label: string;
	/** Defines an identifier (ID) of the label element, which must be unique. */
	labelId?: string;
	/** Text to prepend to the default secondary label. */
	secondaryLabel?: string;
	/** If true, "(optional)" will never be appended to the label even when `required` is `false`. */
	hideOptionalLabel?: boolean;
	/** Message to show when the field is invalid. */
	message: string | undefined;
	/** If false, "(optional)" will be appended to the label. */
	required: boolean;
};

export const Field = ({
	children,
	hint,
	id,
	invalid,
	label,
	labelId,
	maxWidth,
	secondaryLabel,
	hideOptionalLabel,
	message,
	required,
}: FieldProps) => {
	const { fieldId, hintId, messageId } = useFieldIds(id);

	const a11yProps = useFieldA11yProps({
		required,
		fieldId,
		message,
		messageId,
		hint,
		hintId,
		invalid,
	});

	return (
		<FieldContainer invalid={invalid} maxWidth={maxWidth}>
			<FieldLabel
				id={labelId}
				htmlFor={fieldId}
				secondaryLabel={secondaryLabel}
				hideOptionalLabel={hideOptionalLabel}
				required={required}
			>
				{label}
			</FieldLabel>
			{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
			{message && invalid ? (
				<FieldMessage id={messageId}>{message}</FieldMessage>
			) : null}
			{typeof children === 'function' ? children(a11yProps) : children}
			{maxWidth ? (
				// This acts as spacer so that inputs always try to be as wide as their maxWidth
				<span
					css={{
						display: 'block',
						height: 0,
						maxWidth: tokens.maxWidth.field[maxWidth],
						overflow: 'hidden',
						'::after': {
							content:
								'"---------------------------------------------------------------"',
						},
					}}
				/>
			) : null}
		</FieldContainer>
	);
};

export const useFieldIds = (idProp?: string) => {
	const autoId = useId(idProp);
	const fieldId = idProp ? idProp : `field-${autoId}`;
	const hintId = `field-${autoId}-hint`;
	const messageId = `field-${autoId}-message`;
	return { fieldId, hintId, messageId };
};

type A11yProps = {
	'aria-required': boolean;
	'aria-invalid': boolean;
	'aria-describedby': string | undefined;
	id: string;
};

export const useFieldA11yProps = ({
	required,
	fieldId,
	message,
	messageId,
	hint,
	hintId,
	invalid,
}: {
	required?: boolean;
	fieldId: string;
	message?: string;
	messageId: string;
	hint?: string;
	hintId: string;
	invalid?: boolean;
}): A11yProps => {
	const describedByIds = [
		message ? messageId : null,
		hint ? hintId : null,
	].filter(Boolean);
	const describedBy = describedByIds.length
		? describedByIds.join(' ')
		: undefined;
	return {
		'aria-required': Boolean(required),
		'aria-invalid': Boolean(invalid),
		'aria-describedby': describedBy,
		id: fieldId,
	};
};
