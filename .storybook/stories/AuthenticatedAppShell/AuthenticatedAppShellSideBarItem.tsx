import { ComponentType } from 'react';
import { Box, Flex } from '@ag.ds-next/react/box';
import { boxPalette, tokens, useLinkComponent } from '@ag.ds-next/react/core';
import { IconProps } from '@ag.ds-next/react/icon';
import { NotificationBadge } from '@ag.ds-next/react/badge';

export type AuthenticatedAppShellSideBarItemType = {
	href: string;
	label: string;
	icon: ComponentType<IconProps>;
	badgeCount?: number;
};

export type AuthenticatedAppShellSideBarItemProps =
	AuthenticatedAppShellSideBarItemType & {
		isActive: boolean;
	};

export const AuthenticatedAppShellSideBarItem = ({
	label,
	href,
	isActive,
	badgeCount,
	icon: Icon,
}: AuthenticatedAppShellSideBarItemProps) => {
	const Link = useLinkComponent();
	return (
		<Box as="li">
			<Flex
				as={Link}
				href={href}
				paddingX={1.5}
				paddingY={1}
				gap={1}
				alignItems="center"
				focus
				css={{
					color: boxPalette[isActive ? 'foregroundText' : 'foregroundAction'],
					textDecoration: 'none',
					...(isActive && {
						fontWeight: tokens.fontWeight.bold,
						background: boxPalette.backgroundShade,
						color: boxPalette.foregroundText,
					}),
					'&:hover': {
						background: boxPalette.backgroundShade,
						color: boxPalette.foregroundText,
						textDecoration: 'underline',
					},
				}}
			>
				<Icon />
				{label}
				{badgeCount && <NotificationBadge tone="action" value={badgeCount} />}
			</Flex>
		</Box>
	);
};
