import { useId } from '../core';

export function useDrawerId() {
	const id = useId();
	return {
		titleId: `drawer-${id}-title`,
	};
}
