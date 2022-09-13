module.exports = ({ env }) => {
	const isTest = env() === 'test';

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
