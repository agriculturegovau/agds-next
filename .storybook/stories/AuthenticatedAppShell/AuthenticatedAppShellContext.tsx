import { createContext, useContext } from 'react';
import { AuthenticatedAppShellProps } from './AuthenticatedAppShell';

export type AuthenticatedAppShellContextType = {
	isMobile: boolean;
	isMenuVisible: boolean;
	showMenu: () => void;
	hideMenu: () => void;
} & Pick<NonNullable<AuthenticatedAppShellProps>, 'userMenu'>;

// create new context
export const AuthenticatedAppShellContext = createContext<
	AuthenticatedAppShellContextType | undefined
>(undefined);

// export hook to access context
export function useAuthenticatedAppShellContext() {
	const context = useContext(AuthenticatedAppShellContext);

	if (context === undefined) {
		throw new Error('Context not found');
	}

	return context;
}
