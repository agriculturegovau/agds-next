import { style } from '@vanilla-extract/css';

export const header = style({
	borderTop: '1px dashed var(--border)',
});

export const headerInner = style({
	padding: '0.5rem 1rem',
	textAlign: 'right',
});
