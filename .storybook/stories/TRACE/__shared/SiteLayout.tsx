import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Header } from '@ag.ds-next/react/header';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { MainNav, MainNavBottomBar } from '@ag.ds-next/react/main-nav';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';
import { SkipLinks } from '@ag.ds-next/react/skip-link';

export const MAIN_CONTENT_ATTRS = {
	as: 'main' as const,
	id: 'main-content',
	tabIndex: -1,
	css: { '&:focus': { outline: 'none' } },
};

export const SiteLayout = ({
	applyMainElement = true,
	focusMode,
	children,
}: PropsWithChildren<{ focusMode?: boolean; applyMainElement?: boolean }>) => (
	<>
		<SkipLinks
			links={
				focusMode
					? [{ href: '#main-content', label: 'Skip to main content' }]
					: [
							{ href: '#main-content', label: 'Skip to main content' },
							{ href: '#main-nav', label: 'Skip to main navigation' },
					  ]
			}
		/>
		<Flex flexDirection="column" fontFamily="body" minHeight="100vh">
			<Stack palette="dark">
				<Header
					background="bodyAlt"
					heading="Trace"
					subline="Tracking Animal Certification for Export"
					logo={<Logo />}
					href="#"
				/>
				{focusMode ? (
					<MainNavBottomBar />
				) : (
					<MainNav
						id="main-nav"
						items={[
							{ label: 'Home', href: '#' },
							{ label: 'Exports', href: '#' },
							{ label: 'Certificates', href: '#' },
							{ label: 'Account', href: '#' },
						]}
						secondaryItems={[
							{ label: 'Account', href: '#' },
							{ label: 'Messages', href: '#' },
						]}
					/>
				)}
			</Stack>
			<Box
				flexGrow={1}
				{...(applyMainElement ? MAIN_CONTENT_ATTRS : undefined)}
			>
				{children}
			</Box>
			<Box palette="dark">
				<Footer background="bodyAlt">
					<nav aria-label="footer">
						<LinkList
							links={[
								{ label: 'Link', href: '#' },
								{ label: 'Link', href: '#' },
								{ label: 'Link', href: '#' },
							]}
							horizontal
						/>
					</nav>
					<FooterDivider />

					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; {new Date().getFullYear()} Department of Agriculture,
						Fisheries and Forestry
					</Text>
				</Footer>
			</Box>
		</Flex>
	</>
);
