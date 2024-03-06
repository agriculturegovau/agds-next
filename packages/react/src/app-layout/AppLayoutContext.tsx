import { createContext, useContext } from 'react';

export type AppLayoutBackground = 'body' | 'bodyAlt';

export type AppLayoutContextType = {
	focusMode: boolean;
	isMobileMenuOpen: boolean;
	/** Controls what colour theme the AppLayout components display in, `'bodyAlt'` is light theme. */
	background: AppLayoutBackground;
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
