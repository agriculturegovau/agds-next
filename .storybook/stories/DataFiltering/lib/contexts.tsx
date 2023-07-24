import { createContext, ReactNode, useContext } from 'react';
import { SortAndFilter } from './useSortAndFilter';
import { DashboardTableData } from './utils';

// Sort and filter context
export const SortAndFilterContext = createContext<SortAndFilter>(
	{} as SortAndFilter
);

export const SortAndFilterProvider = ({
	children,
	value,
}: {
	children: ReactNode;
	value: SortAndFilter;
}) => {
	return (
		<SortAndFilterContext.Provider value={value}>
			{children}
		</SortAndFilterContext.Provider>
	);
};

export const useSortAndFilterContext = () => {
	const context = useContext(SortAndFilterContext);
	if (context === undefined) {
		throw new Error(
			'useSortAndFilterContext must be used within a SortAndFilterProvider'
		);
	}
	return context;
};

// Data context
export const DashboardTableDataContext = createContext<DashboardTableData>(
	{} as DashboardTableData
);

export const DataProvider = ({
	children,
	value,
}: {
	children: ReactNode;
	value: DashboardTableData;
}) => {
	return (
		<DashboardTableDataContext.Provider value={value}>
			{children}
		</DashboardTableDataContext.Provider>
	);
};

export const useDashboardTableDataContext = () => {
	const context = useContext(DashboardTableDataContext);
	if (context === undefined) {
		throw new Error('useDataContext must be used within a DataProvider');
	}
	return context;
};
