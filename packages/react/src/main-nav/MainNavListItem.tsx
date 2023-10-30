import type { PropsWithChildren } from 'react';
import { focusStyles } from '../box';
import { boxPalette, mapSpacing, packs } from '../core';
import { Flex } from '../flex';
import { localPalette } from './localPalette';

export type MainNavListItemProps = PropsWithChildren<{
	active: boolean;
	hasEndElement: boolean;
}>;

export function MainNavListItem({ active, children }: MainNavListItemProps) {
	return (
		<Flex
			as="li"
			fontSize={{ xs: 'xs', lg: 'sm' }}
			css={{
				' a, button': {
					boxSizing: 'border-box',
					position: 'relative',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: mapSpacing(0.5),
					color: boxPalette.foregroundAction,
					paddingLeft: mapSpacing(1),
					paddingRight: mapSpacing(1),
					textDecoration: 'none',

					// Underline overlay for active menu item
					...(active && {
						color: boxPalette.foregroundText,
						'&:after': {
							content: '""',
							height: mapSpacing(0.5),
							position: 'absolute',
							top: '100%',
							left: 0,
							right: 0,
							backgroundColor: localPalette.linkActiveBg,
						},
					}),

					// Focus styles
					...focusStyles,
					'&:focus-visible': {
						...focusStyles[':focus-visible'],
						// Make sure the outline is not cut off by the pseudo element
						zIndex: 1,
						'&:after': { zIndex: -1 },
					},

					// Hover styles
					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,

						'& > span:first-of-type': packs.underline,

						'&::after': {
							background: localPalette.linkHoverBg,
						},
					},
				},
			}}
		>
			{children}
		</Flex>
	);
}
