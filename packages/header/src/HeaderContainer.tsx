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

type HeaderContainerProps = PropsWithChildren<{
	variant: keyof typeof variantMap;
}>;

export function HeaderContainer({ variant, children }: HeaderContainerProps) {
	return (
		<Flex
			as="header"
			palette={variantMap[variant].palette}
			background={variantMap[variant].background}
			color="text"
			paddingY={{ xs: 1, md: 3 }}
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
