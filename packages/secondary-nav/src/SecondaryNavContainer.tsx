import { backgroundColorMap, Box } from '@ag.ds-next/box';
import { boxPalette, packs } from '@ag.ds-next/core';
import React, { PropsWithChildren } from 'react';
import { localPalette, localPaletteVars } from './utils';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.backgroundBodyAlt,
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.backgroundBodyAlt,
	},
	dark: {
		palette: 'dark',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.backgroundBodyAlt,
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.backgroundBodyAlt,
	},
} as const;

export type SecondaryNavContainerVariant = keyof typeof variantMap;

export type SecondaryNavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
	variant: SecondaryNavContainerVariant;
}>;

export function SecondaryNavContainer({
	id,
	'aria-label': ariaLabel,
	children,
	variant,
}: SecondaryNavContainerProps) {
	const { palette, bottomBar, background, hover } = variantMap[variant];
	return (
		<Box
			as="nav"
			palette={palette}
			background={background}
			id={id}
			aria-label={ariaLabel}
			css={{
				position: 'relative',
				overflowX: 'auto',
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.bottomBar]: bottomBar,
				...packs.print.hidden,
			}}
		>
			{children}
			<BottomBar />
		</Box>
	);
}

function BottomBar() {
	return (
		<Box
			display={['none', 'block']}
			paddingTop={0.5}
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				width: '100%',
				backgroundColor: localPalette.bottomBar,
			}}
		/>
	);
}
