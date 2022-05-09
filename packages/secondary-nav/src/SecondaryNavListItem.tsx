import {
	boxPalette,
	mapSpacing,
	mq,
	mapResponsiveProp,
	packs,
	tokens,
} from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';
import type { PropsWithChildren } from 'react';

import { localPalette } from './utils';

export type SecondaryNavListItemProps = PropsWithChildren<{
	active?: boolean;
}>;

export function SecondaryNavListItem({
	children,
	active,
}: SecondaryNavListItemProps) {
	return (
		<Box
			as="li"
			paddingBottom={{ lg: 0.25 }}
			borderBottom
			borderColor="muted"
			css={mq({
				borderBottom: mapResponsiveProp({ lg: 'none' }),

				' a': {
					position: 'relative',
					display: 'block',
					color: boxPalette[active ? 'foregroundText' : 'foregroundAction'],
					padding: mapSpacing(1),
					textDecoration: 'none',

					// Underline overlay for active menu item
					'&:after': {
						content: mapResponsiveProp({ xs: undefined, lg: '""' }),
						height: mapSpacing(0.25),
						position: 'absolute',
						top: '100%',
						left: 0,
						right: 0,
						backgroundColor: active
							? localPalette.bottomBarActive
							: 'transparent',
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
						...packs.underline,
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
