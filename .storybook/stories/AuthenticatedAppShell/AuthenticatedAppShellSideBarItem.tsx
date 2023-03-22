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

export function AuthenticatedAppShellSideBarItem({
	label,
	href,
	isActive,
	badgeCount,
	icon: Icon,
}: AuthenticatedAppShellSideBarItemProps) {
	const Link = useLinkComponent();
	return (
		<li>
			<Flex
				as={Link}
				href={href}
				paddingX={1.5}
				paddingY={1}
				gap={1}
				justifyContent="space-between"
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
						'& span:first-of-type': {
							textDecoration: 'underline',
						},
					},
				}}
			>
				<Flex as="span" alignItems="center" gap={1}>
					<Icon />
					{label}
				</Flex>
				{badgeCount && <NotificationBadge tone="action" value={badgeCount} />}
			</Flex>
		</li>
	);
}

export function AuthenticatedAppShellSideBarDivider() {
	return (
		<Box as="li" paddingY={1} paddingX={1.5} aria-hidden="true">
			<hr
				css={{
					boxSizing: 'content-box',
					height: 0,
					margin: 0,
					overflow: 'visible',
					border: 'none',
					borderTopWidth: tokens.borderWidth.sm,
					borderTopStyle: 'solid',
					borderColor: boxPalette.borderMuted,
					width: '100%',
				}}
			/>
		</Box>
	);
}
