import { Flex, Divider, BoxProps, Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import type { PropsWithChildren } from 'react';

type FooterProps = PropsWithChildren<{
	variant?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
}>;

export const Footer = ({ variant = 'dark', children }: FooterProps) => {
	return (
		<FooterContainer variant={variant}>
			{children}
			<Divider />
			<span>&copy; Commmonwealth of Australia</span>
		</FooterContainer>
	);
};

export function FooterContainer({ children, variant = 'dark' }: FooterProps) {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background={variantMap[variant].background}
			color="text"
			theme={variantMap[variant].theme}
		>
			<Stack
				maxWidth={tokens.maxWidth.container}
				width="100%"
				gap={1}
				paddingX={tokens.gutter}
				paddingY={{ xs: 1, md: 2 }}
			>
				{children}
			</Stack>
		</Flex>
	);
}

const variantMap = {
	light: {
		theme: 'light',
		background: 'page',
	},
	lightAlt: {
		theme: 'light',
		background: 'pageAlt',
	},
	dark: {
		theme: 'dark',
		background: 'page',
	},
	darkAlt: {
		theme: 'dark',
		background: 'pageAlt',
	},
} as const;
