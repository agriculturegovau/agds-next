import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { MenuIcon } from '@ag.ds-next/react/icon';
import { BaseButton } from '@ag.ds-next/react/button';
import { AuthenticatedAppShellHeaderMenu } from './AuthenticatedAppShellHeaderMenu';
import { authenticatedAppShellHeaderHeight } from './utils';

export const AuthenticatedAppShellHeaderButton = ({
	onClick,
}: {
	onClick: () => void;
}) => {
	return (
		<Stack
			as={BaseButton}
			onClick={onClick}
			borderRight
			alignItems="center"
			justifyContent="center"
			height={authenticatedAppShellHeaderHeight}
			width={authenticatedAppShellHeaderHeight}
			color="action"
			css={{
				'&:hover': {
					background: boxPalette.backgroundShade,
				},
			}}
		>
			<MenuIcon aria-hidden />
			Menu
		</Stack>
	);
};

export const AuthenticatedAppShellHeader = ({
	title,
	subtitle,
	isNavbarOpen,
	openMenu,
}: {
	title: string;
	subtitle: string;
	isNavbarOpen: boolean;
	openMenu: () => void;
}) => {
	return (
		<Flex
			as="header"
			alignItems="center"
			justifyContent="space-between"
			height={authenticatedAppShellHeaderHeight}
			borderBottom
			width="100%"
		>
			<Flex alignItems="center">
				{!isNavbarOpen && (
					<AuthenticatedAppShellHeaderButton onClick={openMenu} />
				)}
				<Stack paddingY={1} paddingLeft={{ xs: 1, lg: 2 }}>
					<Text
						lineHeight="default"
						fontSize={{ xs: 'md', sm: 'lg' }}
						fontWeight="bold"
						maxWidth={tokens.maxWidth.bodyText}
					>
						{title}
					</Text>
					<Text color="muted" fontSize={{ xs: 'xs', sm: 'sm' }}>
						{subtitle}
					</Text>
				</Stack>
			</Flex>

			<AuthenticatedAppShellHeaderMenu />
		</Flex>
	);
};
