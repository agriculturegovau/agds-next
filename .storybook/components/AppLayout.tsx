import { PropsWithChildren, Fragment } from 'react';
import { tokens } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { WebsiteIcon, ExitIcon } from '@ag.ds-next/react/icon';
import {
	AppLayout as AgDsAppLayout,
	AppLayoutHeader,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from '@ag.ds-next/react/app-layout';
import { Text } from '@ag.ds-next/react/text';
import { LinkList } from '@ag.ds-next/react/link-list';

type AppLayoutProps = PropsWithChildren<{
	focusMode?: boolean;
}>;

const sidebarLinks = [
	[
		{ label: 'Dashboard', href: '#dashboard', icon: WebsiteIcon },
		{ label: 'Section', href: '#section', icon: WebsiteIcon },
	],
	[{ label: 'Sign out', icon: ExitIcon }],
];

const footerLinks = [
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
];

export const AppLayout = ({ children, focusMode = false }: AppLayoutProps) => {
	const year = new Date().getFullYear();
	return (
		<Fragment>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<AgDsAppLayout focusMode={focusMode}>
				<AppLayoutHeader
					logo={<Logo />}
					href="/"
					heading="Export Service"
					subLine="Supporting Australian agricultural exports"
				/>
				<AppLayoutSidebar items={sidebarLinks} />
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
							<LinkList links={footerLinks} horizontal />
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
			</AgDsAppLayout>
		</Fragment>
	);
};
