import { useEffect, useState } from 'react';

const useGetScrollbarWidth = () => {
	const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => {
			const { scrollWidth } = document.documentElement;
			setScrollbarWidth(window.innerWidth - scrollWidth);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});

	return scrollbarWidth;
};

export default useGetScrollbarWidth;
