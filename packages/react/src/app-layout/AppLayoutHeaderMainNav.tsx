import { Flex, focusStyles } from '../box';
import { boxPalette, fontGrid, mapSpacing, useLinkComponent } from '../core';
import { AvatarIcon } from '../icon';
import { BaseButton } from '../button';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutHeaderProps } from './AppLayoutHeader';
import { BORDER_WIDTH_XXL } from './utils';

export type AppLayoutHeaderMainNavProps = {
	user: AppLayoutHeaderProps['user'];
};

export function AppLayoutHeaderMainNav({ user }: AppLayoutHeaderMainNavProps) {
	const { showMenu } = useAppLayoutContext();
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
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						'& span': {
							textDecoration: 'underline',
						},
					},
					...focusStyles,
				},
			}}
		>
			<BaseButton onClick={showMenu}>
				<MenuIcon />
				<span>Menu</span>
			</BaseButton>
			{user ? (
				<Link href={user.href}>
					<AvatarIcon color="action" aria-hidden />
					<span>Account</span>
				</Link>
			) : null}
		</Flex>
	);
}

// TODO This icon has been copied+pasted from `MainNav`
// This should be a design system icon
function MenuIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentcolor"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<rect x="4" y="16" width="16" height="2" />
			<rect x="4" y="11" width="16" height="2" />
			<rect x="4" y="6" width="16" height="2" />
		</svg>
	);
}
