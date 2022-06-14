import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { ButtonLink } from '@ag.ds-next/button';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { Body } from '@ag.ds-next/body';
import { SkipLinksProps } from '@ag.ds-next/skip-link';
import { SecondaryNav } from '@ag.ds-next/secondary-nav';
import { getPkgBreadcrumbs, getPkgNavLinks, Pkg } from '../lib/mdxUtils';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';
import { Callout } from '@ag.ds-next/callout';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';

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
						<div>
							<ButtonLink
								target="_blank"
								href={`https://steelthreads.github.io/agds-next/storybook/index.html?path=${pkg.storybookPath}`}
								rel="noopener noreferrer"
								variant="secondary"
								iconAfter={ExternalLinkIcon}
							>
								View in Storybook
							</ButtonLink>
						</div>
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
				<SecondaryNav
					activePath={asPath}
					links={pkg.subNavItems.map((item) => ({
						label: item.title,
						href: item.slug,
					}))}
				/>
			) : null}
			{children}
			<Callout title="Need more help?">
				<Text as="p">
					You can contact us for questions, comments or to suggest a new way to
					use this component. Please email us at{' '}
					<TextLink href="mailto:TODO">email address</TextLink>.
				</Text>
			</Callout>
		</PageLayout>
	);
}
