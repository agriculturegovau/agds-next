module.exports = {
	title: 'Agriculture Design System',
	components: './playroom/components.tsx',
	snippets: './playroom/snippets.ts',
	outputPath: './public/playroom',
	frameComponent: './playroom/frame.tsx',
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
	widths: [320, 375, 576, 768, 992, 1024, 1200, 1800],
};
