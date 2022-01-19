import { themeValues, outline } from '@ag.ds-next/core';
import { HTMLProps } from 'react';

export function textLinkStyles() {
	return {
		color: themeValues.foreground.action,
		textDecoration: 'underline',

		'&:hover': {
			color: themeValues.foreground.action,
			textDecoration: 'none',
		},

		'&:focus': outline,
	};
}

type TextLinkProps = HTMLProps<HTMLAnchorElement>;

export const TextLink = (props: TextLinkProps) => {
	const styles = textLinkStyles();
	return <a css={styles} {...props} />;
};
