import type { PropsWithChildren } from 'react';
import {
	boxPalette,
	mapSpacing,
	mq,
	mapResponsiveProp,
	packs,
	tokens,
} from '../core';
import { Flex } from '../flex';
import { localPalette } from './utils';

export type SubNavListItemProps = PropsWithChildren<{
	active?: boolean;
}>;

export function SubNavListItem({ children, active }: SubNavListItemProps) {
	return (
		<Flex
			as="li"
			borderBottom
			css={mq({
				borderBottomColor: mapResponsiveProp([
					boxPalette.borderMuted,
					active ? boxPalette.foregroundSelected : boxPalette.borderMuted,
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
					flex: 1,
					display: mapResponsiveProp(['flex', 'inline-flex']),
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: mapSpacing(0.5),
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
							inset: 0,
							...packs.outline,
						},
						'&::-moz-focus-inner': {
							border: 0,
						},
					},

					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
						// Underline the label
						'& > span:first-of-type': packs.underline,
					},
				},
			})}
		>
			{children}
		</Flex>
	);
}
