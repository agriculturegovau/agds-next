import { createContext, useContext } from 'react';

export type AppLayoutContextType = {
	focusMode: boolean;
	isMobileMenuOpen: boolean;
	openMobileMenu: () => void;
	closeMobileMenu: () => void;
};

export const AppLayoutContext = createContext<AppLayoutContextType | undefined>(
	undefined
);

export function useAppLayoutContext() {
	const context = useContext(AppLayoutContext);

	if (context === undefined) {
		throw new Error('`AppLayoutContext` not found.');
	}

	return context;
}
