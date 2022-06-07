module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
		'plugin:markdown/recommended',
	],
	rules: {
		'import/order': [
			'error',
			{
				// Ensure monorepo packages are imported between external dependencies and internal modules
				pathGroups: [
					{ pattern: '@ag.ds-next/**', group: 'external', position: 'after' },
				],
				'newlines-between': 'never',
				pathGroupsExcludedImportTypes: ['builtin'],
			},
		],
	},
	overrides: [
		{
			// Both of these sites are hosted using GitHub pages
			// which is incompatible with @next/image
			files: ['docs/**/*', 'example-site/**/*', 'packages/**/*'],
			rules: {
				'@next/next/no-img-element': 'off',
			},
		},
	],
};
