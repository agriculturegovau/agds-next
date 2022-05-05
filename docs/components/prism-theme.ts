import { PrismTheme } from 'prism-react-renderer';
import { globalPalette, tokens, fontGrid } from '@ag.ds-next/core';

export const prismTheme: PrismTheme = {
	plain: {
		fontFamily: tokens.font.monospace,
		...fontGrid('xs', 'default'),
		color: globalPalette.lightForegroundText,
		backgroundColor: globalPalette.lightBackgroundShade,
	},
	styles: [
		{
			types: ['comment', 'prolog', 'cdata'],
			style: {
				color: globalPalette.lightForegroundMuted,
				opacity: 0.5,
			},
		},
		{
			types: ['punctuation', 'entity'],
			style: {
				color: globalPalette.lightForegroundMuted,
			},
		},
		{
			types: ['operator', 'doctype'],
			style: {
				color: globalPalette.lightForegroundMuted,
				opacity: 0.7,
			},
		},
		{
			types: [
				'selector',
				'string',
				'char',
				'builtin',
				'inserted',
				'regex',
				'attr-value',
			],
			style: {
				color: globalPalette.success,
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
				color: globalPalette.warning,
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
				color: globalPalette.warning,
			},
		},
	],
};
