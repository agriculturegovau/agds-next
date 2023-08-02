import { Fragment, ReactNode, useMemo } from 'react';
import {
	AppLayout,
	AppLayoutContent,
	AppLayoutHeader,
	AppLayoutSidebar,
} from '@ag.ds-next/react/app-layout';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import { HomeIcon } from '@ag.ds-next/react/icon';
import { tokens } from '@ag.ds-next/react/core';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';

type AppFrameProps = {
	focusMode?: boolean;
	children?: ReactNode;
};

export const AppFrame = ({ focusMode = false, children }: AppFrameProps) => {
	return (
		<Fragment>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<AppLayout focusMode={focusMode}>
				<AppLayoutHeader
					href="/"
					heading="Dashboard"
					subLine="An example of a dense screen built using AgDS"
					badgeLabel="Beta"
					logo={<Logo />}
					accountDetails={{
						href: '#account',
						name: 'Toto Wolff',
						secondaryText: 'Orange Meat Works',
					}}
				/>
				<AppLayoutSidebar
					activePath="/"
					items={[
						[
							{
								label: 'Dashboard',
								icon: HomeIcon,
								href: '/',
							},
						],
					]}
				/>
				<AppLayoutContent>
					<main
						id="main-content"
						tabIndex={-1}
						css={{ '&:focus': { outline: 'none' } }}
					>
						{children}
					</main>
				</AppLayoutContent>
			</AppLayout>
		</Fragment>
	);
};

const AppFooter = () => {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Footer>
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
	);
};
