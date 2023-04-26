import { Fragment } from 'react';
import { Flex } from '../box';
import { boxPalette, tokens } from '../core';
import { MenuIcon } from '../icon';
import { BaseButton } from '../button';
import { HEADER_HEIGHT } from './utils';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutHeaderBrand } from './AppLayoutHeaderBrand';
import { AppLayoutHeaderAccountDetails } from './AppLayoutHeaderAccountDetails';
import { AppLayoutHeaderMainNav } from './AppLayoutHeaderMainNav';

export type AppLayoutHeaderProps = {
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** The logo to display. */
	logo: JSX.Element;
	/**  The href to link to, for example "/". */
	href: string;
	/** The heading should be set to the website or service title. */
	heading: string;
	/** Used to provide additional information to describe your website or service. */
	subLine: string;
	/** Details for the authenticated account. */
	accountDetails: {
		/** The name of the authenticated user. */
		name: string;
		/** Displayed under the users name if needed e.g. to show the business name. */
		secondaryText?: string;
		/** The href to link to, for example "/account". */
		href: string;
	};
};

export function AppLayoutHeader({
	id,
	heading,
	href,
	logo,
	subLine,
	accountDetails,
}: AppLayoutHeaderProps) {
	return (
		<Fragment>
			<Flex
				as="header"
				id={id}
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
				<AppLayoutHeaderBrand
					heading={heading}
					href={href}
					logo={logo}
					subLine={subLine}
				/>
				<AppLayoutHeaderAccountDetails {...accountDetails} />
			</Flex>
			<AppLayoutHeaderMainNav accountDetails={accountDetails} />
		</Fragment>
	);
}

function AppLayoutHeaderMenuTrigger() {
	const { isMenuOpen, showMenu, desktopShowMenuButtonRef } =
		useAppLayoutContext();
	return (
		<Flex
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={desktopShowMenuButtonRef}
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
