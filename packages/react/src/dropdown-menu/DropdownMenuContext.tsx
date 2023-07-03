import {
	createContext,
	useContext,
	RefObject,
	Dispatch,
	SetStateAction,
} from 'react';
import { usePopover } from '../_popover';

export type MenuContextType = {
	listRef: RefObject<HTMLDivElement>;
	menuId: string;
	popover: ReturnType<typeof usePopover>;
	itemNodes: NodeListOf<HTMLDivElement> | undefined;

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

	// Active descendant state
	activeDescendantId: string | undefined;
	activeDescendantIndex: number | undefined;
	setActiveDescendantIndex: Dispatch<SetStateAction<number | undefined>>;
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
