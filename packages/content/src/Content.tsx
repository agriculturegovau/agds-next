import { PropsWithChildren } from 'react';
import { Flex, Box, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap } from './utils';

type ContentProps = PropsWithChildren<
	{
		as?: React.ElementType;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

export function Content({
	as = 'div',
	palette,
	background,
	children,
}: ContentProps) {
	return (
		<ContentSpacingContext.Provider value={paddingYMap.none}>
			<Flex
				as={as}
				justifyContent="center"
				palette={palette}
				background={background}
				css={{ position: 'relative' }}
			>
				<Box
					width="100%"
					maxWidth={tokens.maxWidth.container}
					paddingTop={paddingYMap.none.top}
					paddingBottom={paddingYMap.none.bottom}
					paddingX={tokens.containerPadding}
				>
					{children}
				</Box>
			</Flex>
		</ContentSpacingContext.Provider>
	);
}
