import { PropsWithChildren } from 'react';
import { Flex, Stack, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

type ContentProps = PropsWithChildren<{
	as?: React.ElementType;
	spacing?: ContentSpacing;
	palette?: BoxProps['palette'];
	background?: BoxProps['background'];
}>;

export function Content({
	as = 'section',
	spacing = 'sm',
	palette,
	background,
	children,
}: ContentProps) {
	return (
		<ContentSpacingContext.Provider value={spacing}>
			<Flex
				as={as}
				justifyContent="center"
				palette={palette}
				background={background}
			>
				<Stack
					width="100%"
					maxWidth={tokens.maxWidth.container}
					paddingY={paddingYMap[spacing]}
					paddingX={tokens.containerPadding}
					gap={1}
				>
					{children}
				</Stack>
			</Flex>
		</ContentSpacingContext.Provider>
	);
}
