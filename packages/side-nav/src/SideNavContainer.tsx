import type { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '@ag.ds-next/box';
import { mapResponsiveProp, mq, packs } from '@ag.ds-next/core';
import { variantMap, SideNavVariant, localPaletteVars } from './utils';

export type SideNavContainerProps = PropsWithChildren<{
	'aria-label': string;
	variant: SideNavVariant;
}>;

export const SideNavContainer = ({
	'aria-label': ariaLabel,
	children,
	variant,
}: SideNavContainerProps) => {
	const { background, hover } = variantMap[variant];
	return (
		<Box
			as="aside"
			aria-label={ariaLabel}
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
