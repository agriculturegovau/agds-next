import {
	PropsWithChildren,
	ReactNode,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useTernaryState } from '../core';
import { usePopover } from '../_popover';
import { DropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuId } from './utils';

export type DropdownMenuProps = PropsWithChildren<{}>;

export function DropdownMenu({ children }: DropdownMenuProps) {
	const menuId = useDropdownMenuId();

	// Menu state
	const [isMenuOpen, openMenu, _closeMenu] = useTernaryState(false);

	const { listRef, itemNodes, itemNodesCount } = useDropdownElements(
		isMenuOpen,
		children
	);

	const {
		activeDescendantIndex,
		setActiveDescendantIndex,
		activeDescendantId,
		goToPreviousMenuItem,
		goToNextMenuItem,
		goToFirstMenuItem,
		goToLastMenuItem,
	} = useDropdownMenuNavigation(itemNodesCount, itemNodes);

	function closeMenu() {
		_closeMenu();
		setActiveDescendantIndex(undefined);
		popover.referenceRef.current?.focus();
	}

	const popover = usePopover<HTMLButtonElement>();

	function clickSelectedItem() {
		if (typeof activeDescendantIndex === 'undefined') return;
		itemNodes?.[activeDescendantIndex]?.click();
		closeMenu();
	}

	return (
		<DropdownMenuContext.Provider
			value={{
				// Menu state
				isMenuOpen,
				openMenu,
				closeMenu,
				toggleMenu: isMenuOpen ? closeMenu : openMenu,
				// Actions
				goToPreviousMenuItem,
				goToNextMenuItem,
				goToFirstMenuItem,
				goToLastMenuItem,
				clickSelectedItem,
				// Active descendant state
				activeDescendantIndex,
				setActiveDescendantIndex,
				activeDescendantId,

				// Other
				menuId,
				listRef,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				popover,
				itemNodes,
			}}
		>
			<div id={menuId}>{children}</div>
		</DropdownMenuContext.Provider>
	);
}

function useDropdownElements(isMenuOpen: boolean, children: ReactNode) {
	const listRef = useRef<HTMLDivElement>(null);

	const [nodes, setNodes] = useState<NodeListOf<HTMLDivElement>>();
	useEffect(() => {
		if (!isMenuOpen) return;
		setNodes(
			listRef.current?.querySelectorAll(
				'[role="menuitem"], [role="menuitemradio"]'
			) as NodeListOf<HTMLDivElement> | undefined
		);
	}, [isMenuOpen, children]);

	const itemNodes = isMenuOpen ? nodes : undefined;
	const itemNodesCount = nodes?.length ? nodes.length - 1 : 0;

	return { listRef, itemNodesCount, itemNodes };
}

function useDropdownMenuNavigation(
	itemNodesCount: number,
	itemNodes: NodeListOf<HTMLDivElement> | undefined
) {
	const [activeDescendantIndex, setActiveDescendantIndex] = useState<
		number | undefined
	>(undefined);

	function goToPreviousMenuItem() {
		if (typeof activeDescendantIndex === 'undefined') {
			setActiveDescendantIndex(0);
		} else {
			setActiveDescendantIndex(
				activeDescendantIndex === 0 ? itemNodesCount : activeDescendantIndex - 1
			);
		}
	}

	function goToNextMenuItem() {
		if (typeof activeDescendantIndex === 'undefined') {
			setActiveDescendantIndex(0);
		} else {
			setActiveDescendantIndex(
				activeDescendantIndex === itemNodesCount ? 0 : activeDescendantIndex + 1
			);
		}
	}

	function goToFirstMenuItem() {
		setActiveDescendantIndex(0);
	}

	function goToLastMenuItem() {
		setActiveDescendantIndex(itemNodesCount);
	}

	const activeDescendantId = useMemo(() => {
		if (typeof activeDescendantIndex === 'undefined') return;
		return itemNodes?.[activeDescendantIndex]?.id;
	}, [itemNodes, activeDescendantIndex]);

	return {
		activeDescendantIndex,
		setActiveDescendantIndex,
		activeDescendantId,
		goToPreviousMenuItem,
		goToNextMenuItem,
		goToFirstMenuItem,
		goToLastMenuItem,
	};
}
