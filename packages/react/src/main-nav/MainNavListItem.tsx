import type { PropsWithChildren } from 'react';
import { focusStyles } from '../box';
import { boxPalette, mapSpacing, mapResponsiveProp, packs, mq } from '../core';
import { Flex } from '../flex';
import { localPalette } from './localPalette';

export type MainNavListItemProps = PropsWithChildren<{
	active: boolean;
	type: 'primary' | 'secondary';
}>;

export function MainNavListItem({
	active,
	children,
	type,
}: MainNavListItemProps) {
	return (
		<Flex
			as="li"
			fontSize={{ xs: 'xs', lg: 'sm' }}
			css={mq({
				' > a, > button': {
					boxSizing: 'border-box',
					position: 'relative',
					display: 'flex',
					flexDirection:
						type === 'primary'
							? 'row'
							: mapResponsiveProp({
									xs: 'column-reverse',
									lg: 'row',
							  }),
					alignItems: 'center',
					justifyContent: 'center',
					gap: mapSpacing(0.5),
					paddingLeft: mapSpacing(1),
					paddingRight: mapSpacing(1),
					color: boxPalette.foregroundAction,
					textDecoration: 'none',

					// Active styles
					...(active && {
						color: boxPalette.foregroundText,
						'&::after': {
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
						'&::after': { zIndex: -1 },
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
			})}
		>
			{children}
		</Flex>
	);
}
