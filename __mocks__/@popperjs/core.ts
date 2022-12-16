// https://github.com/floating-ui/floating-ui/issues/478

const mock = () => {
	const PopperJS = jest.requireActual('@popperjs/core');
	return {
		...PopperJS,
		destroy: () => undefined,
		scheduleUpdate: () => undefined,
		render: function (this: any) {
			return this.$options._renderChildren;
		},
	};
};

export default mock;
export { mock as createPopper };
