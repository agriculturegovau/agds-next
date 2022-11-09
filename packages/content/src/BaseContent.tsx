import { PropsWithChildren, ElementType } from 'react';
import { Flex, Box, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

export type BaseContentProps = PropsWithChildren<
	{
		as?: ElementType;
		id?: string;
		className?: string;
		tabIndex?: number;
	} & Pick<BoxProps, 'background' | 'palette' | 'focus'>
>;

type BaseContentComponentProps = BaseContentProps & {
	paddingY: ContentSpacing;
};

export function BaseContent({
	as = 'section',
	id,
	className,
	palette,
	background,
	children,
	paddingY,
	tabIndex,
	focus,
}: BaseContentComponentProps) {
	return (
		<ContentSpacingContext.Provider value={paddingY}>
			<Flex justifyContent="center" palette={palette} background={background}>
				<Box
					as={as}
					id={id}
					className={className}
					tabIndex={tabIndex}
					focus={focus}
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
