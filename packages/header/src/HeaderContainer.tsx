import { PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { Columns } from '@ag.ds-next/columns';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
	},
} as const;

const paddingMap = {
	small: { xs: 1, md: 1 },
	medium: { xs: 1, md: 3 },
} as const;

type HeaderContainerProps = PropsWithChildren<{
	variant: keyof typeof variantMap;
	size: 'small' | 'medium';
}>;

export function HeaderContainer({
	variant,
	size,
	children,
}: HeaderContainerProps) {
	return (
		<Flex
			as="header"
			palette={variantMap[variant].palette}
			background={variantMap[variant].background}
			color="text"
			paddingY={paddingMap[size]}
			justifyContent="center"
		>
			<Box
				maxWidth={tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				<Columns alignItems="center">{children}</Columns>
			</Box>
		</Flex>
	);
}
