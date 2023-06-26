import { Fragment, useMemo } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../ag-branding';
import { PageContent } from '../content';
import { tokens } from '../core';
import { LinkList } from '../link-list';
import { SkipLinks } from '../skip-link';
import { Text } from '../text';
import { Prose } from '../prose';
import { GlobalAlert } from '../global-alert';
import { CardListStory } from '../card/Card.stories';
import { navigationItems } from './test-utils';
import {
	AppLayout,
	AppLayoutProps,
	AppLayoutHeader,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from './index';

function AppLayoutTemplate({
	focusMode = false,
	children,
}: AppLayoutProps & {
	children: React.ReactNode;
}) {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Fragment>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<AppLayout focusMode={focusMode}>
				<AppLayoutHeader
					href="/"
					heading="Export Service"
					subLine="Supporting Australian agricultural exports"
					logo={<Logo />}
					accountDetails={{
						href: '#account',
						name: 'Toto Wolff',
						secondaryText: 'Orange Meat Works',
					}}
				/>
				<AppLayoutSidebar activePath="#dashboard" items={navigationItems} />
				<AppLayoutContent>
					<main
						id="main-content"
						tabIndex={-1}
						css={{ '&:focus': { outline: 'none' } }}
					>
						{children}
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
				</AppLayoutContent>
			</AppLayout>
		</Fragment>
	);
}

function AppLayoutBasicExample(args: AppLayoutProps) {
	return (
		<AppLayoutTemplate {...args}>
			<PageContent>
				<Prose>
					<h2>Content heading</h2>
					<p>See Template stories for more in context examples</p>
					<p>
						Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus
						mollis interdum. Aenean lacinia bibendum nulla sed consectetur.
						Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
						vestibulum. Donec ullamcorper nulla non metus auctor fringilla.
					</p>
					<p>
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit
						amet non magna. Nullam id dolor id nibh ultricies vehicula ut id
						elit.
					</p>
				</Prose>
			</PageContent>
		</AppLayoutTemplate>
	);
}

const meta: Meta<typeof AppLayout> = {
	title: 'Layout/AppLayout',
	parameters: {
		layout: 'fullscreen',
	},
	component: AppLayout,
	render: AppLayoutBasicExample,
};

export default meta;

export const Default: StoryObj<typeof AppLayout> = {
	args: {},
};

export const FocusMode: StoryObj<typeof AppLayout> = {
	args: { focusMode: true },
};

export const WithGlobalAlert: StoryObj<typeof AppLayout> = {
	render: (args) => (
		<Fragment>
			<GlobalAlert onDismiss={console.log}>
				<Text as="p">
					This application will be down for maintenance on Sunday from 11am to
					2pm.
				</Text>
			</GlobalAlert>
			<AppLayoutBasicExample {...args} />
		</Fragment>
	),
};

export const CardExample: StoryObj<typeof AppLayout> = {
	render: (args) => {
		return (
			<AppLayoutTemplate {...args}>
				<CardListStory />
			</AppLayoutTemplate>
		);
	},
};
