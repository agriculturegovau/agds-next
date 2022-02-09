import React, { createContext, useContext } from 'react';
import { useId } from '@reach/auto-id';

type FieldContext =
	| {
			fieldId: string;
			hintId: string;
			hasHint: boolean;
			errorMessageId: string;
			hasError: boolean;
	  }
	| undefined;

const fieldContext = createContext<FieldContext>(undefined);

export const FieldProvider = ({
	children,
	hasHint,
	hasError,
}: {
	children: React.ReactNode;
	hasHint: boolean;
	hasError: boolean;
}) => {
	const id = useId();
	const fieldId = 'field-' + id;
	const hintId = useId('field-hint-' + id);
	const errorMessageId = useId('field-error-message-' + id);

	const contextValue = {
		fieldId,
		hintId,
		errorMessageId,
		hasHint,
		hasError,
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
