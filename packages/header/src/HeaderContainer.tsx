import { Flex } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { Columns } from '@ag.ds-next/columns';
import React from 'react';

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

type HeaderContainerProps = React.PropsWithChildren<{
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
			<Columns
				alignItems="center"
				maxWidth={tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				{children}
			</Columns>
		</Flex>
	);
}
