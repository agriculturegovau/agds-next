import { useId } from '../core';

export function useDropdownMenuId() {
	const autoId = useId();
	return `dropdown-menu-${autoId}`;
}

export function useDropdownMenuButtonIds(menuId: string) {
	return {
		buttonId: `${menuId}-button`,
		listId: `${menuId}-list`,
	};
}

export function useDropdownMenuItemId(menuId: string) {
	const autoId = useId();
	return `${menuId}-item-${autoId}`;
}
