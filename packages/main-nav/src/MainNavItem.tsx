import {
	ComponentType,
	ReactNode,
	ButtonHTMLAttributes,
	PropsWithChildren,
	ElementType,
} from 'react';
import { Flex, Box } from '@ag.ds-next/box';
import {
	boxPalette,
	LinkProps,
	useLinkComponent,
	mapSpacing,
	mq,
} from '@ag.ds-next/core';
import { localPalette } from './utils';
import { IconProps } from '@ag.ds-next/icon';

type MainNavItemProps = PropsWithChildren<{
	as: ElementType;
	className?: string;
}>;

const MainNavItem = ({
	as,
	children,
	className,
	...props
}: MainNavItemProps) => (
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
			className={className}
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
		>
			{children}
		</Flex>
	</Box>
);

export type MainNavLinkProps = Omit<LinkProps, 'children' | 'color'> & {
	label: ReactNode;
	icon?: ComponentType<IconProps>;
};

export const MainNavLink = ({
	icon: Icon,
	label,
	...props
}: MainNavLinkProps) => {
	const Link = useLinkComponent();
	return (
		<MainNavItem as={Link} css={{ textDecoration: 'none' }} {...props}>
			{Icon ? <Icon size="md" weight="regular" /> : null}
			{label}
		</MainNavItem>
	);
};

export type MainNavButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children' | 'color'
> & {
	label: ReactNode;
	icon?: ComponentType<IconProps>;
};

export const MainNavButton = ({
	icon: Icon,
	label,
	...props
}: MainNavButtonProps) => (
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
		{Icon ? <Icon size="md" weight="regular" /> : null}
		{label}
	</MainNavItem>
);
