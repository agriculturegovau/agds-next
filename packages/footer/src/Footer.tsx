import { Flex, Stack } from '@ag.ds-next/box';
import { tokens, globalPalette } from '@ag.ds-next/core';
import type { PropsWithChildren } from 'react';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
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
				borderColor: globalPalette.accent,

				li: {
					marginLeft: 0,
				},

				hr: {
					borderColor: globalPalette.accent,
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
