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
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'react',
						importNames: ['useId'],
						message: "Please import 'useId' from '/core' instead.",
					},
				],
			},
		],
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
			// Our site is hosted using GitHub pages which is incompatible with @next/image
			files: ['**/*'],
			rules: { '@next/next/no-img-element': 'off' },
		},
		{
			files: ['packages/**/*', '.storybook/**/*'],
			rules: { '@next/next/no-html-link-for-pages': 'off' },
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
