import { PropsWithChildren, ElementType } from 'react';
import { Flex, Box, BoxProps } from '../box';
import { tokens } from '../core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

export type BaseContentProps = PropsWithChildren<
	{
		as?: ElementType;
		id?: string;
		className?: string;
		tabIndex?: number;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

type BaseContentComponentProps = BaseContentProps & {
	paddingY: ContentSpacing;
};

export function BaseContent({
	as = 'section',
	id,
	className,
	tabIndex,
	palette,
	background,
	children,
	paddingY,
}: BaseContentComponentProps) {
	return (
		<ContentSpacingContext.Provider value={paddingY}>
			<Flex
				as={as}
				background={background}
				className={className}
				id={id}
				justifyContent="center"
				palette={palette}
				tabIndex={tabIndex}
			>
				<Box
					maxWidth={tokens.maxWidth.container}
					paddingBottom={paddingYMap[paddingY].bottom}
					paddingTop={paddingYMap[paddingY].top}
					paddingX={tokens.containerPadding}
					width="100%"
				>
					{children}
				</Box>
			</Flex>
		</ContentSpacingContext.Provider>
	);
}
