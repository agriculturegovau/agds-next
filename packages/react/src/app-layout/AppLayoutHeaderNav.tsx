import { MouseEventHandler } from 'react';
import { Flex } from '../flex';
import { boxPalette, tokens } from '../core';
import { MenuIcon } from '../icon';
import { BaseButton, scaleIconOnHover } from '../button';
import { type AppLayoutHeaderProps } from './AppLayoutHeader';
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
			alignItems="center"
			background="body"
			display={{ xs: 'flex', [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'none' }}
			flexWrap="wrap"
			justifyContent={focusMode ? 'flex-end' : 'space-between'}
			paddingLeft={0.75}
			paddingRight={accountDetails?.dropdown ? 0.75 : tokens.containerPadding}
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
	const { isMobileMenuOpen } = useAppLayoutContext();
	const scaleIconCSS = scaleIconOnHover();
	return (
		<Flex
			alignItems="center"
			aria-expanded={isMobileMenuOpen}
			aria-haspopup="dialog"
			as={BaseButton}
			color="action"
			css={{
				svg: {
					transition: scaleIconCSS.transition,
				},
				'&:hover': {
					backgroundColor: boxPalette.backgroundShade,
					textDecoration: 'underline',
					svg: {
						transform: scaleIconCSS.transform,
					},
				},
			}}
			flexDirection="column"
			focusRingFor="keyboard"
			fontSize="xs"
			gap={0.5}
			justifyContent="center"
			minHeight="5.25rem"
			onClick={onClick}
			paddingX={1}
		>
			<MenuIcon aria-hidden />
			<span>Menu</span>
		</Flex>
	);
}
