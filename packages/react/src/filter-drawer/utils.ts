import { useId } from '../core';

export const useFilterDrawerId = () => {
	const id = useId();
	return {
		titleId: `filter-drawer-${id}-title`,
	};
};
