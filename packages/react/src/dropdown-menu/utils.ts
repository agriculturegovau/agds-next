import { useId } from '../core';
import { useDropdownMenuContext } from './DropdownMenuContext';

/**
 * Generates the ID of the dropdown menu container element
 */
export function useDropdownMenuId() {
	const autoId = useId();
	return `dropdown-menu-${autoId}`;
}

/**
 * Generates the ID of the dropdown menu button and dropdown menu panel
 * These are generated together as they are connected by aria-controls/aria-labelledby
 * The `menuId` prefix ensures that multiple dropdowns can be placed on the same page
 */
export function useDropdownMenuControlIds() {
	const { menuId } = useDropdownMenuContext();
	return {
		buttonId: `${menuId}-button`,
		panelId: `${menuId}-panel`,
	};
}

/**
 * Generates the ID of the dropdown menu list item
 * The `menuId` prefix ensures that multiple dropdowns can be placed on the same page
 */
export function useDropdownMenuItemId(idProp: string | undefined) {
	const { menuId } = useDropdownMenuContext();
	const autoId = useId();
	return idProp ?? `${menuId}-item-${autoId}`;
}
