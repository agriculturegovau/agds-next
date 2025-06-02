const useGetScrollbarWidth = () => {
	// window.innerWidth includes the scrollbar if it's present.
	// document.documentElement.clientWidth provides the width of the viewport without the scrollbar.
	function getScrollbarWidth() {
		// SSR: check window and document
		const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
		const clientWidth =
			typeof document !== 'undefined'
				? document.documentElement.clientWidth
				: 0;
		return innerWidth - clientWidth;
	}

	return getScrollbarWidth;
};

export default useGetScrollbarWidth;
