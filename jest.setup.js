Object.defineProperty(window, 'CSS', {
	value: {
		supports: jest.fn().mockImplementation((property, value) => {
			if (property === '-webkit-tap-highlight-color' && value === 'black') {
				return true;
			}
			return false; // Fallback for unsupported properties
		}),
	},
});
