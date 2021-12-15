import { Flex, Divider, BoxProps, Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import type { PropsWithChildren } from 'react';

type FooterProps = PropsWithChildren<{ theme?: BoxProps['theme'] }>;

export const Footer = ({ theme = 'dark', children }: FooterProps) => {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background="page"
			color="text"
			theme={theme}
		>
			<Stack
				maxWidth={tokens.maxWidth.container}
				width="100%"
				gap={1}
				paddingX={tokens.gutter}
				paddingY={{ xs: 1, md: 2 }}
			>
				{children}
				<Divider accent />
				<span>&copy; Commonwealth of Australia</span>
			</Stack>
		</Flex>
	);
};
