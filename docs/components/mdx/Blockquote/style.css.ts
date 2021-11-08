import { style, globalStyle } from '@vanilla-extract/css';

export const blockquote = style({
	borderLeft: '5px solid var(--focus)',
	margin: 0,
	paddingLeft: '2rem',
});

globalStyle(`${blockquote} p`, {
	fontSize: 'inherit',
	maxWidth: 'inherit',
	lineHeight: 'inherit',
	fontWeight: 'inherit',
	color: 'inherit',
	fontFamily: 'inherit',
});
