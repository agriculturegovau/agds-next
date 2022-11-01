import { RefObject, useCallback, useEffect, useState } from 'react';

export function useElementSize<T extends HTMLElement = HTMLDivElement>(
	ref: RefObject<T>
) {
	const [size, setSize] = useState({ width: 0, height: 0 });

	const handleSize = useCallback(() => {
		setSize({
			width: ref.current?.offsetWidth || 0,
			height: ref.current?.offsetHeight || 0,
		});
	}, [ref]);

	useEffect(() => {
		handleSize();
		window.addEventListener('resize', handleSize);
		return () => window.removeEventListener('resize', handleSize);
	}, [handleSize]);

	return size;
}
