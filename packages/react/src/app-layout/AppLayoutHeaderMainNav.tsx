import { Flex, focusStyles } from '../box';
import { boxPalette, fontGrid, mapSpacing, useLinkComponent } from '../core';
import { AvatarIcon, MenuIcon } from '../icon';
import { BaseButton } from '../button';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutHeaderProps } from './AppLayoutHeader';
import { BORDER_WIDTH_XXL } from './utils';

export type AppLayoutHeaderMainNavProps = {
	accountDetails: AppLayoutHeaderProps['accountDetails'];
};

export function AppLayoutHeaderMainNav({
	accountDetails,
}: AppLayoutHeaderMainNavProps) {
	const { showMenu, mobileShowMenuButtonRef } = useAppLayoutContext();
	const Link = useLinkComponent();
	return (
		<Flex
			display={{ xs: 'flex', lg: 'none' }}
			background="body"
			justifyContent="space-between"
			paddingX={{ xs: 0.75, lg: 2 }}
			dark
			css={{
				borderBottom: `${BORDER_WIDTH_XXL}px solid ${boxPalette.accent}`,
				'a, button': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: mapSpacing(1),
					gap: mapSpacing(0.5),
					color: boxPalette.foregroundAction,
					textDecoration: 'none',
					...fontGrid('xs', 'default'),
					...focusStyles,
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						'& span': {
							textDecoration: 'underline',
						},
					},
				},
			}}
		>
			<BaseButton onClick={showMenu} ref={mobileShowMenuButtonRef}>
				<MenuIcon />
				<span>Menu</span>
			</BaseButton>
			<Link href={accountDetails.href}>
				<AvatarIcon color="action" aria-hidden />
				<span>Account</span>
			</Link>
		</Flex>
	);
}
