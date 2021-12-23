import React from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { globalVars, themeVars } from '@ag.ds-next/core';

const variantMap = {
	light: {
		theme: 'light',
		background: 'page',
		linkHoverBg: 'pageAlt',
	},
	lightAlt: {
		theme: 'light',
		background: 'shade',
	},
	dark: {
		theme: 'dark',
		background: 'page',
	},
	darkAlt: {
		theme: 'dark',
		background: 'shade',
	},
} as const;

export const localVars = {
	linkHoverBg: '--nav-linkHoverBg',
	linkHoverBorder: '--nav-linkHoverBorder',
	linkActiveBorder: '--nav-linkActiveBorder',
};

export type MainNavContainerProps = React.PropsWithChildren<{
	variant: keyof typeof variantMap;
}>;

export function MainNavContainer({ variant, children }: MainNavContainerProps) {
	return (
		<Box
			theme={variantMap[variant].theme}
			background={variantMap[variant].background}
			color="text"
			css={{
				position: 'relative',
				[localVars.linkHoverBg]: themeVars.background.shadeAlt,
				[localVars.linkHoverBorder]: themeVars.background.page,
				[localVars.linkActiveBorder]: themeVars.background.page,
			}}
		>
			<Flex as="nav" justifyContent="center">
				<Flex
					justifyContent="space-between"
					maxWidth={1280}
					width="100%"
					paddingX={{ xs: 1, md: 2 }}
				>
					{children}
				</Flex>
			</Flex>
			<Box
				theme="dark"
				paddingTop={0.5}
				css={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					backgroundColor: globalVars.accent,
				}}
			/>
		</Box>
	);
}
