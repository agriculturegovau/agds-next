module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	rules: {
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'after-used',
				ignoreRestSiblings: true,
				vars: 'all',
			},
		],
		'import/order': [
			'error',
			{
				pathGroups: [
					// Ensure monorepo packages are imported between external dependencies and internal modules
					{ pattern: '@ag.ds-next/**', group: 'external', position: 'after' },
					// Ensure module aliases are imported after `@ag.ds` packages
					{ pattern: '~/**', group: 'external', position: 'after' },
				],
				'newlines-between': 'never',
				pathGroupsExcludedImportTypes: ['builtin'],
			},
		],
	},
	overrides: [
		{
			// These sites are hosted using GitHub pages which is incompatible with @next/image
			files: ['docs/**/*', 'example-site/**/*', 'packages/**/*'],
			rules: {
				'@next/next/no-img-element': 'off',
			},
		},
		{
			files: ['packages/**/*', '.storybook/**/*'],
			rules: { '@next/next/no-html-link-for-pages': 'off' },
		},
		// CSF and import/no-anonymous-default-export
		{
			files: ['**/*.stories.ts', '**/*.stories.tsx'],
			rules: {
				'import/no-anonymous-default-export': 'off',
			},
		},
		// Scrips written in plain JS need to use require
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
