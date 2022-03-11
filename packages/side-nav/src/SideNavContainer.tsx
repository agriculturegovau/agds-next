import type { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { variantMap, SideNavVariant } from './utils';

export type SideNavContainerProps = PropsWithChildren<{
	'aria-label': string;
	variant: SideNavVariant;
}>;

export const SideNavContainer = ({
	'aria-label': ariaLabel,
	children,
	variant,
}: SideNavContainerProps) => {
	const { palette, background } = variantMap[variant];
	return (
		<Box
			as="aside"
			aria-label={ariaLabel}
			palette={palette}
			background={background}
		>
			{children}
		</Box>
	);
};
