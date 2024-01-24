import { createContext, RefObject, useContext } from 'react';

export type AppLayoutContextType = {
	focusMode: boolean;
	mobileMenuOpenMenuButtonRef: RefObject<HTMLButtonElement>;
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
