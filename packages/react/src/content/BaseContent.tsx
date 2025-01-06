import { PropsWithChildren, ElementType } from 'react';
import { Flex, Box, BoxProps } from '../box';
import { tokens } from '../core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

export type BaseContentProps = PropsWithChildren<
	{
		as?: ElementType;
		className?: string;
		id?: string;
		/** The maximum width of the container. */
		maxWidth?: 'container' | 'containerXL';
		tabIndex?: number;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

type BaseContentComponentProps = BaseContentProps & {
	paddingY: ContentSpacing;
};

export function BaseContent({
	as = 'section',
	background,
	children,
	className,
	id,
	maxWidth = 'container',
	paddingY,
	palette,
	tabIndex,
}: BaseContentComponentProps) {
	return (
		<ContentSpacingContext.Provider value={paddingY}>
			<Flex
				as={as}
				justifyContent="center"
				palette={palette}
				background={background}
				id={id}
				className={className}
				tabIndex={tabIndex}
			>
				<Box
					maxWidth={tokens.maxWidth[maxWidth] || tokens.maxWidth.container}
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
