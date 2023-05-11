import { useId } from '../core';

export const useSideDrawerId = () => {
	const id = useId();
	return {
		titleId: `side-drawer-${id}-title`,
	};
};
