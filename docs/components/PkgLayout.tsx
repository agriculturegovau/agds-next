import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { Body } from '@ag.ds-next/body';
import { SkipLinksProps } from '@ag.ds-next/skip-link';
import { SubNav } from '@ag.ds-next/sub-nav';
import { getPkgBreadcrumbs, getPkgNavLinks, Pkg } from '../lib/mdx/packages';
import { PageTitle } from './PageTitle';
import { PageLayout } from './PageLayout';

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
				title: 'Packages',
				titleLink: '/packages',
				items: navLinks,
			}}
			editPath={editPath}
			breadcrumbs={breadcrumbs}
			skipLinks={skipLinks}
		>
			<PageTitle
				pretext={`v${pkg.version}`}
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
			<Body>
				<pre>
					<code>
						yarn add {pkg.name}@{pkg.version}
					</code>
				</pre>
			</Body>
			{pkg.subNavItems?.length ? (
				<SubNav
					activePath={asPath}
					links={pkg.subNavItems.map((item) => ({
						label: item.title,
						href: item.slug,
						scroll: false,
					}))}
				/>
			) : null}
			{children}
		</PageLayout>
	);
}
