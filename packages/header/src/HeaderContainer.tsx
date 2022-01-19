import { Flex } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import React from 'react';

const variantMap = {
	light: {
		theme: 'light',
		background: 'page',
	},
	lightAlt: {
		theme: 'light',
		background: 'pageAlt',
	},
	dark: {
		theme: 'dark',
		background: 'page',
	},
	darkAlt: {
		theme: 'dark',
		background: 'pageAlt',
	},
} as const;

type HeaderContainerProps = React.PropsWithChildren<{
	variant: keyof typeof variantMap;
}>;

export function HeaderContainer({ variant, children }: HeaderContainerProps) {
	return (
		<Flex
			as="header"
			theme={variantMap[variant].theme}
			background={variantMap[variant].background}
			color="text"
			paddingY={{ xs: 1, md: 3 }}
			paddingX={{ xs: 1, md: 2 }}
			justifyContent="center"
		>
			<Flex
				justifyContent="flex-start"
				maxWidth={tokens.maxWidth.container}
				width="100%"
			>
				{children}
			</Flex>
		</Flex>
	);
}
