import { useId } from '../core';
import { useMenuContext } from './DropdownMenuContext';

/**
 * Generates the ID of the dropdown menu container element
 */
export function useDropdownMenuId() {
	const autoId = useId();
	return `dropdown-menu-${autoId}`;
}

/**
 * Generates the ID of the dropdown menu button and dropdown menu list
 * These are generated together as they are connected by aria-controls/aria-labelledby
 * The `menuId` prefix ensures that multiple dropdowns can be placed on the same page
 */
export function useDropdownMenuControlIds() {
	const { menuId } = useMenuContext();
	return {
		buttonId: `${menuId}-button`,
		listId: `${menuId}-list`,
	};
}

/**
 * Generates the ID of the dropdown menu list item
 * The `menuId` prefix ensures that multiple dropdowns can be placed on the same page
 */
export function useDropdownMenuItemId(idProp: string | undefined) {
	const { menuId } = useMenuContext();
	const autoId = useId();
	return idProp ?? `${menuId}-item-${autoId}`;
}
