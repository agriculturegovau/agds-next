module.exports = {
	components: './playroom/components',
	snippets: './playroom/snippets.js',
	outputPath: './public/playroom',
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
	widths: [320, 375, 576, 768, 1024, 1400, 1920],
};
