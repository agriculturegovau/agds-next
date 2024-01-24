import { createContext, PropsWithChildren, useContext } from 'react';
import { useTernaryState } from '../core';

type MainNavContextType = {
	isMobileMenuOpen: boolean;
	openMobileMenu: () => void;
	closeMobileMenu: () => void;
};

const MainNavContext = createContext<MainNavContextType | undefined>(undefined);

export function useMainNavContext() {
	const context = useContext(MainNavContext);

	if (!context) {
		throw new Error('Context not found');
	}

	return context;
}

export function MainNavProvider({ children }: PropsWithChildren<{}>) {
	const [isMobileMenuOpen, openMobileMenu, closeMobileMenu] =
		useTernaryState(false);

	return (
		<MainNavContext.Provider
			value={{ isMobileMenuOpen, openMobileMenu, closeMobileMenu }}
		>
			{children}
		</MainNavContext.Provider>
	);
}
