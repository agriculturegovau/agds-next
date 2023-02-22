import type { PropsWithChildren } from 'react';
import { boxPalette, mapSpacing, mq, mapResponsiveProp, packs } from '../core';
import { Flex } from '../box';
import { localPalette } from './utils';

type NavListType = 'primary' | 'secondary';

export type NavItemProps = PropsWithChildren<{
	active: boolean;
	hasEndElement: boolean;
	type: NavListType;
	vertical?: boolean;
}>;

export function NavListItem({
	active,
	children,
	hasEndElement,
	type,
	vertical,
}: NavItemProps) {
	const shouldLeftJustify = type === 'primary' || vertical;

	return (
		<Flex
			as="li"
			height="100%"
			paddingBottom={vertical ? 0 : type === 'primary' ? { lg: 0.5 } : 0.5}
			fontSize={{ xs: 'xs', lg: 'sm' }}
			width={vertical ? '100%' : 'auto'}
			css={[
				mq({
					' a, button': {
						boxSizing: 'border-box',
						position: 'relative',
						display: 'flex',
						flexDirection: shouldLeftJustify
							? 'row'
							: mapResponsiveProp({
									xs: 'column-reverse',
									lg: 'row',
							  }),
						alignItems: 'center',
						justifyContent: shouldLeftJustify
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
							content: shouldLeftJustify
								? mapResponsiveProp({ xs: undefined, lg: '""' })
								: "''",
							position: 'absolute',
							left: 0,
							bottom: 0,
							...(vertical
								? {
										top: 0,
										width: mapSpacing(0.5),
								  }
								: {
										height: mapSpacing(0.5),
										top: '100%',
										right: 0,
								  }),
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
