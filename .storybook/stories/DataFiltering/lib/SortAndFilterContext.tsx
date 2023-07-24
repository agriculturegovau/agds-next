import { createContext, ReactNode, useContext } from 'react';
import { SortAndFilter } from './useSortAndFilter';

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
