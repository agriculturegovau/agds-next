import { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '@ag.ds-next/react/box';
import { mapResponsiveProp, mq } from '@ag.ds-next/react/core';
import {
	hoverColorMap,
	SideBarBackground,
	sideBarLocalPaletteVars,
} from './utils';

/** The HTML element to render the SideBar as. */
export type SideBarContainerElementType = 'aside' | 'nav' | 'section' | 'div';

type SideBarContainerProps = PropsWithChildren<{
	as: SideBarContainerElementType;
	background: SideBarBackground;
}>;

export const SideBarContainer = ({
	as,
	background,
	children,
}: SideBarContainerProps) => {
	const hoverColor = hoverColorMap[background];
	return (
		<Box
			as={as}
			background={background}
			css={mq({
				[sideBarLocalPaletteVars.hover]: mapResponsiveProp(
					hoverColor,
					(t) => backgroundColorMap[t]
				),
			})}
		>
			{children}
		</Box>
	);
};
