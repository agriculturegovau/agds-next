import { PrismTheme } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import { boxPalette, globalPalette, tokens, fontGrid } from '@ag.ds-next/core';

const blue = '#79c0ff';
const purple = '#d2a8ff';

// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode
export const prismTheme: PrismTheme = {
	plain: {
		fontFamily: tokens.font.monospace,
		...fontGrid('xs', 'default'),
		color: boxPalette.foregroundText,
		backgroundColor: boxPalette.backgroundBodyAlt,
	},
	styles: [
		// ...dracula.styles,
		{
			types: [
				'string',
				'attr-value',
				'entity',
				'url',
				'symbol',
				'number',
				'boolean',
				'variable',
				'tag',

				'builtin',
				'char',
				'class-name',
			],
			style: {
				color: blue,
			},
		},
		{
			types: ['inserted'],
			style: {
				color: 'rgb(80, 250, 123)',
			},
		},
		{
			types: [
				'selector',
				'constant',
				'property',
				'regex',
				'.language-autohotkey',
				'keyword',
				'deleted',
			],
			style: {
				color: '#f55d70',
			},
		},
		{
			types: ['comment', 'prolog', 'doctype', 'cdata'],
			style: {
				color: boxPalette.foregroundMuted,
				font: 'italic',
			},
		},
		{
			types: ['operator', 'punctuation'],
			style: {
				color: boxPalette.foregroundText,
			},
		},
		{
			types: ['atrule', 'attr-name', 'function'],
			style: {
				color: purple,
			},
		},
		{
			types: ['changed'],
			style: {
				color: '#fd9a5e',
			},
		},
	],
};

/**


namespace {
	opacity: .7;
}




important,
function,
bold {
	font-weight: bold;
}

 */
