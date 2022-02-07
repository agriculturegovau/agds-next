import { Flex, Stack } from '@ag.ds-next/box';
import { tokens, globalPalette, boxPalette } from '@ag.ds-next/core';
import type { PropsWithChildren } from 'react';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		border: boxPalette.foreground.action,
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		border: boxPalette.foreground.action,
	},
	dark: {
		palette: 'dark',
		background: 'body',
		border: boxPalette.foreground.action,
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		border: boxPalette.foreground.action,
	},
	agriculture: {
		palette: 'dark',
		background: 'body',
		border: globalPalette.accent,
	},
} as const;

type FooterProps = PropsWithChildren<{
	variant?: keyof typeof variantMap;
}>;

export const Footer = ({ variant = 'dark', children }: FooterProps) => {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background={variantMap[variant].background}
			color="text"
			palette={variantMap[variant].palette}
			paddingY={3}
			css={{
				borderTop: '4px solid',
				borderColor: variantMap[variant].border,

				li: {
					marginLeft: 0,
				},

				hr: {
					borderColor: variantMap[variant].border,
				},
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
