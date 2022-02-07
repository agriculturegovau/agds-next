import { PrismTheme } from 'prism-react-renderer';
import { globalPalette } from '@ag.ds-next/core';

export const prismTheme: PrismTheme = {
	plain: {
		color: globalPalette.light.foreground.text,
		backgroundColor: globalPalette.light.background.shade,
	},
	styles: [
		{
			types: ['comment', 'prolog', 'cdata'],
			style: {
				color: globalPalette.light.foreground.muted,
				opacity: 0.5,
			},
		},
		{
			types: ['punctuation', 'entity'],
			style: {
				color: globalPalette.light.foreground.muted,
			},
		},
		{
			types: ['operator', 'doctype'],
			style: {
				color: globalPalette.light.foreground.muted,
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
				color: globalPalette.light.foreground.focus,
			},
		},
		{
			types: ['function'],
			style: {
				color: globalPalette.light.foreground.action,
				fontWeight: 'bold',
				opacity: 0.8,
			},
		},
		{
			types: ['deleted', 'tag', 'atrule', 'attr-name'],
			style: {
				color: globalPalette.light.foreground.action,
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
