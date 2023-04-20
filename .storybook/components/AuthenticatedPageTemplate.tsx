import { PropsWithChildren, useMemo } from 'react';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { tokens } from '@ag.ds-next/react/core';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import { HelpIcon, HomeIcon, ExitIcon } from '@ag.ds-next/react/icon';
import {
	AppLayout,
	AppLayoutSidebar,
	AppLayoutHeader,
	AppLayoutFooter,
	AppLayoutFooterDivider,
	AppLayoutContent,
} from '@ag.ds-next/react/app-layout';
import {
	EmailIcon,
	NotificationBadge,
} from '../../docs/components/designSystemComponents';

type PageTemplateProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

const navigationItems = [
	[
		{
			label: 'Home',
			icon: HomeIcon,
			href: '#',
		},
	],
	[
		{
			label: 'Messages',
			icon: EmailIcon,
			href: '#messages',
			endElement: <NotificationBadge tone="action" value={100} max={99} />,
		},
		{ label: 'Help', icon: HelpIcon, href: '#help' },
	],
	[
		{
			label: 'Sign Out',
			icon: ExitIcon,
			onClick: console.log,
		},
	],
];

export function AuthenticatedPageTemplate({
	children,
	background,
}: PageTemplateProps) {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<AppLayout>
			<AppLayoutSidebar activePath="#" items={navigationItems} />
			<AppLayoutContent background={background}>
				<AppLayoutHeader
					href="/"
					logo={<Logo />}
					title="Export Service"
					subTitle="Supporting Australian agricultural exports"
					user={{
						name: 'Toto Wolff',
						organisation: 'Orange Meat Works',
						href: '/account/preferences',
					}}
				/>
				<main id="main-content">{children}</main>
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
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; {year} Department of Agriculture, Fisheries and Forestry
					</Text>
				</AppLayoutFooter>
			</AppLayoutContent>
		</AppLayout>
	);
}
