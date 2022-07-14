import type { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '@ag.ds-next/box';
import { mapResponsiveProp, mq, packs } from '@ag.ds-next/core';
import { hoverColorMap, SideNavBackground, localPaletteVars } from './utils';

export type SideNavContainerProps = PropsWithChildren<{
	'aria-label': string;
	background: SideNavBackground;
}>;

export const SideNavContainer = ({
	'aria-label': ariaLabel,
	children,
	background,
}: SideNavContainerProps) => {
	const hover = hoverColorMap[background];
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
