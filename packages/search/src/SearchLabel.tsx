import type { ReactNode } from 'react';

export type SearchLabelprops = {
	children: ReactNode;
	htmlFor: string;
};

export const SearchLabel = ({ children, htmlFor }: SearchLabelprops) => (
	<label css={visuallyHiddenStyles} htmlFor={htmlFor}>
		{children}
	</label>
);

// Content that should be read out
// to screenreaders only
const visuallyHiddenStyles = {
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: 1,
} as const;
