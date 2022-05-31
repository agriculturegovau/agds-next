import { PropsWithChildren } from 'react';
import { Flex, Box, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { ContentSpacingContext } from './context';
import { paddingYMap } from './utils';

type SectionContentProps = PropsWithChildren<
	{
		as?: React.ElementType;
		className?: string;
	} & Pick<BoxProps, 'background' | 'palette'>
>;

export function SectionContent({
	as = 'section',
	className,
	palette,
	background,
	children,
}: SectionContentProps) {
	return (
		<ContentSpacingContext.Provider value={paddingYMap.section}>
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
					paddingTop={paddingYMap.section.top}
					paddingBottom={paddingYMap.section.bottom}
					paddingX={tokens.containerPadding}
				>
					{children}
				</Box>
			</Flex>
		</ContentSpacingContext.Provider>
	);
}
