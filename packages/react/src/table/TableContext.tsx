import { createContext, useContext } from 'react';
import { ColumnOffset } from './Table';

export type TableContextType = {
	frozenColumnsOffsets?: ColumnOffset[];
	striped?: boolean;
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
