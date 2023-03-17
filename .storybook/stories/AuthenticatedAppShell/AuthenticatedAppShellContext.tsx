import { createContext, useContext } from 'react';

export type AuthenticatedAppShellContextType = {
	userName: string;
	userRole?: string;
	/** If focus mode is true, the menu will be visible on desktop depending on the value of isModalOpen */
	isFocusMode: boolean;
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

// create new context
export const AuthenticatedAppShellContext =
	createContext<AuthenticatedAppShellContextType>({
		userName: '',
		userRole: undefined,
		/** If focus mode is true, the menu will be visible on desktop depending on the value of isModalOpen */
		isFocusMode: false,
		isModalOpen: false,
		openModal: () => {},
		closeModal: () => {},
	});

// export context
export const useAuthenticatedAppShellContext = () => {
	return useContext(AuthenticatedAppShellContext);
};
