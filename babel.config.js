module.exports = ({ env }) => {
	const isTest = env() === 'test';

	// This babel config is used for our component tests (jest, react-testing-library)
	if (isTest) {
		return {
			presets: [
				[
					'next/babel',
					{
						'preset-react': {
							runtime: 'automatic',
							importSource: '@emotion/react',
						},
					},
				],
			],
			plugins: ['@emotion/babel-plugin'],
		};
	}

	// This babel config is used for everything else which include: NPM package bundles, docs/template site (nextjs), storybook and playroom
	return {
		presets: [
			['@babel/preset-env', { targets: { node: 'current' } }],
			'@babel/preset-typescript',
			'@emotion/babel-preset-css-prop',
			[
				'next/babel',
				{
					'preset-react': {
						runtime: 'automatic',
						importSource: '@emotion/react',
					},
				},
			],
		],
		plugins: ['@emotion/babel-plugin'],
	};
};
