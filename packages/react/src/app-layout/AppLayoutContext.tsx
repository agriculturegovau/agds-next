import { createContext, RefObject, useContext } from 'react';
import { AppLayoutProps } from './AppLayout';

export type AuthenticatedAppShellContextType = {
	isMobile: boolean | undefined;
	isMenuOpen: boolean;
	showMenu: () => void;
	hideMenu: () => void;
	showMenuButtonRef: RefObject<HTMLButtonElement>;
	hideMenuButtonRef: RefObject<HTMLButtonElement>;
	handleSignOut: () => Promise<void>;
} & Pick<NonNullable<AppLayoutProps>, 'userMenu'>;

// create new context
export const AppLayoutContext = createContext<
	AuthenticatedAppShellContextType | undefined
>(undefined);

// export hook to access context
export function useAuthenticatedAppShellContext() {
	const context = useContext(AppLayoutContext);

	if (context === undefined) {
		throw new Error('Context not found');
	}

	return context;
}
