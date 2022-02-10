import React, { createContext, useContext } from 'react';
import { useId } from '@reach/auto-id';
import { FieldProps } from './Field';

type FieldContext =
	| {
			fieldId: string;
			hintId: string;
			messageId: string;
			describedBy?: string;
			required?: boolean;
			hasHint: boolean;
			hasMessage: boolean;
			invalid?: boolean;
			valid?: boolean;
	  }
	| undefined;

const fieldContext = createContext<FieldContext>(undefined);

export const FieldProvider = ({
	children,
	required,
	hint,
	message,
	invalid,
	valid,
}: FieldProps) => {
	const id = useId();
	const fieldId = `field-${id}`;
	const hintId = `field-${id}-hint`;
	const messageId = `field-${id}-message`;

	const hasHint = Boolean(hint);
	const hasMessage = Boolean(message);
	const describedBy = [message ? messageId : null, hint ? hintId : null]
		.filter(Boolean)
		.join(' ');

	return (
		<fieldContext.Provider
			value={{
				fieldId,
				hintId,
				messageId,
				describedBy,
				required,
				hasHint,
				hasMessage,
				invalid,
				valid,
			}}
		>
			{children}
		</fieldContext.Provider>
	);
};

export const useField = () => {
	const context = useContext(fieldContext);

	if (context === undefined) {
		throw new Error(
			'No context found. Is this component wrapped in a `Field`?'
		);
	}

	return context;
};
