import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { FieldProvider } from './FieldContext';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldError } from './FieldError';

export type FieldProps = {
	children: ReactNode;
	errorMessage?: string;
	hint?: string;
	label: string;
};

export const Field = ({ children, errorMessage, hint, label }: FieldProps) => (
	<FieldProvider hasError={Boolean(errorMessage)} hasHint={Boolean(hint)}>
		<Stack gap={0.25}>
			<FieldLabel>{label}</FieldLabel>
			{hint ? <FieldHint>{hint}</FieldHint> : null}
			{errorMessage ? <FieldError>{errorMessage}</FieldError> : null}
			{children}
		</Stack>
	</FieldProvider>
);
