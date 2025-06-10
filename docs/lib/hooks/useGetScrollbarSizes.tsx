import { useEffect, useState } from 'react';

export const useGetScrollbarSizes = () => {
	const [scrollBarSizes, setScrollbarSizes] = useState<{
		width: number;
		height: number;
	}>({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			// Create temporary element with scrollbars
			const element = document.createElement('div');
			element.style.cssText =
				'overflow:scroll; visibility:hidden; position:absolute;';
			document.body.appendChild(element);

			const width = element.offsetWidth - element.clientWidth;
			const height = element.offsetHeight - element.clientHeight;
			setScrollbarSizes({ width, height });

			element.remove();
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [setScrollbarSizes]);

	return scrollBarSizes;
};
