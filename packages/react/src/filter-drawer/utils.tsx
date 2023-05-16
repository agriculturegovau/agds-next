import { useId } from '../core';

export const useFilterDrawerId = () => {
	const id = useId();
	return {
		titleId: `side-drawer-${id}-title`,
	};
};
