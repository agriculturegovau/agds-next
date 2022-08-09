import { PrismTheme } from 'prism-react-renderer';
import { boxPalette, globalPalette, tokens, fontGrid } from '@ag.ds-next/core';

const blue = '#79c0ff';
const purple = '#d2a8ff';

// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode
export const prismTheme: PrismTheme = {
	plain: {
		fontFamily: tokens.font.monospace,
		...fontGrid('xs', 'default'),
		color: boxPalette.foregroundMuted,
		backgroundColor: boxPalette.backgroundShade,
	},
	styles: [
		{
			types: ['prolog', 'constant', 'builtin'],
			style: {
				// color: blue,
			},
		},
		// {
		// 	types: ['inserted', 'function'],
		// 	style: {
		// 		color: 'rgb(80, 250, 123)',
		// 	},
		// },
		// {
		// 	types: ['deleted'],
		// 	style: {
		// 		color: 'rgb(255, 85, 85)',
		// 	},
		// },
		// {
		// 	types: ['changed'],
		// 	style: {
		// 		color: 'rgb(255, 184, 108)',
		// 	},
		// },
		{
			types: ['punctuation', 'symbol'],
			style: {
				color: blue,
			},
		},
		{
			types: ['tag'],
			style: {
				// color: blue,
			},
		},
		{
			types: ['string', 'char', 'selector'],
			style: {
				color: globalPalette.accent,
			},
		},

		// {
		// 	types: ['keyword', 'variable'],
		// 	style: {
		// 		color: 'rgb(189, 147, 249)',
		// 		fontStyle: 'italic',
		// 	},
		// },
		// {
		// 	types: ['comment'],
		// 	style: {
		// 		color: boxPalette.foregroundText,
		// 	},
		// },
		{
			types: ['attr-value'],
			style: {
				color: blue,
			},
		},
		{
			types: ['attr-name'],
			style: {
				color: boxPalette.systemSuccess,
			},
		},
		{
			types: [
				'url',
				'symbol',
				'number',
				'boolean',
				'variable',
				'constant',
				'property',
				'regex',
				'inserted',
			],
			style: {
				color: boxPalette.systemWarning,
			},
		},
		{
			types: ['keyword'],
			style: {
				color: globalPalette.lightForegroundFocus,
			},
		},
		{
			types: ['function'],
			style: {
				color: globalPalette.lightForegroundAction,
				fontWeight: 'bold',
				opacity: 0.8,
			},
		},
		{
			types: ['deleted', 'tag', 'atrule', 'attr-name'],
			style: {
				color: globalPalette.lightForegroundAction,
				opacity: 0.8,
			},
		},
		{
			types: ['class-name'],
			style: {
				color: boxPalette.systemWarning,
			},
		},
	],
};
