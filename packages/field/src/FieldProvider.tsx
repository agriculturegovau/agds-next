import React, { createContext, useContext } from 'react';
import { useId } from '@reach/auto-id';
import { FieldProps } from './Field';

type FieldContext =
	| {
			fieldId: string;
			hintId: string;
			messageId: string;
			hasHint: boolean;
			hasMessage: boolean;
			isInvalid: boolean;
	  }
	| undefined;

const fieldContext = createContext<FieldContext>(undefined);

export const FieldProvider = ({
	children,
	hint,
	message,
	valid,
}: FieldProps) => {
	const id = useId();
	const fieldId = 'field-' + id;
	const hintId = useId('field-hint-' + id);
	const messageId = useId('field-message-' + id);

	const contextValue = {
		fieldId,
		hintId,
		messageId,
		hasHint: Boolean(hint),
		hasMessage: Boolean(message),
		isInvalid: valid === false,
	};

	return (
		<fieldContext.Provider value={contextValue}>
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
