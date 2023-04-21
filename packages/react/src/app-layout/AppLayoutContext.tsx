import { createContext, RefObject, useContext } from 'react';

export type AppLayoutContextType = {
	isMobile: boolean | undefined;
	isMenuOpen: boolean;
	showMenu: () => void;
	hideMenu: () => void;
	mobileShowMenuButtonRef: RefObject<HTMLButtonElement>;
	desktopShowMenuButtonRef: RefObject<HTMLButtonElement>;
	hideMenuButtonRef: RefObject<HTMLButtonElement>;
};

// Create new context
export const AppLayoutContext = createContext<AppLayoutContextType | undefined>(
	undefined
);

// export hook to access context
export function useAppLayoutContext() {
	const context = useContext(AppLayoutContext);

	if (context === undefined) {
		throw new Error('`AppLayoutContext` not found.');
	}

	return context;
}
