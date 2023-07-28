import { packs, boxPalette, tokens, mapSpacing } from '../core';

const variants = {
	primary: {
		background: boxPalette.foregroundAction,
		borderColor: boxPalette.foregroundAction,
		color: boxPalette.backgroundBody,
		textDecoration: 'none',

		'&:not(:disabled):hover': {
			background: boxPalette.foregroundText,
			borderColor: boxPalette.foregroundText,
			color: boxPalette.backgroundBody,
			...packs.underline,
		},
	},
	secondary: {
		background: boxPalette.backgroundBody,
		borderColor: boxPalette.foregroundAction,
		color: boxPalette.foregroundAction,
		textDecoration: 'none',

		'&:not(:disabled):hover': {
			background: boxPalette.backgroundBody,
			borderColor: boxPalette.foregroundText,
			color: boxPalette.foregroundText,
			...packs.underline,
		},
	},
	tertiary: {
		background: 'transparent',
		borderColor: 'transparent',
		color: boxPalette.foregroundAction,
		...packs.underline,

		'&:not(:disabled):hover': {
			background: 'transparent',
			borderColor: 'transparent',
			color: boxPalette.foregroundText,
			textDecoration: 'none',
		},
	},
	text: {
		height: 'auto',
		paddingLeft: 0,
		paddingRight: 0,
		borderWidth: 0,
		background: 'transparent',
		color: boxPalette.foregroundAction,
		...packs.underline,

		'&:not(:disabled):hover': {
			background: 'transparent',
			color: boxPalette.foregroundText,
			textDecoration: 'none',
		},
	},
} as const;

export type ButtonVariant = keyof typeof variants;

const sizes = {
	sm: {
		...packs.input.sm,
		gap: mapSpacing(0.5),
		paddingLeft: mapSpacing(0.75),
		paddingRight: mapSpacing(0.75),
	},
	md: {
		...packs.input.md,
		gap: mapSpacing(0.75),
		paddingLeft: mapSpacing(1.5),
		paddingRight: mapSpacing(1.5),
	},
};

export type ButtonSize = keyof typeof sizes;

export const iconSize = {
	sm: 'sm',
	md: 'md',
} as const;

export const loadingSize = {
	sm: 'sm',
	md: 'md',
} as const;

export function buttonStyles({
	block,
	variant,
	size,
}: {
	block: boolean;
	variant: ButtonVariant;
	size: ButtonSize;
}) {
	return {
		appearance: 'none',
		boxSizing: 'border-box',
		position: 'relative',
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		fontFamily: tokens.font.body,
		margin: 0,
		textAlign: 'center',

		...(block && {
			width: '100%',
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,

		...sizes[size],
		...variants[variant],
	} as const;
}
