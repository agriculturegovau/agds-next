import { useId } from '../core';

export function useCollapsingSideBarIds() {
	const autoId = useId();
	return {
		buttonId: `collapsing-side-bar-${autoId}-button`,
		bodyId: `collapsing-side-bar-${autoId}-body`,
	};
}
