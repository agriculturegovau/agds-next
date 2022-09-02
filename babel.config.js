module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		'@babel/preset-typescript',
		[
			'@babel/preset-react',
			{ runtime: 'automatic', importSource: '@emotion/react' },
		],
	],
	plugins: ['@emotion/babel-plugin', '@babel/plugin-transform-runtime'],
};
