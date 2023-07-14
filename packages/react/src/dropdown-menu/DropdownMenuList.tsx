import { PropsWithChildren, KeyboardEvent, useCallback } from 'react';
import { mergeRefs, useClickOutside } from '../core';
import { Flex, FlexProps } from '../flex';
import { Popover } from '../_popover';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuControlIds } from './utils';

export type DropdownMenuListProps = PropsWithChildren<{
	palette?: FlexProps['palette'];
}>;

export function DropdownMenuList({ children, palette }: DropdownMenuListProps) {
	const { listRef, isMenuOpen, closeMenu, popover, activeDescendantId } =
		useDropdownMenuContext();

	const { buttonId, listId } = useDropdownMenuControlIds();

	// When the dropdown is opened, clicking outside should close
	const handleClickOutside = useCallback(() => {
		if (isMenuOpen) closeMenu();
	}, [isMenuOpen, closeMenu]);

	useClickOutside(
		[popover.popoverRef, popover.referenceRef],
		handleClickOutside
	);

	const { onKeyDown } = useKeydownNavigation();

	const { style, ref: popoverRef } = popover.getPopoverProps();

	return (
		<Popover
			as={Flex}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={mergeRefs([popoverRef, listRef])}
			role="menu"
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

function useKeydownNavigation() {
	const {
		closeMenu,
		goToPreviousMenuItem,
		goToNextMenuItem,
		goToFirstMenuItem,
		goToLastMenuItem,
		updateDescendantSearchTerm,
	} = useDropdownMenuContext();

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
			case 'Tab':
				// Don't prevent default
				closeMenu();
				break;
			default:
				if (/^[a-zA-Z]{1}$/.test(event.key)) {
					event.preventDefault();
					updateDescendantSearchTerm(event.key);
				}
		}
	}

	return { onKeyDown };
}
