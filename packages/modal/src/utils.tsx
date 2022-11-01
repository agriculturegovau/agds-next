import { useId } from '@ag.ds-next/core';

export const useModalId = () => {
	const id = useId();
	return {
		titleId: `modal-${id}-title`,
	};
};
