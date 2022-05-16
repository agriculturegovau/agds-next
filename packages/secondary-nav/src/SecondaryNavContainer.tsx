import { backgroundColorMap, Box } from '@ag.ds-next/box';
import { boxPalette, packs } from '@ag.ds-next/core';
import React, { PropsWithChildren } from 'react';
import { localPaletteVars } from './utils';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.foregroundAction,
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.foregroundAction,
	},
	dark: {
		palette: 'dark',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.foregroundAction,
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.foregroundAction,
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
	const { palette, background, bottomBar, hover } = variantMap[variant];
	return (
		<Box
			as="nav"
			palette={palette}
			background={background}
			id={id}
			aria-label={ariaLabel}
			css={{
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.bottomBar]: bottomBar, // <-- special case
				...packs.print.hidden,
			}}
		>
			{children}
		</Box>
	);
}
