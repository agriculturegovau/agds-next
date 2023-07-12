import { createContext, useContext } from 'react';

export type TabListContextType = {
	tabIndex: number;
};

export const TabListContext = createContext<TabListContextType | undefined>(
	undefined
);

export function useTabListContext() {
	const tabListContext = useContext(TabListContext);

	if (typeof tabListContext === 'undefined') {
		throw Error('TabListContext not found.');
	}

	return tabListContext;
}
