import { useEffect, useState } from 'react';

export const useGetScrollbarSizes = () => {
	const [scrollbarSizes, setScrollbarSizes] = useState<{
		width: number;
		height: number;
	}>({ width: 0, height: 0 });

	useEffect(() => {
		// Create temporary element with scrollbars
		const element = document.createElement('div');
		element.style.cssText =
			'overflow:scroll; position:absolute; visibility:hidden;';
		document.body.appendChild(element);

		const width = element.offsetWidth - element.clientWidth;
		const height = element.offsetHeight - element.clientHeight;
		setScrollbarSizes({ width, height });

		element.remove();
	}, [setScrollbarSizes]);

	return scrollbarSizes;
};
