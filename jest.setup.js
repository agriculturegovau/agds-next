Object.defineProperty(window, 'CSS', {
	value: {
		supports: jest.fn().mockImplementation((property, value) => {
			return property === '-webkit-overflow-scrolling' && value === 'auto';
		}),
	},
});
