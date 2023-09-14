import {
	PropsWithChildren,
	useEffect,
	KeyboardEvent,
	useCallback,
} from 'react';
import { mergeRefs, useClickOutside } from '../core';
import { Flex, FlexProps } from '../flex';
import { Popover } from '../_popover';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuControlIds } from './utils';

export type DropdownMenuPanelProps = PropsWithChildren<{
	palette?: FlexProps['palette'];
}>;

export function DropdownMenuPanel({
	children,
	palette,
}: DropdownMenuPanelProps) {
	const { panelRef, isMenuOpen, closeMenu, popover, activeDescendantId } =
		useDropdownMenuContext();

	const { buttonId, panelId } = useDropdownMenuControlIds();

	// When the dropdown is opened, clicking outside should close
	const handleClickOutside = useCallback(() => {
		if (isMenuOpen) closeMenu();
	}, [isMenuOpen, closeMenu]);

	useClickOutside(
		[popover.popoverRef, popover.referenceRef],
		handleClickOutside
	);

	// When the dropdown is opened, the menu list should be focused
	useEffect(() => {
		if (isMenuOpen) {
			panelRef.current?.focus({
				// Stops the browser jumping to the top of the page when focusing the element
				// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
				preventScroll: true,
			});
		}
	}, [panelRef, isMenuOpen]);

	const { onKeyDown } = useKeydownNavigation();

	const { style, ref: popoverRef } = popover.getPopoverProps();
	const { matchReferenceWidth } = popover.getOptions();

	if (!isMenuOpen) return null;

	return (
		<Popover
			as={Flex}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={mergeRefs([popoverRef, panelRef])}
			role="menu"
			tabIndex={-1}
			id={panelId}
			aria-labelledby={buttonId}
			aria-activedescendant={activeDescendantId}
			onKeyDown={onKeyDown}
			palette={palette}
			flexDirection="column"
			minWidth={matchReferenceWidth ? undefined : '18rem'}
			focus
			style={style}
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
		clickSelectedItem,
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
			case 'Enter':
			case 'Space':
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
					updateDescendantSearchTerm(event.key);
				}
		}
	}

	return { onKeyDown };
}
