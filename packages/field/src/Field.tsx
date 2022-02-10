import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { FieldProvider } from './FieldProvider';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldMessage } from './FieldMessage';

export type FieldProps = {
	children: ReactNode;
	hint?: string;
	label: string;
	message?: string;
	invalid?: boolean;
	valid?: boolean;
};

export const Field = (props: FieldProps) => {
	const { children, hint, label, message } = props;
	return (
		<FieldProvider {...props}>
			<Stack gap={0.25}>
				<FieldLabel>{label}</FieldLabel>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				{message ? <FieldMessage>{message}</FieldMessage> : null}
				{children}
			</Stack>
		</FieldProvider>
	);
};
