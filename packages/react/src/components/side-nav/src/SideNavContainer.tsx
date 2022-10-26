import type { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '../../box/src';
import { mapResponsiveProp, mq, packs } from '../../core/src';
import { hoverColorMap, SideNavBackground, localPaletteVars } from './utils';

export type SideNavContainerProps = PropsWithChildren<{
	background: SideNavBackground;
}>;

export const SideNavContainer = ({
	children,
	background,
}: SideNavContainerProps) => {
	const hover = hoverColorMap[background];
	return (
		<Box
			as="aside"
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
