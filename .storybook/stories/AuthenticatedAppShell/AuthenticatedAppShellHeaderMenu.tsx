import { forwardRef, useState } from 'react';
import { boxPalette, mapSpacing } from '@ag.ds-next/react/core';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Text } from '@ag.ds-next/react/text';
import { ChevronDownIcon } from '@ag.ds-next/react/icon';
import { useLinkComponent } from '@ag.ds-next/react/core';
import { authenticatedAppShellHeaderHeight } from './utils';
import { useAuthenticatedAppShellContext } from './AuthenticatedAppShellContext';
import {
	Menu,
	MenuList,
	MenuButton,
	MenuItem,
	MenuItems,
	MenuPopover,
	MenuLink,
} from '@reach/menu-button';

export function AuthenticatedAppShellHeaderMenu() {
	const { userMenu } = useAuthenticatedAppShellContext();
	const Link = useLinkComponent();

	const [refEl, setRefEl] = useState<HTMLButtonElement | null>(null);
	const menuButtonWidth = refEl?.clientWidth;

	return (
		<Menu>
			<AuthenticatedAppShellHeaderMenuButton ref={setRefEl} />
			<Box as={MenuList} background="body" focus>
				{userMenu.items.map((item, idx) => {
					const { icon: Icon } = item;
					if ('href' in item) {
						return (
							<MenuLink
								key={idx}
								as={Link}
								href={item.href}
								css={{ ...menuItemStyles, width: menuButtonWidth }}
							>
								{Icon ? <Icon /> : null}
								{item.label}
							</MenuLink>
						);
					}
					return (
						<MenuItem
							key={idx}
							onSelect={() => item.onClick()}
							css={{ ...menuItemStyles, width: menuButtonWidth }}
						>
							{Icon ? <Icon /> : null}
							{item.label}
						</MenuItem>
					);
				})}
			</Box>
		</Menu>
	);
}

const menuItemStyles = {
	boxSizing: 'border-box',
	appearance: 'none',
	background: boxPalette.backgroundBody,
	display: 'flex',
	alignItems: 'center',
	gap: mapSpacing(0.5),
	padding: mapSpacing(1),
	color: boxPalette.foregroundAction,
	minWidth: '14rem',
	width: '100%',
	textDecoration: 'none',
	'&:hover': {
		textDecoration: 'underline',
	},
	['&[data-selected]']: {
		background: boxPalette.backgroundShade,
	},
} as const;

const AuthenticatedAppShellHeaderMenuButton = forwardRef<HTMLButtonElement>(
	function AuthenticatedAppShellHeaderMenuButton(_, ref) {
		const { userMenu } = useAuthenticatedAppShellContext();
		return (
			<Flex
				// @ts-ignore
				ref={ref}
				as={MenuButton}
				background="body"
				alignItems="center"
				paddingX={1}
				gap={1}
				height={authenticatedAppShellHeaderHeight}
				aria-label={`User menu, ${userMenu.name}`}
				css={{
					appearance: 'none',
					'&:hover': {
						background: boxPalette.backgroundShade,
					},
				}}
				focus
			>
				<Flex as="span" gap={0.5}>
					<Avatar name={userMenu.name} tone="action" aria-hidden />
					<Box
						as="span"
						display={{ xs: 'none', lg: 'flex' }}
						flexDirection="column"
						css={{ textAlign: 'left' }}
					>
						<Text color="action" fontWeight="bold" fontSize="xs">
							{userMenu.name}
						</Text>
						<Text color="muted" fontSize="xs">
							{userMenu.organisation}
						</Text>
					</Box>
				</Flex>
				<ChevronDownIcon color="action" weight="bold" size="sm" />
			</Flex>
		);
	}
);
