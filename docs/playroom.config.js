module.exports = {
	title: 'Playroom | Agriculture Design System',
	components: './playroom/components',
	snippets: './playroom/snippets.js',
	outputPath: './public/playroom',
	frameComponent: './playroom/frame.js',
	typeScriptFiles: [
		'../packages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'!**/node_modules',
	],
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
