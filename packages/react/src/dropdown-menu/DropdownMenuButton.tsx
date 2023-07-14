import { ForwardedRef, forwardRef } from 'react';
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
	const { isMenuOpen, toggleMenu, popover } = useDropdownMenuContext();
	const { buttonId, listId } = useDropdownMenuControlIds();
	const { ref: popoverRef } = popover.getReferenceProps();

	return {
		ref: mergeRefs([popoverRef, forwardedRef ?? null]),
		id: buttonId,
		'aria-haspopup': true,
		'aria-controls': listId,
		'aria-expanded': isMenuOpen,
		onClick: toggleMenu,
	};
}
