import { PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { Columns } from '@ag.ds-next/columns';

const paddingMap = {
	sm: { xs: 1, md: 1 },
	md: { xs: 1, md: 3 },
} as const;

type HeaderContainerProps = PropsWithChildren<{
	background: 'body' | 'bodyAlt';
	size: keyof typeof paddingMap;
}>;

export function HeaderContainer({
	background,
	size,
	children,
}: HeaderContainerProps) {
	return (
		<Flex
			as="header"
			background={background}
			color="text"
			paddingY={paddingMap[size]}
			justifyContent="center"
		>
			<Box
				maxWidth={tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				<Columns alignItems="center">{children}</Columns>
			</Box>
		</Flex>
	);
}
