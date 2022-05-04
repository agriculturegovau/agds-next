import type { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '@ag.ds-next/box';
import { variantMap, SideNavVariant, localPaletteVars } from './utils';
import { mapResponsiveProp, mq, packs } from '@ag.ds-next/core';

export type SideNavContainerProps = PropsWithChildren<{
	'aria-label': string;
	variant: SideNavVariant;
}>;

export const SideNavContainer = ({
	'aria-label': ariaLabel,
	children,
	variant,
}: SideNavContainerProps) => {
	const { palette, background, hover } = variantMap[variant];
	return (
		<Box
			as="aside"
			aria-label={ariaLabel}
			palette={palette}
			background={background}
			css={mq({
				...packs.print.hidden,
				[localPaletteVars.hover]: mapResponsiveProp(
					hover,
					(t) => backgroundColorMap[t]
				),
			})}
		>
			{children}
		</Box>
	);
};
