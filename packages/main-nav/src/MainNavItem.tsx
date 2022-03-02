import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Flex, BoxProps, Box } from '@ag.ds-next/box';
import {
	boxPalette,
	LinkProps,
	useLinkComponent,
	forwardRefWithAs,
	mapSpacing,
	mq,
} from '@ag.ds-next/core';
import { localPalette } from './utils';

const MainNavItem = forwardRefWithAs<'div', BoxProps>(function MainNavItem({
	as = 'div',
	...props
}) {
	return (
		<Box
			paddingBottom={0.5}
			height="100%"
			css={mq({
				' a, button': {
					position: 'relative',
					color: boxPalette['foregroundAction'],
					padding: mapSpacing(1),
					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
					},
				},
				' svg': {
					height: 24,
					width: 24,
				},
			})}
		>
			<Flex
				as={as}
				fontFamily="body"
				fontWeight="normal"
				fontSize={{ xs: 'xs', lg: 'sm' }}
				lineHeight="default"
				flexDirection={{
					xs: 'column',
					lg: 'row-reverse',
				}}
				justifyContent="center"
				alignItems="center"
				gap={0.5}
				height="100%"
				focus
				{...props}
			/>
		</Box>
	);
});

export type MainNavLinkProps = Omit<LinkProps, 'children' | 'color'> & {
	label: ReactNode;
	icon?: ReactNode;
};

export const MainNavLink = ({
	href,
	icon,
	label,
	...props
}: MainNavLinkProps) => {
	const Link = useLinkComponent();
	return (
		<MainNavItem
			as={Link}
			href={href}
			css={{ textDecoration: 'none' }}
			{...props}
		>
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
	icon?: ReactNode;
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
				appearance: 'none',
				background: 'transparent',
				cursor: 'pointer',
				textAlign: 'left',
			}}
			{...props}
		>
			{icon}
			{label}
		</MainNavItem>
	);
};
