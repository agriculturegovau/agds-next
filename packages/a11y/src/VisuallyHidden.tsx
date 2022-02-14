import React, { ReactNode } from 'react';

export const VisuallyHidden = ({ children }: { children: ReactNode }) => (
	<span css={visuallyHiddenStyles}>{children}</span>
);

export const visuallyHiddenStyles = {
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: 1,
} as const;
