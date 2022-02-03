import { PrismTheme } from 'prism-react-renderer';
import { globalVars } from '@ag.ds-next/core';

export const agTheme: PrismTheme = {
	plain: {
		color: globalVars.light.foreground.text,
		backgroundColor: globalVars.light.background.shade,
	},
	styles: [
		{
			types: ['comment', 'prolog', 'cdata'],
			style: {
				color: globalVars.light.foreground.muted,
				opacity: 0.5,
			},
		},
		{
			types: ['punctuation', 'entity'],
			style: {
				color: globalVars.light.foreground.muted,
			},
		},
		{
			types: ['operator', 'doctype'],
			style: {
				color: globalVars.light.foreground.muted,
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
				color: globalVars.success,
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
				color: globalVars.warning,
			},
		},
		{
			types: ['keyword'],
			style: {
				color: globalVars.light.foreground.focus,
			},
		},
		{
			types: ['function'],
			style: {
				color: globalVars.light.foreground.action,
				fontWeight: 'bold',
				opacity: 0.8,
			},
		},
		{
			types: ['deleted', 'tag', 'atrule', 'attr-name'],
			style: {
				color: globalVars.light.foreground.action,
				opacity: 0.8,
			},
		},
		{
			types: ['class-name'],
			style: {
				color: globalVars.warning,
			},
		},
	],
};
