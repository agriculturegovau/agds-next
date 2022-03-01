import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Flex, BoxProps } from '@ag.ds-next/box';
import {
	boxPalette,
	LinkProps,
	useLinkComponent,
	forwardRefWithAs,
	mapResponsiveProp,
	mapSpacing,
	mq,
	packs,
} from '@ag.ds-next/core';
import { localPalette } from './utils';

const MainNavItem = forwardRefWithAs<'div', BoxProps>(function MainNavItem({
	as = 'div',
	...props
}) {
	return (
		<Flex
			as={as}
			fontFamily="body"
			fontSize={{ xs: 'xs', lg: 'sm' }}
			padding={1}
			gap={0.5}
			lineHeight="default"
			color="action"
			flexDirection={{
				xs: 'column',
				lg: 'row-reverse',
			}}
			alignItems="center"
			css={mq({
				svg: {
					height: 24,
					width: 24,
				},

				marginBottom: mapResponsiveProp({
					lg: mapSpacing(0.5),
				}),
				textDecoration: 'none',

				// Underline overlay for active menu item
				'&:after': {
					content: mapResponsiveProp({ xs: undefined, lg: '""' }),
					height: mapSpacing(0.5),
					position: 'absolute',
					top: '100%',
					left: 0,
					right: 0,
					backgroundColor: 'transparent',
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
						background: 'transparent',
					},
				},
			})}
			{...props}
		/>
	);
});

export type MainNavLinkProps = Omit<LinkProps, 'children' | 'color'> & {
	label: ReactNode;
	icon: ReactNode;
};

export const MainNavLink = ({
	href,
	icon,
	label,
	...props
}: MainNavLinkProps) => {
	const Link = useLinkComponent();
	return (
		<MainNavItem as={Link} href={href} {...props}>
			{icon}
			{label}
		</MainNavItem>
	);
};

export type MainNavButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children' | 'color'
> & {
	label: ReactNode;
	icon: ReactNode;
};

export const MainNavButton = ({
	icon,
	label,
	...props
}: MainNavButtonProps) => {
	return (
		<MainNavItem
			as="button"
			css={{
				backgroundColor: 'transparent',
				border: 'none',
				appearance: 'none',
			}}
			{...props}
		>
			{icon}
			{label}
		</MainNavItem>
	);
};
