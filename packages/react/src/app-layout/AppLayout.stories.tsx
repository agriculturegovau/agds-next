import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useMemo } from 'react';
import { Logo } from '../ag-branding';
import { PageContent } from '../content';
import { tokens, useTernaryState } from '../core';
import { LinkList } from '../link-list';
import { Prose } from '../prose';
import { Text } from '../text';
import { SkipLinks } from '../skip-link';
import { navigationItems } from './test-utils';
import {
	AppLayout,
	AppLayoutSidebar,
	AppLayoutHeader,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from './index';

const meta: Meta<typeof AppLayout> = {
	title: 'Layout/AppLayout',
	component: AppLayout,
	parameters: {
		layout: 'fullscreen',
	},
	render: function AppLayoutRender(args) {
		const year = useMemo(() => new Date().getFullYear(), []);
		const [isMenuOpen, openMenu, closeMenu] = useTernaryState(args.isMenuOpen);
		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout
					isMenuOpen={isMenuOpen}
					openMenu={openMenu}
					closeMenu={closeMenu}
				>
					<AppLayoutHeader
						href="/"
						heading="Export Service"
						subLine="Supporting Australian agricultural exports"
						logo={<Logo />}
						unreadMessageCount={6}
						accountDetails={{
							href: '#account',
							name: 'Toto Wolff',
							secondaryText: 'Orange Meat Works',
						}}
					/>
					<AppLayoutSidebar activePath="#dashboard" items={navigationItems} />
					<main
						id="main-content"
						tabIndex={-1}
						css={{ '&:focus': { outline: 'none' } }}
					>
						<PageContent>
							<Prose>
								<h1>Page title</h1>
								<p>Page content</p>
							</Prose>
						</PageContent>
					</main>
					<AppLayoutFooter>
						<nav aria-label="footer">
							<LinkList
								links={[
									{ label: 'Home', href: '/' },
									{
										label: 'Storybook',
										href: 'https://design-system.agriculture.gov.au/storybook/index.html',
									},
									{
										label: 'Playroom',
										href: 'https://design-system.agriculture.gov.au/playroom/index.html',
									},
									{
										label: 'Starter kit',
										href: 'https://github.com/steelthreads/agds-starter-kit',
									},
								]}
								horizontal
							/>
						</nav>
						<AppLayoutFooterDivider />
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							We acknowledge the traditional owners of country throughout
							Australia and recognise their continuing connection to land,
							waters and culture. We pay our respects to their Elders past,
							present and emerging.
						</Text>
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							&copy; {year} Department of Agriculture, Fisheries and Forestry
						</Text>
					</AppLayoutFooter>
				</AppLayout>
			</Fragment>
		);
	},
};

export default meta;

type Story = StoryObj<typeof AppLayout>;

export const Basic: Story = {
	args: {
		isMenuOpen: true,
	},
};

export const FocusMode: Story = {
	args: {
		isMenuOpen: false,
	},
};
