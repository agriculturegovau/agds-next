import {
	PropsWithChildren,
	useEffect,
	KeyboardEvent,
	useCallback,
	useState,
} from 'react';
import { mergeRefs, useClickOutside } from '../core';
import { Flex, FlexProps } from '../flex';
import { Popover } from '../_popover';
import { useMenuContext } from './DropdownMenuContext';
import { useDropdownMenuButtonIds } from './utils';

export type DropdownMenuListProps = PropsWithChildren<{
	palette?: FlexProps['palette'];
}>;

export function DropdownMenuList({ children, palette }: DropdownMenuListProps) {
	const {
		menuId,
		listRef,
		isMenuOpen,
		closeMenu,
		popover,
		activeDescendantId,
	} = useMenuContext();

	const { buttonId, listId } = useDropdownMenuButtonIds(menuId);

	// FIXME when clicking outside on the button, it reopens
	const handleClickOutside = useCallback(() => {
		if (isMenuOpen) closeMenu();
	}, [isMenuOpen, closeMenu]);

	useClickOutside(popover.popoverRef, handleClickOutside);

	// When the dropdown menu component is opened, the menu list should be focused
	useEffect(() => {
		if (isMenuOpen) listRef.current?.focus();
	}, [listRef, isMenuOpen]);

	const { onKeyDown } = useDropdownMenuListActions();

	const { style, ref: popoverRef } = popover.getPopoverProps();

	return (
		<Popover
			as={Flex}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={mergeRefs([popoverRef, listRef])}
			role="menu"
			tabIndex={-1}
			id={listId}
			aria-labelledby={buttonId}
			aria-activedescendant={activeDescendantId}
			onKeyDown={onKeyDown}
			palette={palette}
			focus
			css={{
				display: 'flex',
				flexDirection: 'column',
				minWidth: '18rem',
			}}
			style={{
				...style,
				...(!isMenuOpen && { display: 'none' }),
			}}
		>
			{children}
		</Popover>
	);
}

function useDropdownMenuListActions() {
	const [searchTerm, setSearchTerm] = useState('');

	const {
		itemNodes,
		isMenuOpen,
		closeMenu,
		goToPreviousMenuItem,
		goToNextMenuItem,
		goToFirstMenuItem,
		goToLastMenuItem,
		clickSelectedItem,
		setActiveDescendantIndex,
	} = useMenuContext();

	function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
		switch (event.code) {
			case 'ArrowUp':
				event.preventDefault();
				goToPreviousMenuItem();
				break;
			case 'ArrowDown':
				event.preventDefault();
				goToNextMenuItem();
				break;
			case 'Home':
				event.preventDefault();
				goToFirstMenuItem();
				break;
			case 'End':
				event.preventDefault();
				goToLastMenuItem();
				break;
			case 'Escape':
				event.preventDefault();
				closeMenu();
				break;
			case 'Enter':
				event.preventDefault();
				clickSelectedItem();
				break;
			case 'Tab':
				// Don't prevent default
				closeMenu();
				break;
			default:
				if (/^[a-zA-Z]{1}$/.test(event.key)) {
					event.preventDefault();
					setSearchTerm((term) => term + event.key);
				}
		}
	}

	useEffect(() => {
		if (isMenuOpen && searchTerm && itemNodes?.length) {
			const activeItemIndex = Array.from(itemNodes)
				.map((node) => node.innerText.toLowerCase())
				.findIndex((label) => label.startsWith(searchTerm.toLowerCase()));
			if (activeItemIndex !== -1) setActiveDescendantIndex(activeItemIndex);
		}
	}, [isMenuOpen, searchTerm, itemNodes, setActiveDescendantIndex]);

	// When the dropdown menu closes, reset the search term
	useEffect(() => {
		return () => {
			if (isMenuOpen) setSearchTerm('');
		};
	}, [isMenuOpen]);

	return { onKeyDown };
}
