import type { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '../box';
import { mapResponsiveProp, mq, packs } from '../core';
import { activeColorMap, SideNavBackground, localPaletteVars } from './utils';

export type SideNavContainerProps = PropsWithChildren<{
	background: SideNavBackground;
}>;

export const SideNavContainer = ({
	children,
	background,
}: SideNavContainerProps) => {
	const activeColor = activeColorMap[background];
	return (
		<Box
			as="aside"
			background={background}
			css={mq({
				...packs.print.hidden,
				[localPaletteVars.hover]: mapResponsiveProp(
					activeColor,
					(t) => backgroundColorMap[t]
				),
			})}
		>
			{children}
		</Box>
	);
};
