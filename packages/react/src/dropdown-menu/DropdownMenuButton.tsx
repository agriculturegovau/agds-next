import { forwardRef } from 'react';
import { Button, ButtonProps } from '../button';
import { mergeRefs } from '../core';
import { useMenuContext } from './DropdownMenuContext';
import { useDropdownMenuControlIds } from './utils';

export type DropdownMenuButtonProps = Omit<
	ButtonProps,
	'id' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'onClick'
>;

export const DropdownMenuButton = forwardRef<
	HTMLButtonElement,
	DropdownMenuButtonProps
>(function DropdownMenuButton({ variant = 'text', ...props }, forwardedRef) {
	const { menuId, isMenuOpen, toggleMenu, popover } = useMenuContext();
	const { buttonId, listId } = useDropdownMenuControlIds(menuId);

	const { ref: popoverRef } = popover.getReferenceProps();
	const mergedRefs = mergeRefs([popoverRef, forwardedRef]);

	return (
		<Button
			ref={mergedRefs}
			variant={variant}
			id={buttonId}
			aria-haspopup="true"
			aria-controls={listId}
			aria-expanded={isMenuOpen}
			onClick={toggleMenu}
			{...props}
		/>
	);
});
