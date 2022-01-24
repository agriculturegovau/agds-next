import { outline, themeValues, tokens, mapSpacing } from '@ag.ds-next/core';
import { getContrastColor as hexAlly } from 'hex-a11y';

function getContrastColor(bg: string) {
	return hexAlly(bg, {
		dark: themeValues.background.page,
		light: 'white',
	});
}

const weights = {
	primary: {
		background: themeValues.foreground.action,
		border: `3px solid ${themeValues.foreground.action}`,
		color: getContrastColor(themeValues.foreground.action),

		'&:enabled:hover': {
			background: themeValues.foreground.text,
			border: `3px solid ${themeValues.foreground.text}`,
			color: getContrastColor(themeValues.foreground.text),
			textDecoration: 'underline',
		},

		'&:focus': { ...outline },
	},
	secondary: {
		background: 'transparent',
		border: `3px solid ${themeValues.foreground.action}`,
		color: themeValues.foreground.action,

		'&:enabled:hover': {
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

		'&:enabled:hover': {
			background: 'transparent',
			border: `3px solid transparent`,
			color: themeValues.foreground.text,
			textDecoration: 'underline',
		},

		'&:focus': { ...outline },
	},
};

export type ButtonWeight = 'primary' | 'secondary' | 'tertiary';

export const useButtonStyles = ({
	block,
	disabled,
	weight = 'primary',
}: {
	block?: boolean;
	disabled?: boolean;
	weight?: ButtonWeight;
}) => {
	return {
		...weights[weight],
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
		}),
	};
};
