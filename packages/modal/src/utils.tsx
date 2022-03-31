import { useId } from '@reach/auto-id';

export const useModalId = () => {
	const id = useId();
	return {
		titleId: `modal-${id}-title`,
	};
};
