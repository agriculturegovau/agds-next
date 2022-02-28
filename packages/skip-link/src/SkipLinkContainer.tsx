import { HTMLAttributes } from 'react';

export type SkipLinkContainerProps = HTMLAttributes<HTMLElement>;

export const SkipLinkContainer = ({
	children,
	...props
}: SkipLinkContainerProps) => (
	<nav aria-label="Skip links" {...props}>
		{children}
	</nav>
);
