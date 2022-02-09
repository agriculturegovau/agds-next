import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { useId } from '@reach/auto-id';
import { FieldContext } from './FieldContext';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldError } from './FieldError';

export type FieldProps = {
	children: ReactNode;
	label: string;
	hint?: string;
	errorMessage?: string;
};

export const Field = ({ children, label, hint, errorMessage }: FieldProps) => {
	const id = useId();
	const fieldId = 'field-' + id;
	const hintId = useId('field-hint-' + id);
	const errorMessageId = useId('field-error-message-' + id);

	const value = {
		fieldId,
		hintId,
		errorMessageId,
		hasHint: Boolean(hint),
		hasError: Boolean(errorMessage),
	};

	return (
		<FieldContext.Provider value={value}>
			<Stack gap={0.25}>
				<FieldLabel>{label}</FieldLabel>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				{errorMessage ? <FieldError>{errorMessage}</FieldError> : null}
				{children}
			</Stack>
		</FieldContext.Provider>
	);
};
