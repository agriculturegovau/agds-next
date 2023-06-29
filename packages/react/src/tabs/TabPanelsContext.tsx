import { createContext, useContext } from 'react';

export type TabPanelsContextType = {
	panelIndex: number;
};

export const TabPanelsContext = createContext<TabPanelsContextType | undefined>(
	undefined
);

export function useTabPanelsContext() {
	const tabPanelsContext = useContext(TabPanelsContext);

	if (typeof tabPanelsContext === 'undefined') {
		throw Error('TabPanelsContext not found.');
	}

	return tabPanelsContext;
}
