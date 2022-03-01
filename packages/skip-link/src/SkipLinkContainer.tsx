import { PropsWithChildren } from 'react';

export type SkipLinkContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const SkipLinkContainer = ({
	children,
	'aria-label': ariaLabel,
}: SkipLinkContainerProps) => <nav aria-label={ariaLabel}>{children}</nav>;
