import type { PropsWithChildren } from 'react';
import {
	boxPalette,
	mapSpacing,
	mq,
	mapResponsiveProp,
	packs,
	tokens,
} from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';
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
			borderBottom
			css={mq({
				borderBottomColor: mapResponsiveProp([
					boxPalette.borderMuted,
					active ? boxPalette.foregroundAction : localPalette.bottomBar,
				]),
				borderBottomWidth: mapResponsiveProp([
					tokens.borderWidth.sm,
					mapSpacing(0.5),
				]),

				'&:first-of-type': {
					borderTopWidth: mapResponsiveProp([tokens.borderWidth.sm, 0]),
					borderTopStyle: 'solid',
					borderTopColor: boxPalette.borderMuted,
				},

				'& a': {
					display: mapResponsiveProp(['block', 'inline-block']),
					position: 'relative',
					color: active
						? boxPalette.foregroundText
						: boxPalette.foregroundAction,
					padding: mapSpacing(1),
					textDecoration: 'none',
					borderLeftStyle: 'solid',
					borderLeftWidth: mapResponsiveProp([tokens.borderWidth.xl, 0]),
					borderLeftColor: active ? boxPalette.foregroundAction : 'transparent',

					// Underline overlay for active menu item
					'&:after': {
						content: mapResponsiveProp({ xs: undefined, lg: '""' }),
						height: mapSpacing(0.5),
						position: 'absolute',
						top: '100%',
						left: 0,
						right: 0,
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
					},
				},
			})}
		>
			{children}
		</Box>
	);
}
