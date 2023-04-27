import { Fragment, useMemo } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SinglePageFormPage } from '../../../../example-site/components/templates/SinglePageForm';
import { FormExampleMultiStep } from '../../../../example-site/components/FormExampleMultiStep/FormExampleMultiStep';
import { TableFilteringMediumExample } from '../../../../.storybook/stories/DataFiltering/TableFilteringMedium.stories';
import { Logo } from '../ag-branding';
import { PageContent } from '../content';
import { tokens } from '../core';
import { LinkList } from '../link-list';
import { SkipLinks } from '../skip-link';
import { Text } from '../text';
import { Stack } from '../box';
import { H1 } from '../heading';
import { TextLink } from '../text-link';
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

function AppLayoutTemplate({ children, focusMode }: AppLayoutProps) {
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

const meta: Meta<typeof AppLayout> = {
	title: 'Layout/AppLayout',
	parameters: {
		layout: 'fullscreen',
	},
	component: AppLayout,
	render: AppLayoutTemplate,
};

export default meta;

export const Basic: StoryObj<typeof AppLayout> = {
	args: {
		children: <SinglePageFormPage />,
	},
};

export const FocusMode: StoryObj<typeof AppLayout> = {
	args: {
		children: <FormExampleMultiStep />,
		focusMode: true,
	},
};

export const ExampleTable: StoryObj<typeof AppLayout> = {
	args: {
		children: <TableFilteringMediumExample />,
	},
};

export const MinimalContent: StoryObj<typeof AppLayout> = {
	args: {
		children: (
			<PageContent>
				<Stack gap={1.5}>
					<H1>Page not found</H1>
					<Text as="p" fontSize="md">
						Check the web address is correct or go back to the{' '}
						<TextLink href="/">Design System</TextLink>.
					</Text>
					<Text>Error code: 404</Text>
				</Stack>
			</PageContent>
		),
	},
};
