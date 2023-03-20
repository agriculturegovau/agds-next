import { createContext, useContext } from 'react';
import { AuthenticatedAppShellProps } from './AuthenticatedAppShell';

export type AuthenticatedAppShellContextType = {
	isMobile: boolean;
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
} & Pick<NonNullable<AuthenticatedAppShellProps>, 'isFocusMode' | 'userMenu'>;

// create new context
export const AuthenticatedAppShellContext = createContext<
	AuthenticatedAppShellContextType | undefined
>(undefined);

// export context
export const useAuthenticatedAppShellContext = () => {
	const context = useContext(AuthenticatedAppShellContext);

	if (context === undefined) {
		throw new Error('Context not found');
	}

	return context;
};
