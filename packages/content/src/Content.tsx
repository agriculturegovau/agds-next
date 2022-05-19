import { PropsWithChildren } from 'react';
import { Flex, Stack, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';

type ContentProps = PropsWithChildren<{
	as?: React.ElementType;
	palette?: BoxProps['palette'];
	background?: BoxProps['background'];
}>;

export const contentPaddingY = { xs: 2, md: 3, lg: 4 } as const;

export function Content({
	as = 'section',
	palette,
	background,
	children,
}: ContentProps) {
	return (
		<Flex
			as={as}
			justifyContent="center"
			palette={palette}
			background={background}
		>
			<Stack
				width="100%"
				maxWidth={tokens.maxWidth.container}
				paddingY={contentPaddingY}
				paddingX={tokens.containerPadding}
				gap={1}
			>
				{children}
			</Stack>
		</Flex>
	);
}
