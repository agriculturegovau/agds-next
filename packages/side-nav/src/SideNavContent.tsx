import type { ReactNode } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';
import { tokens, themeVars } from '@ag.ds-next/core';

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
	return (
		<Box
			as="nav"
			fontFamily="body"
			background={variantMap[variant].background}
			theme={variantMap[variant].theme}
			fontSize="sm"
			lineHeight="default"
			paddingLeft={{ xs: 1, md: 0 }}
			paddingRight={{ xs: 1, md: 0 }}
			css={{
				overflow: 'hidden',

				'& > ul > li': {
					borderBottom: `1px solid ${themeVars.border}`,

					'&:last-of-type': {
						border: 'none',
					},
				},

				// Desktop styles
				[tokens.mediaQuery.min.md]: {
					overflow: 'visible',

					// Open the menu on desktop
					'.au-accordion__body.au-accordion--closed': {
						display: 'block',
						height: 'auto',
					},
				},
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
