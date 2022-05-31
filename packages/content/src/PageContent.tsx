import { PropsWithChildren } from 'react';
import { Flex, Box, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap } from './utils';

type PageContentProps = PropsWithChildren<
	{
		as?: React.ElementType;
		className?: string;
		id?: string;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

export function PageContent({
	as = 'div',
	id,
	className,
	palette,
	background,
	children,
}: PageContentProps) {
	return (
		<ContentSpacingContext.Provider value={paddingYMap.page}>
			<Flex
				as={as}
				id={id}
				justifyContent="center"
				palette={palette}
				background={background}
				className={className}
			>
				<Box
					width="100%"
					maxWidth={tokens.maxWidth.container}
					paddingTop={paddingYMap.page.top}
					paddingBottom={paddingYMap.page.bottom}
					paddingX={tokens.containerPadding}
				>
					{children}
				</Box>
			</Flex>
		</ContentSpacingContext.Provider>
	);
}
