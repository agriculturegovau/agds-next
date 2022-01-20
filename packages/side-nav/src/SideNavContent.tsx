import type { ReactNode } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';
import { themeVars, themeValues } from '@ag.ds-next/core';

import { localVars } from './utils';

export type SideNavVariantType = keyof typeof variantMap;

export type SideNavContentProps = BoxProps & {
	children: ReactNode;
	variant: SideNavVariantType;
};

export const SideNavContent = ({
	children,
	variant,
	...props
}: SideNavContentProps) => {
	const { theme, background, hover } = variantMap[variant];
	return (
		<Box
			as="nav"
			fontFamily="body"
			background={background}
			theme={theme}
			fontSize="sm"
			lineHeight="default"
			css={{
				'& > ul > li': {
					borderBottom: `1px solid ${themeVars.border}`,

					'&:last-of-type': {
						border: 'none',
					},
				},

				[localVars.linkHoverBg]: themeValues.background[hover],
				[localVars.linkActiveBg]: themeValues.background[background],
			}}
			{...props}
		>
			{children}
		</Box>
	);
};

const variantMap = {
	light: {
		theme: 'light',
		background: 'page',
		hover: 'shade',
	},
	lightAlt: {
		theme: 'light',
		background: 'pageAlt',
		hover: 'shadeAlt',
	},
	dark: {
		theme: 'dark',
		background: 'page',
		hover: 'shade',
	},
	darkAlt: {
		theme: 'dark',
		background: 'pageAlt',
		hover: 'shadeAlt',
	},
} as const;
