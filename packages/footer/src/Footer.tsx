import { Flex, Divider, Box, Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import type { PropsWithChildren } from 'react';

type FooterProps = PropsWithChildren<{ theme: string }>;

export const Footer = ({ theme, children }: FooterProps) => {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background="page"
			color="text"
			theme="dark"
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

/*
const Exp_Content = ({
	spacing = 'small',
	theme,
	background,
	children,
}: React.PropsWithChildren<ContentProps>) => {
	// changes at breakpoints
	const paddingY = (
		{
			small: { xs: 1, md: 2 },
			medium: { xs: 1, md: 3 },
			large: { xs: 1, md: 4 },
		} as const
	)[spacing];

	return (
		<Flex
			as="section"
			justifyContent="center"
			theme={theme}
			background={background}
		>
			<Stack
				width="100%"
				maxWidth={1280}
				paddingY={paddingY}
				paddingX={2}
				gap={1}
			>
				{children}
			</Stack>
		</Flex>
	);
};
*/
