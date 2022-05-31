import { PropsWithChildren } from 'react';
import { Flex, Box, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

type ContentProps = PropsWithChildren<
	{
		as?: React.ElementType;
		spacing?: ContentSpacing;
		className?: string;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

export function Content({
	as = 'section',
	spacing = 'none',
	className,
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
				className={className}
			>
				<Box
					width="100%"
					maxWidth={tokens.maxWidth.container}
					paddingTop={paddingYMap[spacing].top}
					paddingBottom={paddingYMap[spacing].bottom}
					paddingX={tokens.containerPadding}
				>
					{children}
				</Box>
			</Flex>
		</ContentSpacingContext.Provider>
	);
}
