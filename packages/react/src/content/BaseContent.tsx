import { PropsWithChildren, ElementType } from 'react';
import { Flex, Box, BoxProps } from '../box';
import { tokens } from '../core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

export type BaseContentProps = PropsWithChildren<
	{
		as?: ElementType;
		className?: string;
		/** The maximum width of the container. */
		containerWidth?: 'container' | 'containerXL';
		id?: string;
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
	containerWidth = 'container',
	id,
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
					width="100%"
					maxWidth={
						tokens.maxWidth[containerWidth] || tokens.maxWidth.container
					}
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
