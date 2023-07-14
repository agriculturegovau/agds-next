import { ForwardedRef, forwardRef, KeyboardEvent } from 'react';
import { Button, ButtonProps } from '../button';
import { mergeRefs } from '../core';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuControlIds } from './utils';

export type DropdownMenuButtonProps = Omit<
	ButtonProps,
	'id' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'onClick'
>;

export const DropdownMenuButton = forwardRef<
	HTMLButtonElement,
	DropdownMenuButtonProps
>(function DropdownMenuButton({ variant = 'text', ...props }, forwardedRef) {
	const dropdownProps = useDropdownMenuButton(forwardedRef);
	return <Button variant={variant} {...dropdownProps} {...props} />;
});

export function useDropdownMenuButton(
	forwardedRef?: ForwardedRef<HTMLButtonElement>
) {
	const {
		isMenuOpen,
		openMenu,
		toggleMenu,
		goToFirstMenuItem,
		goToLastMenuItem,
		popover,
	} = useDropdownMenuContext();
	const { buttonId, listId } = useDropdownMenuControlIds();
	const { ref: popoverRef } = popover.getReferenceProps();

	function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				openMenu();
				goToFirstMenuItem();
				break;
			case 'ArrowUp':
				event.preventDefault();
				openMenu();
				goToLastMenuItem();
		}
	}

	return {
		ref: mergeRefs([popoverRef, forwardedRef ?? null]),
		id: buttonId,
		'aria-haspopup': true,
		'aria-controls': listId,
		'aria-expanded': isMenuOpen,
		onClick: toggleMenu,
		onKeyDown,
	};
}
