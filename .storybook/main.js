module.exports = {
	stories: ['../packages/*/src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-essentials',
			options: {
				backgrounds: false,
			},
		},
	],
	framework: '@storybook/react',
	staticDirs: ['../example-site/public'],
};
