import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { SkipLinksProps } from '@ag.ds-next/react/skip-link';
import { SubNav } from '@ag.ds-next/react/sub-nav';
// import { Text } from '@ag.ds-next/react/text';
// import { PageAlert } from '@ag.ds-next/react/page-alert';
import { getPkgBreadcrumbs, getPkgNavLinks, Pkg } from '../lib/mdx/packages';
import { PageTitle } from './PageTitle';
import { PageLayout } from './PageLayout';

// TODO Look into display "unreleased" components here (we had this before moving everything to `@ag.ds-next/react`)

export function PkgLayout({
	children,
	pkg,
	navLinks,
	breadcrumbs,
	skipLinks,
	editPath,
}: PropsWithChildren<{
	pkg: Pkg;
	navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
	breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
	skipLinks?: SkipLinksProps['links'];
	editPath?: string;
}>) {
	const { asPath } = useRouter();
	return (
		<PageLayout
			sideNav={{
				title: 'Components',
				titleLink: '/components',
				items: navLinks,
			}}
			editPath={editPath}
			breadcrumbs={breadcrumbs}
			skipLinks={skipLinks}
		>
			<PageTitle
				title={pkg.title}
				introduction={pkg.data.description}
				callToAction={
					pkg.storybookPath && (
						<CallToActionLink
							href={`https://steelthreads.github.io/agds-next/storybook/index.html?path=${pkg.storybookPath}`}
						>
							View in Storybook
						</CallToActionLink>
					)
				}
			/>
			{/* {isUnreleased ? (
				<PageAlert tone="warning">
					<Text as="p">This package is yet to be released on npm.</Text>
				</PageAlert>
			) : null} */}
			{pkg.subNavItems?.length ? (
				<SubNav
					activePath={asPath}
					links={pkg.subNavItems.map((item) => ({
						...item,
						scroll: false,
					}))}
				/>
			) : null}
			{children}
		</PageLayout>
	);
}
