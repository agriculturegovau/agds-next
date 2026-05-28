import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Header } from '@ag.ds-next/react/header';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';
import { SkipLinks } from '@ag.ds-next/react/skip-link';

export const MAIN_CONTENT_ATTRS = {
	as: 'main' as const,
	id: 'main-content',
	tabIndex: -1,
	css: { '&:focus': { outline: 'none' } },
};

const media = {
	leaf: 'https://static-content.p5.agriculture.gov.au/agds/brand-leaf.png',
	artwork:
		'https://static-content.p5.agriculture.gov.au/agds/brand-artwork.png',
};

export const SiteLayout = ({
	applyMainElement = true,
	focusMode,
	palette = 'dark',
	children,
}: PropsWithChildren<{
	focusMode?: boolean;
	applyMainElement?: boolean;
	palette?: 'light' | 'dark';
}>) => (
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
			<Stack palette={palette}>
				<Header
					background="body"
					heading="Service name"
					subline="Service description that could be a little longer"
					logo={<Logo />}
					href="#"
					rightContent={
						<Flex
							justifyContent="flex-end"
							display={{ xs: 'none', lg: 'flex' }}
						>
							<img src={media.leaf} height={'107px'} alt="brand leaf" />
						</Flex>
					}
				/>
				<MainNav
					focusMode={focusMode}
					id="main-nav"
					items={[
						{ label: 'Menu', href: '#' },
						{ label: 'Menu', href: '#' },
						{ label: 'Menu', href: '#' },
					]}
					secondaryItems={[{ label: 'Menu', href: '#' }]}
				/>
			</Stack>
			<Box
				flexGrow={1}
				{...(applyMainElement ? MAIN_CONTENT_ATTRS : undefined)}
			>
				{children}
			</Box>
			<Box palette={palette}>
				<Footer
					background="bodyAlt"
					artwork={{ src: media.artwork, position: 'top' }}
				>
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
