import { BoxProps, focusStylesMap } from '../box';
import {
	packs,
	boxPalette,
	tokens,
	mapSpacing,
	mq,
	mapResponsiveProp,
	print,
} from '../core';

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

		...print.exactColor,
	},
	secondary: {
		background: boxPalette.backgroundBody,
		borderColor: boxPalette.foregroundAction,
		color: boxPalette.foregroundAction,
		textDecoration: 'none',

		// See https://www.w3.org/TR/CSS21/ui.html#system-colors
		'@media (forced-colors: active)': {
			borderColor: 'Highlight',
		},

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

		// See https://www.w3.org/TR/CSS21/ui.html#system-colors
		'@media (forced-colors: active)': {
			borderColor: 'ButtonFace',
		},

		'&:not(:disabled):hover': {
			background: 'transparent',
			borderColor: 'transparent',
			color: boxPalette.foregroundText,
			textDecoration: 'none',
		},
	},
	text: {
		textAlign: 'left',
		minHeight: 'auto',
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

const { height: smHeight, ...smStyles } = packs.input.sm;
const { height: mdHeight, ...mdStyles } = packs.input.md;

const sizes = {
	sm: {
		...smStyles,
		minHeight: smHeight,
		gap: mapSpacing(0.5),
		paddingLeft: mapSpacing(0.75),
		paddingRight: mapSpacing(0.75),
	},
	md: {
		...mdStyles,
		minHeight: mdHeight,
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

export const loadingSize = {
	sm: 'sm',
	md: 'md',
} as const;

type BaseStylesArgs = {
	block: boolean;
	size: ButtonSize;
	variant: ButtonVariant;
	focusRingFor?: BoxProps['focusRingFor'];
};

type ResponsiveStylesArgs = BaseStylesArgs & {
	alignSelf?: BoxProps['alignSelf'];
};

type ButtonStyles<T extends ResponsiveStylesArgs> = T extends BaseStylesArgs
	? ReturnType<typeof getBaseStyles> // For backwards compatibility we return a single object of CSS properties, unless...
	: ReturnType<typeof mq>; // ...we have a responsive property included as an arg, then we return the responsive array of CSS properties.

function getBaseStyles({
	block,
	focusRingFor = 'keyboard',
	size,
	variant,
}: BaseStylesArgs) {
	return {
		appearance: 'none',
		boxSizing: 'border-box',
		position: 'relative',
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		fontFamily: tokens.font.body,
		margin: 0,

		...(block && {
			width: '100%',
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		// Ensure button icons do not shrink
		'& > svg': {
			flexShrink: 0,
		},

		...focusStylesMap[focusRingFor],
		...sizes[size],
		...variants[variant],
	} as const;
}

export function buttonStyles<T extends ResponsiveStylesArgs>({
	alignSelf,
	block,
	focusRingFor = 'keyboard',
	size,
	variant,
}: T): ButtonStyles<T> {
	const styles = getBaseStyles({ block, focusRingFor, size, variant });

	return (
		alignSelf
			? mq({
					alignSelf: mapResponsiveProp(alignSelf),
					...styles,
			  })
			: styles
	) as ButtonStyles<T>;
}
