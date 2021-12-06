module.exports = {
	stories: ['../packages/*/src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {
				backgrounds: false,
			},
		},
	],
	framework: '@storybook/react',
};
