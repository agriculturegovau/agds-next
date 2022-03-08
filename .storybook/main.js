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
		'@storybook/addon-a11y',
		'@storybook/addon-ie11',
	],
	framework: '@storybook/react',
	staticDirs: ['../example-site/public'],
};
