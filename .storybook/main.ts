import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	staticDirs: ['../example-site/public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		{ name: '@storybook/addon-essentials', options: { background: false } },
		// 'storybook-addon-next-router',
	],
	stories: [
		'../packages/*/src/**/*.stories.@(ts|tsx)',
		// '../example-site/**/*.stories.@(ts|tsx)',
		// './stories/*.@(ts|tsx)',
		// './stories/*/index.@(ts|tsx)',
		// './stories/**/*.stories.@(ts|tsx)',
	],
};

export default config;
