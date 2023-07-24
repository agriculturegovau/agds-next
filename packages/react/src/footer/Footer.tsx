import type { PropsWithChildren } from 'react';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { tokens } from '../core';

export type FooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const Footer = ({ background = 'body', children }: FooterProps) => {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background={background}
			color="text"
			paddingY={3}
			borderTop
			borderTopWidth="xl"
			borderColor="accent"
			css={{
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
