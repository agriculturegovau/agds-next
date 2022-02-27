import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SkipLinkContainerProps = DetailedHTMLProps<
	HTMLAttributes<HTMLElement>,
	HTMLElement
>;

export const SkipLinkContainer = ({
	children,
	...props
}: SkipLinkContainerProps) => (
	<nav aria-label="skip links navigation" {...props}>
		{children}
	</nav>
);
