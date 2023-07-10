import { useId } from '../core';

export function useDropdownMenuId() {
	const autoId = useId();
	return `dropdown-menu-${autoId}`;
}

export function useDropdownMenuControlIds(menuId: string) {
	return {
		buttonId: `${menuId}-button`,
		listId: `${menuId}-list`,
	};
}

export function useDropdownMenuItemId(
	idProp: string | undefined,
	menuId: string
) {
	const autoId = useId();
	return idProp ?? `${menuId}-item-${autoId}`;
}
