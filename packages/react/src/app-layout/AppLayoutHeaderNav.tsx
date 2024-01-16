import { MouseEventHandler } from 'react';
import { Flex } from '../flex';
import { boxPalette, packs, tokens } from '../core';
import { MenuIcon } from '../icon';
import { BaseButton } from '../button';
import { AppLayoutHeaderProps } from './AppLayoutHeader';
import { AppLayoutHeaderAccount } from './AppLayoutHeaderAccount';
import { useAppLayoutContext } from './AppLayoutContext';
import { APP_LAYOUT_DESKTOP_BREAKPOINT } from './utils';

export type AppLayoutHeaderNavProps = {
	accountDetails?: AppLayoutHeaderProps['accountDetails'];
};

export function AppLayoutHeaderNav({
	accountDetails,
}: AppLayoutHeaderNavProps) {
	const { focusMode, openMobileMenu } = useAppLayoutContext();
	return (
		<Flex
			display={{ xs: 'flex', [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'none' }}
			background="body"
			alignItems="center"
			justifyContent={focusMode ? 'flex-end' : 'space-between'}
			paddingLeft={0.75}
			paddingRight={accountDetails?.dropdown ? 0.75 : tokens.containerPadding}
			minHeight="5.25rem"
			css={{
				'& > a, button': {
					height: '100%',
				},
			}}
		>
			{!focusMode ? (
				<AppLayoutHeaderNavMenuButton onClick={openMobileMenu} />
			) : null}
			{accountDetails ? <AppLayoutHeaderAccount {...accountDetails} /> : null}
		</Flex>
	);
}

function AppLayoutHeaderNavMenuButton({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Flex
			as={BaseButton}
			onClick={onClick}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap={0.5}
			paddingX={1}
			color="action"
			fontSize="xs"
			focus
			css={{
				'&:hover': {
					...packs.underline,
					backgroundColor: boxPalette.backgroundShade,
				},
			}}
		>
			<MenuIcon aria-hidden />
			<span>Menu</span>
		</Flex>
	);
}
