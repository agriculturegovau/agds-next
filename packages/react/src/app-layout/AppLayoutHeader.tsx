import { Fragment, PropsWithChildren } from 'react';
import { Flex } from '../box';
import { boxPalette, tokens } from '../core';
import { MenuIcon } from '../icon';
import { BaseButton } from '../button';
import { HEADER_HEIGHT } from './utils';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutHeaderTitles } from './AppLayoutHeaderTitles';
import { AppLayoutHeaderAccountLink } from './AppLayoutHeaderAccountLink';
import { AppLayoutHeaderMainNav } from './AppLayoutHeaderMainNav';

export type AppLayoutHeaderProps = PropsWithChildren<{
	/** Title of the application.*/
	title: string;
	/** Subtitle of the application. */
	subTitle: string;
	/** The logo to display. */
	logo: JSX.Element;
	/**  The href to link to, for example "/". */
	href: string;
	/** The currently authenticated user. */
	user?: {
		/** The name of the currently authenticated user. */
		name: string;
		/** The name of the organisation that the currently authenticated user belongs to. */
		organisation?: string;
		/** The href to link to, for example "/account". */
		href: string;
	};
}>;

export function AppLayoutHeader({
	title,
	subTitle,
	logo,
	href,
	user,
}: AppLayoutHeaderProps) {
	return (
		<Fragment>
			<Flex
				as="header"
				palette={{ xs: 'dark', lg: 'light' }}
				gap={1}
				height={HEADER_HEIGHT}
				paddingY={{ xs: 1, md: 0 }}
				paddingLeft={{
					...tokens.containerPadding,
					lg: tokens.containerPadding.md,
				}}
				paddingRight={tokens.containerPadding}
				background={{ xs: 'bodyAlt', lg: 'body' }}
				alignItems="center"
				css={{
					[tokens.mediaQuery.min.lg]: {
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
						borderBottomWidth: tokens.borderWidth.sm,
						borderBottomStyle: 'solid',
						borderColor: boxPalette.borderMuted,
					},
				}}
			>
				<AppLayoutHeaderMenuTrigger />
				<AppLayoutHeaderTitles
					href={href}
					title={title}
					subTitle={subTitle}
					logo={logo}
				/>
				{user ? <AppLayoutHeaderAccountLink {...user} /> : null}
			</Flex>
			<AppLayoutHeaderMainNav user={user} />
		</Fragment>
	);
}

function AppLayoutHeaderMenuTrigger() {
	const { isMenuOpen, showMenu, showMenuButtonRef } = useAppLayoutContext();
	return (
		<Flex
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={showMenuButtonRef}
			as={BaseButton}
			onClick={showMenu}
			aria-label="Open menu"
			borderRight
			borderColor="muted"
			borderRightWidth={{ xs: undefined, lg: 'sm' }}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			gap={0.25}
			height={HEADER_HEIGHT}
			width={HEADER_HEIGHT}
			fontSize="xs"
			color="action"
			focus
			css={{
				display: 'none',
				flexShrink: 0,
				'&:hover': {
					background: boxPalette.backgroundShade,
				},
				[tokens.mediaQuery.min.lg]: {
					display: isMenuOpen ? 'none' : 'flex',
					position: 'fixed',
					top: 0,
					left: 0,
				},
			}}
		>
			<MenuIcon aria-hidden />
			Menu
		</Flex>
	);
}
