import { globalStyle, style } from '@vanilla-extract/css';

export const pre = style({
	background: 'var(--code-bg)',
	borderRadius: '3px',
	boxShadow: `0 0 0 1px var(--border)`,
	fontFamily: 'var(--font-mono)',
	fontSize: '0.875rem',
	maxWidth: '100%',
	overflow: 'auto',
	padding: 10,
	margin: '1rem 0',
});

globalStyle(`${pre} code`, {
	fontFamily: 'inherit',
});
