import { useId } from '../../core/src';

export const useModalId = () => {
	const id = useId();
	return {
		titleId: `modal-${id}-title`,
	};
};
