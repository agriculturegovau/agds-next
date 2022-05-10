import React, { PropsWithChildren } from 'react';

export type SecondaryNavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
}>;

export function SecondaryNavContainer({
	id,
	'aria-label': ariaLabel,
	children,
}: SecondaryNavContainerProps) {
	return (
		<nav id={id} aria-label={ariaLabel}>
			{children}
		</nav>
	);
}
