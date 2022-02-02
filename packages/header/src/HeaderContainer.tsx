import { Flex } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import React from 'react';

const variantMap = {
	light: {
		theme: 'light',
		background: 'body',
	},
	lightAlt: {
		theme: 'light',
		background: 'bodyAlt',
	},
	dark: {
		theme: 'dark',
		background: 'body',
	},
	darkAlt: {
		theme: 'dark',
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
			theme={variantMap[variant].theme}
			background={variantMap[variant].background}
			color="text"
			paddingY={{ xs: 1, md: 3 }}
			justifyContent="center"
		>
			<Flex
				justifyContent="space-between"
				flexDirection={{ xs: 'column', md: 'row' }}
				alignItems={{ md: 'center' }}
				gap={1.5}
				maxWidth={tokens.maxWidth.container}
				paddingX={{ xs: 0.75, md: 2 }}
				width="100%"
			>
				{children}
			</Flex>
		</Flex>
	);
}
