import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { tokens } from '../core';
import { Columns } from '../columns';

const paddingMap = {
	sm: { xs: 1.5, md: 1 },
	md: { xs: 1.5, md: 3 },
} as const;

type HeaderContainerProps = PropsWithChildren<{
	background: 'body' | 'bodyAlt';
	maxWidth: 'container' | 'containerLg';
	size: keyof typeof paddingMap;
}>;

export function HeaderContainer({
	background,
	children,
	maxWidth,
	size,
}: HeaderContainerProps) {
	return (
		<Flex
			as="header"
			background={background}
			color="text"
			justifyContent="center"
			paddingY={paddingMap[size]}
		>
			<Box
				maxWidth={tokens.maxWidth[maxWidth] || tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				<Columns alignItems="center">{children}</Columns>
			</Box>
		</Flex>
	);
}
