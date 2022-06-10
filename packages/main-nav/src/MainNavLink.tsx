import { ComponentType, ReactNode, PropsWithChildren } from 'react';
import { Flex, Box } from '@ag.ds-next/box';
import {
	boxPalette,
	forwardRefWithAs,
	packs,
	useLinkComponent,
} from '@ag.ds-next/core';
import { IconProps } from '@ag.ds-next/icon';
import { localPalette } from './utils';

export type MainNavLinkProps = PropsWithChildren<{
	label: ReactNode;
	icon?: ComponentType<IconProps>;
}>;

export const MainNavLink = forwardRefWithAs<'a', MainNavLinkProps>(
	function MainNavItem({ as, label, icon: Icon, ...props }, ref) {
		const Link = useLinkComponent();
		return (
			<Box
				paddingBottom={0.5}
				height="100%"
				css={{
					'& a, & button': {
						textDecoration: 'none',
						'&:hover': packs.underline,
					},
					'& svg': { height: 24, width: 24 },
				}}
			>
				<Flex
					as={as ?? Link}
					ref={ref}
					padding={1}
					fontFamily="body"
					fontWeight="normal"
					fontSize={{ xs: 'xs', lg: 'sm' }}
					lineHeight="default"
					color="action"
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
					css={{
						position: 'relative',
						'&:hover': {
							color: boxPalette.foregroundText,
							backgroundColor: localPalette.linkHoverBg,
						},
					}}
				>
					{Icon ? <Icon size="md" weight="regular" /> : null}
					{label}
				</Flex>
			</Box>
		);
	}
);
