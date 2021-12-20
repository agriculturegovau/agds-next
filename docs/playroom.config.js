module.exports = {
	components: './playroom/components',
	outputPath: './out/playroom',
	title: 'AgDS Playroom',
	frameComponent: './playroom/frame.js',
	openBrowser: false,
	webpackConfig: () => ({
		module: {
			rules: [
				{
					test: /\.[tj]sx?$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							rootMode: 'upward',
						},
					},
				},
			],
		},
	}),
};
