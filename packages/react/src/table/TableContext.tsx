import { createContext, useContext } from 'react';

export type TableContextType = {
	tableLayout: 'auto' | 'fixed';
};

export const TableContext = createContext<TableContextType | undefined>(
	undefined
);

export function useTableContext() {
	const context = useContext(TableContext);

	if (typeof context === 'undefined') {
		throw Error('TableContext not found.');
	}

	return context;
}
