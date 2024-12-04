import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	framework: '@storybook/nextjs',
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-essentials',
			options: { background: false },
		},
	],
	stories: [
		'../packages/*/src/**/*.stories.@(ts|tsx)',
		'../example-site/**/*.stories.@(ts|tsx)',
		'../docs/content/**/*.stories.@(ts|tsx)',
		'./stories/**/*.stories.@(ts|tsx)',
	],
	core: {
		builder: {
			name: '@storybook/builder-webpack5',
			options: {
				fsCache: true,
				lazyCompilation: true,
			},
		},
	},
	staticDirs: ['../example-site/public'],
	typescript: {
		check: false,
		checkOptions: {},
		skipCompiler: false,
	},
};

export default config;
