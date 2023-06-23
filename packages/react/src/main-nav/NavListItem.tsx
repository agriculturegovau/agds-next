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

type NavListType = 'primary' | 'secondary';

export type NavItemProps = PropsWithChildren<{
	active: boolean;
	hasEndElement: boolean;
	type: NavListType;
}>;

export function NavListItem({
	active,
	children,
	hasEndElement,
	type,
}: NavItemProps) {
	return (
		<Flex
			as="li"
			height="100%"
			paddingBottom={type === 'primary' ? { lg: 0.5 } : 0.5}
			fontSize={{ xs: 'xs', lg: 'sm' }}
			css={[
				mq({
					' a, button': {
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
						justifyContent:
							type === 'primary'
								? 'space-between'
								: hasEndElement
								? 'space-between'
								: 'center',
						height: '100%',
						width: '100%',
						gap: mapSpacing(0.5),
						color: boxPalette[active ? 'foregroundText' : 'foregroundAction'],
						padding: mapSpacing(1),
						textDecoration: 'none',
						fontWeight:
							type === 'primary'
								? mapResponsiveProp({
										xs: active ? 'bold' : undefined,
										lg: 'normal',
								  })
								: 'normal',

						// Underline overlay for active menu item
						'&:after': {
							content:
								type === 'primary'
									? mapResponsiveProp({ xs: undefined, lg: '""' })
									: "''",
							height: mapSpacing(0.5),
							position: 'absolute',
							top: '100%',
							left: 0,
							right: 0,
							backgroundColor: active
								? localPalette.linkActiveBg
								: 'transparent',
						},

						// Focus styles
						'&:focus': {
							outline: 'none',
							'&:before': {
								content: '""',
								position: 'absolute',
								inset: 0,
								zIndex: tokens.zIndex.elevated,
								...packs.outline,
							},
							'&::-moz-focus-inner': {
								border: 0,
							},
						},

						'&:hover': {
							color: boxPalette.foregroundText,
							backgroundColor: localPalette.linkHoverBg,

							'& > span:first-of-type': packs.underline,

							'&::after': {
								background: active ? localPalette.linkHoverBg : 'transparent',
							},
						},
					},
				}),
			]}
		>
			{children}
		</Flex>
	);
}
