import {
	packs,
	boxPalette,
	globalPalette,
	tokens,
	mapSpacing,
} from '@ag.ds-next/core';

const buttonTones = {
	action: boxPalette.foregroundAction,
	danger: globalPalette.error,
};
type buttonTone = keyof typeof buttonTones;

const variants = {
	primary: (tone: buttonTone) => ({
		background: buttonTones[tone],
		borderColor: buttonTones[tone],
		color: boxPalette.backgroundBody,
		textDecoration: 'none',

		'&:not(:disabled):hover': {
			background: boxPalette.foregroundText,
			borderColor: boxPalette.foregroundText,
			color: boxPalette.backgroundBody,
			...packs.underline,
		},
	}),
	secondary: (tone: buttonTone) => ({
		background: 'transparent',
		borderColor: buttonTones[tone],
		color: buttonTones[tone],
		textDecoration: 'none',

		'&:not(:disabled):hover': {
			background: 'transparent',
			borderColor: boxPalette.foregroundText,
			color: boxPalette.foregroundText,
			...packs.underline,
		},
	}),
	tertiary: (tone: buttonTone) => ({
		background: 'transparent',
		borderColor: 'transparent',
		color: buttonTones[tone],
		...packs.underline,

		'&:not(:disabled):hover': {
			background: 'transparent',
			borderColor: 'transparent',
			color: boxPalette.foregroundText,
			textDecoration: 'none',
		},
	}),
} as const;

export type ButtonVariant = keyof typeof variants;

const sizes = {
	sm: {
		...packs.input.sm,
		gap: mapSpacing(0.25),
		paddingLeft: mapSpacing(0.75),
		paddingRight: mapSpacing(0.75),
	},
	md: {
		...packs.input.md,
		gap: mapSpacing(0.5),
		paddingLeft: mapSpacing(1.5),
		paddingRight: mapSpacing(1.5),
	},
};

export type ButtonSize = keyof typeof sizes;

export const iconSize = {
	sm: 'sm',
	md: 'md',
} as const;

type buttonStylesProps = {
	block: boolean;
	variant: ButtonVariant;
	size: ButtonSize;
	tone: 'action' | 'danger';
};

export function buttonStyles({
	block,
	variant,
	size,
	tone,
}: buttonStylesProps) {
	return {
		...variants[variant](tone),
		...sizes[size],

		appearance: 'none',
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: tokens.borderWidth.lg,
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
		},

		'&:focus': packs.outline,
	} as const;
}
