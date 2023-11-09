import { PropsWithChildren, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { tokens } from '@ag.ds-next/react/core';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { LoadingBlanket } from '@ag.ds-next/react/loading';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Stack } from '@ag.ds-next/react/stack';
import { Header } from '@ag.ds-next/react/header';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { MainNav, MainNavBottomBar } from '@ag.ds-next/react/main-nav';
import { Text } from '@ag.ds-next/react/text';
import { LinkList } from '@ag.ds-next/react/link-list';
import { useAuth } from '../../lib/useAuth';

type SiteLayoutProps = PropsWithChildren<{
	/** If true, the area between the header and footer will be a 'main' element with the ID of 'main-content' applied (used for skip links). */
	applyMainElement?: boolean;
	/** If true, the `MainNav` component will not be rendered. Used on pages with focused tasks such as multi-page forms. */
	focusMode?: boolean;
}>;

export const SiteLayout = ({
	children,
	applyMainElement = true,
	focusMode = false,
}: SiteLayoutProps) => {
	const { isRedirectingToSignIn } = useAuth();

	const skipLinks = useMemo(() => {
		const items = [{ href: '#main-content', label: 'Skip to main content' }];
		if (!focusMode) {
			items.push({ href: '#main-nav', label: 'Skip to main navigation' });
		}
		return items;
	}, [focusMode]);

	return (
		<>
			<SkipLinks links={skipLinks} />
			<Flex
				flexDirection="column"
				fontFamily="body"
				palette="light"
				minHeight="100vh"
			>
				<SiteHeader focusMode={focusMode} />
				<Box
					flexGrow={1}
					{...(applyMainElement && {
						as: 'main',
						id: 'main-content',
						tabIndex: -1,
						css: { '&:focus': { outline: 'none' } },
					})}
				>
					{children}
				</Box>
				<SiteFooter />
				{isRedirectingToSignIn && (
					<LoadingBlanket
						fullScreen={true}
						label="You are being redirected to sign in with yourGov"
					/>
				)}
			</Flex>
		</>
	);
};

// Header

const SiteHeader = ({ focusMode }: { focusMode: boolean }) => {
	const router = useRouter();
	const { user, onSignInButtonClick } = useAuth();

	const navItems = useMemo(() => {
		return {
			primary: [
				{ label: 'Home', href: '/' },
				{ label: 'About', href: '/not-found' },
				{ label: 'Services', href: '/services' },
				{ label: 'Help', href: '/not-found' },
			],
			secondary: [
				user
					? {
							label: 'My account',
							href: '/app',
							endElement: <AvatarIcon />,
					  }
					: {
							label: 'Sign in',
							onClick: onSignInButtonClick,
							endElement: <AvatarIcon />,
					  },
			],
		};
	}, [user, onSignInButtonClick]);

	// Prevent the header links from being incorrectly highlighted
	const asPath = router.asPath.endsWith('not-found') ? '' : router.asPath;

	return (
		<Stack palette="dark">
			<Header
				background="bodyAlt"
				logo={<Logo />}
				heading="yourGov"
				subline="Access government services from one place"
			/>
			{!focusMode ? (
				<MainNav
					id="main-nav"
					activePath={asPath}
					items={navItems.primary}
					secondaryItems={navItems.secondary}
				/>
			) : (
				<MainNavBottomBar />
			)}
		</Stack>
	);
};

// Footer

const footerLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/not-found' },
	{ label: 'Services', href: '/services' },
	{ label: 'Help', href: '/not-found' },
];

const SiteFooter = () => {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Box palette="dark">
			<Footer background="bodyAlt">
				<nav aria-label="footer">
					<LinkList links={footerLinks} horizontal />
				</nav>
				<FooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; {year} Department of Agriculture, Fisheries and Forestry
				</Text>
			</Footer>
		</Box>
	);
};
