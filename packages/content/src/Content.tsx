import { PropsWithChildren } from 'react';
import { Flex, Box, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap, ContentSpacing } from './utils';

type BaseContentProps = PropsWithChildren<
	{
		as?: React.ElementType;
		id?: string;
		className?: string;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

type BaseContentComponentProps = BaseContentProps & {
	paddingY: ContentSpacing;
};

function BaseContent({
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

/**
 * Page Content
 */

export type PageContentProps = BaseContentProps;

export function PageContent({
	children,
	as = 'div',
	...props
}: PageContentProps) {
	return (
		<BaseContent as={as} {...props} paddingY="page">
			{children}
		</BaseContent>
	);
}

/**
 * Section Content
 */

export type SectionContentProps = BaseContentProps;

export function SectionContent({
	children,
	as = 'section',
	...props
}: SectionContentProps) {
	return (
		<BaseContent as={as} {...props} paddingY="section">
			{children}
		</BaseContent>
	);
}

/**
 * Content
 */

export type ContentProps = BaseContentProps;

export function Content({ children, as = 'div', ...props }: ContentProps) {
	return (
		<BaseContent as={as} {...props} paddingY="none">
			{children}
		</BaseContent>
	);
}
