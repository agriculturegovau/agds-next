import { PropsWithChildren } from 'react';
import { Flex, Box, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

export type BaseContentProps = PropsWithChildren<
	{
		as?: React.ElementType;
		id?: string;
		className?: string;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

type BaseContentComponentProps = BaseContentProps & {
	paddingY: ContentSpacing;
};

export function BaseContent({
	as = 'section',
	className,
	palette,
	background,
	children,
	paddingY,
}: BaseContentComponentProps) {
	return (
		<ContentSpacingContext.Provider value={paddingY}>
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
					paddingTop={paddingYMap[paddingY].top}
					paddingBottom={paddingYMap[paddingY].bottom}
					paddingX={tokens.containerPadding}
				>
					{children}
				</Box>
			</Flex>
		</ContentSpacingContext.Provider>
	);
}
