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
	containerWidth: 'container' | 'containerXL';
	size: keyof typeof paddingMap;
}>;

export function HeaderContainer({
	background,
	children,
	containerWidth,
	size,
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
				maxWidth={tokens.maxWidth[containerWidth] || tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				<Columns alignItems="center">{children}</Columns>
			</Box>
		</Flex>
	);
}
