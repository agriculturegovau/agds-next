import { Flex, focusStyles } from '../box';
import { NotificationBadge } from '../badge';
import { boxPalette, fontGrid, mapSpacing, useLinkComponent } from '../core';
import { AvatarIcon, MenuIcon } from '../icon';
import { BaseButton } from '../button';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutHeaderProps } from './AppLayoutHeader';
import { BORDER_WIDTH_XXL } from './utils';

export type AppLayoutHeaderMainNavProps = {
	accountDetails: AppLayoutHeaderProps['accountDetails'];
	unreadMessageCount?: AppLayoutHeaderProps['unreadMessageCount'];
};

export function AppLayoutHeaderMainNav({
	accountDetails,
	unreadMessageCount,
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
						textDecoration: 'underline',
					},
				},
			}}
		>
			<BaseButton
				onClick={showMenu}
				ref={mobileShowMenuButtonRef}
				aria-label={
					unreadMessageCount
						? `Open menu, ${unreadMessageCount} messages`
						: `Open menu`
				}
			>
				<Flex
					as="span"
					css={{
						textDecoration: 'none',
						'& span:last-of-type': {
							position: 'absolute',
							transform: `translateX(1.6rem)`,
						},
					}}
				>
					<MenuIcon aria-hidden />
					{unreadMessageCount ? (
						<NotificationBadge
							aria-hidden="true"
							tone="action"
							value={unreadMessageCount}
							max={99}
						/>
					) : null}
				</Flex>
				<span>Menu</span>
			</BaseButton>
			<Link href={accountDetails.href}>
				<AvatarIcon color="action" aria-hidden />
				<span>Account</span>
			</Link>
		</Flex>
	);
}
