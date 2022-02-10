import { ReactNode } from 'react';
import { FieldProvider } from './FieldProvider';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldMessage } from './FieldMessage';

export type FieldProps = {
	children: ReactNode;
	label: string;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	valid?: boolean;
};

export const Field = (props: FieldProps) => {
	const { children, hint, label, message, required, invalid } = props;
	return (
		<FieldProvider {...props}>
			<FieldContainer>
				<FieldLabel>
					{label} ({required ? 'required' : 'optional'})
				</FieldLabel>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				{message ? <FieldMessage>{message}</FieldMessage> : null}
				{children}
			</FieldContainer>
		</FieldProvider>
	);
};
