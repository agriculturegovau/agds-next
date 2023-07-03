import { createContext, useContext } from 'react';

export type TabsContextType = {
	tabsId: string;
	uncontained: boolean;
	activeIndex: number;
	setActiveIndex: (index: number) => void;
	goToPreviousTab: () => void;
	goToNextTab: () => void;
	goToFirstTab: () => void;
	goToLastTab: () => void;
};

export const TabsContext = createContext<TabsContextType | undefined>(
	undefined
);

export function useTabsContext() {
	const tabsContext = useContext(TabsContext);

	if (typeof tabsContext === 'undefined') {
		throw Error('TabsContext not found.');
	}

	return tabsContext;
}
