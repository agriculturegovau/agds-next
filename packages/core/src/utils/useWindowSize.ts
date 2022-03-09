import { useState, useEffect } from 'react';

type Size = {
	width: number | undefined;
	height: number | undefined;
};

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState<Size>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () =>
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}
