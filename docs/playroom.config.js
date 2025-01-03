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
					// Certain files in the playroom package need to be transpiled by babel
					// Otherwise the error 'Missing class properties transform in node_modules/playroom/src/Playroom/CodeEditor/CodeMirror2.tsx` is thrown
					exclude: /node_modules\/(?!playroom)/,
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
	widths: [320, 375, 576, 768, 992, 1024, 1200, 1600, 2000],
};
