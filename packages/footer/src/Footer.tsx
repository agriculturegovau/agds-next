import type { PropsWithChildren } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { tokens, boxPalette } from '@ag.ds-next/core';
import { localPaletteVars } from './localPalette';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		border: boxPalette.accent,
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		border: boxPalette.accent,
	},
	dark: {
		palette: 'dark',
		background: 'body',
		border: boxPalette.accent,
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		border: boxPalette.accent,
	},
	agriculture: {
		palette: 'dark',
		background: 'bodyAlt',
		border: boxPalette.accent,
	},
} as const;

type FooterProps = PropsWithChildren<{
	variant?: keyof typeof variantMap;
}>;

export const Footer = ({ variant = 'agriculture', children }: FooterProps) => {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background={variantMap[variant].background}
			color="text"
			palette={variantMap[variant].palette}
			paddingY={3}
			borderTop
			borderTopWidth="xl"
			css={{
				borderColor: variantMap[variant].border,
				[localPaletteVars.border]: variantMap[variant].border,

				li: { marginLeft: 0 },
			}}
		>
			<Stack
				maxWidth={tokens.maxWidth.container}
				width="100%"
				gap={1.5}
				paddingX={tokens.containerPadding}
			>
				{children}
			</Stack>
		</Flex>
	);
};
