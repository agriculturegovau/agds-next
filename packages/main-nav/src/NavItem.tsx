import {
	boxPalette,
	mapSpacing,
	mq,
	mapResponsiveProp,
	packs,
} from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';
import type { PropsWithChildren } from 'react';

import { localPalette } from './utils';

export type NavItemProps = PropsWithChildren<{
	active?: boolean;
}>;

export function NavItem({ children, active }: NavItemProps) {
	return (
		<Box
			as="li"
			paddingBottom={{ md: 0.5 }}
			fontFamily="body"
			fontSize="sm"
			lineHeight="default"
			css={mq({
				// TODO: may also need to support button element
				' a': {
					position: 'relative',
					display: 'block',
					color: boxPalette[active ? 'foregroundText' : 'foregroundAction'],
					padding: mapSpacing(1),
					textDecoration: 'none',

					fontWeight: mapResponsiveProp({
						xs: active ? 'bold' : undefined,
						md: 'normal',
					}),

					// Underline overlay for active menu item
					'&:after': {
						content: mapResponsiveProp({ xs: undefined, md: '""' }),
						height: mapSpacing(0.5),
						position: 'absolute',
						top: '100%',
						left: 0,
						right: 0,
						backgroundColor: active ? localPalette.linkActiveBg : 'transparent',
					},

					// Focus styles
					'&:focus': {
						outline: 'none',

						'&:before': {
							content: '""',
							position: 'absolute',
							zIndex: 100,
							top: 0,
							left: 0,
							height: '100%',
							width: '100%',
							...packs.outline,
						},
						'&::-moz-focus-inner': {
							border: 0,
						},
					},

					'&:hover': {
						textDecoration: 'underline',
						textDecorationSkipInk: 'auto',
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
						'&::after': {
							background: active ? localPalette.linkHoverBg : 'transparent',
						},
					},
				},
			})}
		>
			{children}
		</Box>
	);
}
