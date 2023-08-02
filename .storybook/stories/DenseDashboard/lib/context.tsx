import { createContext, useContext } from 'react';

// Type of data in context
type SelectedItemContextData = {
	selectedItemIndex: number;
	setSelectedItemIndex: (index: number) => void;
};

// Create context
export const SelectedItemContext = createContext<SelectedItemContextData>({
	selectedItemIndex: 0,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setSelectedItemIndex: () => {},
});

// Use this hook to access the context
export const useSelectedItemContext = () => {
	const context = useContext(SelectedItemContext);
	if (context === undefined) {
		throw new Error(
			'useSelectedItemContext must be used within a DataProvider'
		);
	}
	return context;
};
