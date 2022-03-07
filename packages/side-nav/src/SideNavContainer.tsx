import type { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { variantMap, SideNavVariant } from './utils';

export type SideNavContainerProps = PropsWithChildren<{
	variant: SideNavVariant;
	'aria-label': string;
}>;

export const SideNavContainer = ({
	children,
	variant,
	'aria-label': ariaLabel,
}: SideNavContainerProps) => {
	const { palette, background } = variantMap[variant];
	return (
		<Box
			as="aside"
			aria-label={ariaLabel}
			rounded
			background={background}
			palette={palette}
		>
			{children}
		</Box>
	);
};
