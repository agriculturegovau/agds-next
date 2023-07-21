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
			variant={variant}
			iconAfter={iconAfter ? iconAfter : defaultIconAfter}
			{...buttonProps}
			{...props}
		/>
	);
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
