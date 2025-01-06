import { useEffect, useState, KeyboardEvent } from 'react';
import { Button, ButtonProps } from '../button';
import { ChevronUpIcon, ChevronDownIcon } from '../icon';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuControlIds } from './utils';

export type DropdownMenuButtonProps = Omit<
	ButtonProps,
	'id' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'onClick'
>;

export function DropdownMenuButton({
	variant = 'text',
	iconAfter,
	...props
}: DropdownMenuButtonProps) {
	const { isMenuOpen } = useDropdownMenuContext();
	const buttonProps = useDropdownMenuButton();
	const defaultIconAfter = isMenuOpen ? ChevronUpIcon : ChevronDownIcon;
	return (
		<Button
			iconAfter={iconAfter ? iconAfter : defaultIconAfter}
			variant={variant}
			{...buttonProps}
			{...props}
		/>
	);
}

export function useDropdownMenuButton() {
	const {
		isMenuOpen,
		descendantNodes,
		goToLastMenuItem,
		goToFirstMenuItem,
		openMenu,
		toggleMenu,
		popover,
	} = useDropdownMenuContext();
	const { buttonId, panelId } = useDropdownMenuControlIds();
	const { ref: popoverRef } = popover.getReferenceProps();

	const [lastKeyPressed, setLastKeyPressed] = useState<string>();

	useEffect(() => {
		if (!isMenuOpen || !descendantNodes || !lastKeyPressed) return;
		if (lastKeyPressed === 'ArrowUp') {
			goToLastMenuItem();
		} else {
			goToFirstMenuItem();
		}
		setLastKeyPressed(undefined);
	}, [
		isMenuOpen,
		descendantNodes,
		goToFirstMenuItem,
		goToLastMenuItem,
		lastKeyPressed,
	]);

	function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
		if (!supportedKeys.includes(event.code)) return;
		event.preventDefault();
		setLastKeyPressed(event.code);
		openMenu();
	}

	return {
		ref: popoverRef,
		id: buttonId,
		'aria-haspopup': true,
		'aria-controls': panelId,
		'aria-expanded': isMenuOpen,
		onClick: toggleMenu,
		onKeyDown,
	};
}

const supportedKeys = ['ArrowDown', 'ArrowUp', 'Space', 'Enter'];
