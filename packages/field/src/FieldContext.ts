import { createContext, useContext } from 'react';

type Context =
	| {
			fieldId: string;
			hintId: string;
			hasHint: boolean;
			errorMessageId: string;
			hasError: boolean;
	  }
	| undefined;

export const FieldContext = createContext<Context>(undefined);

export const useField = () => {
	const context = useContext(FieldContext);

	if (context === undefined) {
		throw new Error(
			'No context found. Is this component wrapped in a `Field`?'
		);
	}

	return context;
};
