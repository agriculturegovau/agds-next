import type { PropsWithChildren } from 'react';
import {
	boxPalette,
	mapSpacing,
	mq,
	mapResponsiveProp,
	packs,
} from '@ag.ds-next/core';
import { Flex } from '@ag.ds-next/box';
import { localPalette } from './utils';

type NavListType = 'primary' | 'secondary';

export type NavItemProps = PropsWithChildren<{
	active: boolean;
	type: NavListType;
}>;

export function NavListItem({ active, children, type }: NavItemProps) {
	return (
		<Flex
			as="li"
			height="100%"
			paddingBottom={type === 'primary' ? { lg: 0.5 } : 0.5}
			fontSize={{ xs: 'xs', lg: 'sm' }}
			css={[
				mq({
					' a, button': {
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
						justifyContent: 'space-between',
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
							content: mapResponsiveProp({ xs: undefined, lg: '""' }),
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
