import { Box, Flex } from '@ag.ds-next/react/box';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { FC } from 'react';

export type AuthenticatedAppShellSideBarItemType = {
	active?: boolean;
	href: string;
	label: string;
	icon: FC;
};

export const AuthenticatedAppShellSideBarItem = ({
	label,
	href,
	active,
	icon: Icon,
}: AuthenticatedAppShellSideBarItemType) => {
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
					color: boxPalette[active ? 'foregroundText' : 'foregroundAction'],

					...(active && {
						fontWeight: tokens.fontWeight.bold,
						background: boxPalette.backgroundShade,
						color: boxPalette.foregroundText,
					}),

					'&:hover': {
						fontWeight: tokens.fontWeight.bold,
						background: boxPalette.backgroundShade,
						color: boxPalette.foregroundText,
					},
				}}
			>
				<Icon />
				{label}
			</Flex>
		</Box>
	);
};
