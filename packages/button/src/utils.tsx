import { packs, boxPalette, tokens, mapSpacing } from '@ag.ds-next/core';

const variants = {
	primary: {
		background: boxPalette.foregroundAction,
		borderColor: boxPalette.foregroundAction,
		color: boxPalette.backgroundBody,
		textDecoration: 'none',

		'&:hover': {
			background: boxPalette.foregroundText,
			borderColor: boxPalette.foregroundText,
			color: boxPalette.backgroundBody,
			textDecoration: 'underline',
		},
	},
	secondary: {
		background: 'transparent',
		border: `3px solid ${boxPalette.foregroundAction}`,
		color: boxPalette.foregroundAction,
		textDecoration: 'none',

		'&:hover': {
			background: 'transparent',
			border: `3px solid ${boxPalette.foregroundText}`,
			color: boxPalette.foregroundText,
			textDecoration: 'underline',
		},
	},
	tertiary: {
		background: 'transparent',
		border: `3px solid transparent`,
		color: boxPalette.foregroundAction,
		textDecoration: 'underline',

		'&:hover': {
			background: 'transparent',
			border: `3px solid transparent`,
			color: boxPalette.foregroundText,
			textDecoration: 'none',
		},
	},
} as const;

export type ButtonVariant = keyof typeof variants;

const sizes = {
	sm: {
		...packs.control.sm,
		paddingLeft: mapSpacing(0.75),
		paddingRight: mapSpacing(0.75),
	},
	md: {
		...packs.control.md,
		paddingLeft: mapSpacing(1.5),
		paddingRight: mapSpacing(1.5),
	},
};

export type ButtonSize = keyof typeof sizes;

export function buttonStyles({
	block,
	variant = 'primary',
	size = 'md',
}: {
	block?: boolean;
	variant?: ButtonVariant;
	size?: ButtonSize;
}) {
	return {
		...variants[variant],
		...sizes[size],

		appearance: 'none',
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center',
		borderWidth: 3,
		borderStyle: 'solid',
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		fontFamily: tokens.font.body,
		boxSizing: 'border-box',
		margin: 0,
		textAlign: 'center',

		...(block && {
			width: '100%',
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
			// reset hover and focus styles
			'&:hover': {},
			'&:focus': {},
		},

		'&:focus': packs.outline,
	} as const;
}
