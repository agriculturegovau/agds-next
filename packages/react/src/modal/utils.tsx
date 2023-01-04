import { useId } from '../core';

export const useModalId = () => {
	const id = useId();
	return {
		titleId: `modal-${id}-title`,
	};
};
