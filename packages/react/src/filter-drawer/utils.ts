import { useId } from '../core';

export function useFilterDrawerId() {
	const id = useId();
	return {
		titleId: `filter-drawer-${id}-title`,
	};
}
