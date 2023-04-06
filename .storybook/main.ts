import path from 'path';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	features: {
		breakingChangesV7: false,
		storyStoreV7: false,
	},
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		{ name: '@storybook/addon-essentials', options: { background: false } },
		'storybook-addon-next-router',
	],
	stories: [
		'../packages/*/src/**/*.stories.@(ts|tsx)',
		'../example-site/**/*.stories.@(ts|tsx)',
		'./stories/*.@(ts|tsx)',
		'./stories/**/*.stories.@(ts|tsx)',
	],
	staticDirs: ['../example-site/public'],
	// Extend the vite config to work in a monorepo
	// See https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies
	viteFinal: async function viteConfig(config) {
		const entryPoints = await getEntryPoints();
		const include = config.build?.commonjsOptions?.include;

		return {
			...config,
			define: {
				...config.define,
				'process.env': {},
			},
			optimizeDeps: {
				...config.optimizeDeps,
				include: [
					...(config.optimizeDeps?.include ?? []),
					...entryPoints.map((name) => `@ag.ds-next/react/${name}`),
				],
			},
			build: {
				...config.build,
				commonjsOptions: {
					...config.build?.commonjsOptions,
					include: [
						...(include ? (Array.isArray(include) ? include : [include]) : []),
						/(packages\/react.+.cjs.js)/,
						/node_modules/,
					],
				},
			},
		};
	},
};

export default config;

async function getEntryPoints() {
	const basePath = `${process.cwd()}/packages/react`;

	// Get the contents of the `@ag.ds-next/react` package
	const folderContents = await readdir(basePath, {
		withFileTypes: true,
	});

	return folderContents
		.filter(({ name }) => existsSync(path.join(basePath, name, 'package.json')))
		.map(({ name }) => name);
}
