import { Button, ButtonProps } from '../button';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuControlIds } from './utils';

export type DropdownMenuButtonProps = Omit<
	ButtonProps,
	'id' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'onClick'
>;

export function DropdownMenuButton({
	variant = 'text',
	...props
}: DropdownMenuButtonProps) {
	const dropdownProps = useDropdownMenuButton();
	return <Button variant={variant} {...dropdownProps} {...props} />;
}

export function useDropdownMenuButton() {
	const { isMenuOpen, toggleMenu, popover } = useDropdownMenuContext();
	const { buttonId, listId } = useDropdownMenuControlIds();
	const { ref: popoverRef } = popover.getReferenceProps();
	return {
		ref: popoverRef,
		id: buttonId,
		'aria-haspopup': true,
		'aria-controls': listId,
		'aria-expanded': isMenuOpen,
		onClick: toggleMenu,
	};
}
