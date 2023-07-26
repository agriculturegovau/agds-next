import { createContext, useContext, RefObject } from 'react';
import { usePopover } from '../_popover';

export type DropdownMenuContextType = {
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
	panelRef: RefObject<HTMLDivElement>;
	popover: ReturnType<typeof usePopover<HTMLButtonElement>>;
};

export const DropdownMenuContext = createContext<
	DropdownMenuContextType | undefined
>(undefined);

export function useDropdownMenuContext() {
	const context = useContext(DropdownMenuContext);

	if (typeof context === 'undefined') {
		throw Error('DropdownMenuContext not found.');
	}

	return context;
}
