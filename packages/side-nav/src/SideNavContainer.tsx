import type { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

import { localPaletteVars } from './utils';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		hover: 'shade',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
		hover: 'shade',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
	},
} as const;

export type SideNavContainerProps = PropsWithChildren<{
	variant: keyof typeof variantMap;
}>;

export const SideNavContainer = ({
	children,
	variant,
	...props
}: SideNavContainerProps) => {
	const { palette, background, hover } = variantMap[variant];
	return (
		<Box
			as="nav"
			fontFamily="body"
			background={background}
			palette={palette}
			fontSize="sm"
			lineHeight="default"
			css={{
				[localPaletteVars.linkHoverBg]: boxPalette.background[hover],
				[localPaletteVars.linkActiveBg]: boxPalette.background[background],
			}}
			{...props}
		>
			{children}
		</Box>
	);
};
