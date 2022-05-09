import React, { PropsWithChildren, ReactNode } from 'react';
import { Box, backgroundColorMap } from '@ag.ds-next/box';
import { boxPalette, packs } from '@ag.ds-next/core';

import { localPalette, localPaletteVars } from './utils';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.borderMuted,
		bottomBarActive: boxPalette.border,
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.border,
		bottomBarActive: boxPalette.border,
	},
	dark: {
		palette: 'dark',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.borderMuted,
		bottomBarActive: boxPalette.borderMuted,
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.border,
		bottomBarActive: boxPalette.border,
	},
} as const;

export type SecondaryNavContainerVariant = keyof typeof variantMap;

export type SecondaryNavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
	rightContent?: ReactNode;
	variant: SecondaryNavContainerVariant;
}>;

export function SecondaryNavContainer({
	id,
	'aria-label': ariaLabel,
	children,
	variant,
}: SecondaryNavContainerProps) {
	const { background, bottomBar, bottomBarActive, hover, palette } =
		variantMap[variant];
	return (
		<Box
			id={id}
			palette={palette}
			background={background}
			color="text"
			css={{
				position: 'relative',
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.linkActiveBg]: backgroundColorMap[background],
				[localPaletteVars.bottomBar]: bottomBar, // <-- special case
				[localPaletteVars.bottomBarActive]: bottomBarActive, // <-- special case
				...packs.print.hidden,
			}}
		>
			<BottomBar />
			<nav css={{ position: 'relative' }} aria-label={ariaLabel}>
				{children}
			</nav>
		</Box>
	);
}

function BottomBar() {
	return (
		<Box
			display={['none', 'block']}
			borderBottom
			borderBottomWidth="lg"
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				borderColor: localPalette.bottomBar,
			}}
		/>
	);
}
