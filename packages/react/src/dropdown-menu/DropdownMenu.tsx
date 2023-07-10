import { ReactNode, useEffect, useRef, useReducer } from 'react';
import { usePopover } from '../_popover';
import { DropdownMenuContext } from './DropdownMenuContext';
import { reducer, initialState } from './reducer';
import { useDropdownMenuId } from './utils';

export type DropdownMenuProps = {
	children: ((menuState: { isMenuOpen: boolean }) => ReactNode) | ReactNode;
	/** The placement of the dropdown list popover in relation to the dropdown menu button. */
	placement?: 'bottom' | 'bottom-start' | 'bottom-end';
};

export function DropdownMenu({
	children,
	placement = 'bottom-start',
}: DropdownMenuProps) {
	const menuId = useDropdownMenuId();
	const listRef = useRef<HTMLDivElement>(null);
	const popover = usePopover({ placement });

	const [state, dispatch] = useReducer(reducer, initialState);

	function openMenu() {
		dispatch({ type: 'OPEN_MENU' });
	}

	function closeMenu() {
		dispatch({ type: 'CLOSE_MENU' });
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		popover.referenceRef.current?.focus();
	}

	function toggleMenu() {
		state.isMenuOpen ? closeMenu() : openMenu();
	}

	function goToFirstMenuItem() {
		dispatch({ type: 'ACTIVATE_FIRST_DESCENDANT' });
	}

	function goToLastMenuItem() {
		dispatch({ type: 'ACTIVATE_LAST_DESCENDANT' });
	}

	function goToPreviousMenuItem() {
		dispatch({ type: 'ACTIVATE_PREVIOUS_DESCENDANT' });
	}

	function goToNextMenuItem() {
		dispatch({ type: 'ACTIVATE_NEXT_DESCENDANT' });
	}

	function updateDescendantSearchTerm(eventKey: string) {
		dispatch({
			type: 'UPDATE_DESCENDANT_SEARCH_TERM',
			payload: { eventKey },
		});
	}

	function clickSelectedItem() {
		if (state.activeDescendantIndex === -1) return;
		state.descendantNodes?.[state.activeDescendantIndex]?.click();
		closeMenu();
	}

	useEffect(() => {
		if (!state.isMenuOpen) return;
		dispatch({
			type: 'SET_DESCENDANT_NODES',
			payload: {
				nodes: listRef.current?.querySelectorAll(
					'[role="menuitem"], [role="menuitemradio"]'
				) as NodeListOf<HTMLDivElement> | undefined,
			},
		});
	}, [state.isMenuOpen, children]);

	const activeDescendantId =
		state.activeDescendantIndex === -1
			? undefined
			: state.descendantNodes?.[state.activeDescendantIndex]?.id;

	return (
		<DropdownMenuContext.Provider
			value={{
				// Menu state
				isMenuOpen: state.isMenuOpen,
				openMenu,
				closeMenu,
				toggleMenu,
				// Actions
				goToPreviousMenuItem,
				goToNextMenuItem,
				goToFirstMenuItem,
				goToLastMenuItem,
				clickSelectedItem,
				// Active descendant state
				activeDescendantId,
				updateDescendantSearchTerm,
				// Other
				menuId,
				listRef,
				popover,
			}}
		>
			{typeof children === 'function'
				? children({ isMenuOpen: state.isMenuOpen })
				: children}
		</DropdownMenuContext.Provider>
	);
}
