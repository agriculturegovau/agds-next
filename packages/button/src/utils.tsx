import { outline, themeValues, tokens, mapSpacing } from '@ag.ds-next/core';

const variants = {
	primary: {
		background: themeValues.foreground.action,
		border: `3px solid ${themeValues.foreground.action}`,
		color: themeValues.background.page,
		textDecoration: 'none',

		'&:hover': {
			background: themeValues.foreground.text,
			border: `3px solid ${themeValues.foreground.text}`,
			color: themeValues.background.page,
			textDecoration: 'underline',
		},

		'&:focus': { ...outline },
	},
	secondary: {
		background: 'transparent',
		border: `3px solid ${themeValues.foreground.action}`,
		color: themeValues.foreground.action,
		textDecoration: 'none',

		'&:hover': {
			background: 'transparent',
			border: `3px solid ${themeValues.foreground.text}`,
			color: themeValues.foreground.text,
			textDecoration: 'underline',
		},

		'&:focus': { ...outline },
	},
	tertiary: {
		background: 'transparent',
		border: `3px solid transparent`,
		color: themeValues.foreground.action,
		textDecoration: 'underline',

		'&:hover': {
			background: 'transparent',
			border: `3px solid transparent`,
			color: themeValues.foreground.text,
			textDecoration: 'none',
		},

		'&:focus': { ...outline },
	},
};

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export function buttonStyles({
	block,
	disabled,
	variant = 'primary',
}: {
	block?: boolean;
	disabled?: boolean;
	variant?: ButtonVariant;
}) {
	return {
		...variants[variant],
		display: 'inline-block',
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		fontFamily: tokens.font.body,
		fontSize: `${tokens.fontSize.sm}rem`,
		lineHeight: 1.5,
		paddingTop: mapSpacing(0.5),
		paddingBottom: mapSpacing(0.5),
		paddingLeft: mapSpacing(1.5),
		paddingRight: mapSpacing(1.5),

		...(block && {
			display: 'block',
			width: '100%',
			boxSizing: 'border-box',
			textAlign: 'center',
		}),

		...(disabled && {
			cursor: 'not-allowed',
			opacity: 0.3,
			// reset hover and focus styles
			'&:hover': {},
			'&:focus': {},
		}),
	};
}
