import { PrismTheme } from 'prism-react-renderer';
import { boxPalette, tokens, fontGrid } from '@ag.ds-next/core';

export const prismTheme: PrismTheme = {
	plain: {
		fontFamily: tokens.font.monospace,
		...fontGrid('xs', 'default'),
		color: boxPalette.foregroundText,
		backgroundColor: boxPalette.backgroundBodyAlt,
	},
	styles: [
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
				color: '#79c0ff',
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
				color: '#d2a8ff',
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
