import { useState, useEffect } from 'react';

type Size = {
	windowWidth: number | undefined;
	windowHeight: number | undefined;
};

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState<Size>({
		windowWidth: undefined,
		windowHeight: undefined,
	});

	useEffect(() => {
		const handleResize = () =>
			setWindowSize({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
			});

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}
