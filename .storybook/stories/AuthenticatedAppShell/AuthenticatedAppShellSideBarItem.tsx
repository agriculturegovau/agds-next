import { NotificationBadge } from '@ag.ds-next/react/badge';
import { Box, Flex } from '@ag.ds-next/react/box';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { FC } from 'react';

export type AuthenticatedAppShellSideBarItemType = {
	href: string;
	label: string;
	icon: FC;
	badgeNumber?: number;
};

export const AuthenticatedAppShellSideBarItem = ({
	label,
	href,
	isActive,
	badgeNumber,
	icon: Icon,
}: AuthenticatedAppShellSideBarItemType & {
	isActive?: boolean;
}) => {
	return (
		<Box as="li">
			<Flex
				as="a"
				href={href}
				paddingX={2}
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
				{badgeNumber && <NotificationBadge tone="action" value={badgeNumber} />}
			</Flex>
		</Box>
	);
};
