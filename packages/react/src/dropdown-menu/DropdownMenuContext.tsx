import { createContext, useContext, RefObject } from 'react';
import { usePopover } from '../_popover';

export type MenuContextType = {
	// Menu state
	isMenuOpen: boolean;
	openMenu: () => void;
	closeMenu: () => void;
	toggleMenu: () => void;
	// Actions
	goToPreviousMenuItem: () => void;
	goToNextMenuItem: () => void;
	goToFirstMenuItem: () => void;
	goToLastMenuItem: () => void;
	clickSelectedItem: () => void;
	// Descendants
	activeDescendantId: string | undefined;
	updateDescendantSearchTerm: (eventKey: string) => void;
	// Other
	menuId: string;
	listRef: RefObject<HTMLDivElement>;
	popover: ReturnType<typeof usePopover<HTMLButtonElement>>;
};

export const DropdownMenuContext = createContext<MenuContextType | undefined>(
	undefined
);

export function useMenuContext() {
	const context = useContext(DropdownMenuContext);

	if (typeof context === 'undefined') {
		throw Error('DropdownMenuContext not found.');
	}

	return context;
}
