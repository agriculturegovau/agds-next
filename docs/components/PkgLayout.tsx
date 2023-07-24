import { Fragment, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { Prose } from '@ag.ds-next/react/prose';
import { SkipLinksProps } from '@ag.ds-next/react/skip-link';
import { SubNav } from '@ag.ds-next/react/sub-nav';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { getPkgBreadcrumbs, getPkgNavLinks, Pkg } from '../lib/mdx/packages';
import { PageTitle } from './PageTitle';
import { PageLayout } from './PageLayout';
import { FigmaLogo } from './FigmaLogo';
import { StorybookLogo } from './StorybookLogo';
import { GithubLogo } from './GithubLogo';
import { SiteLayout } from './SiteLayout';
import { PageAlert } from './designSystemComponents';

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
		<SiteLayout applyMainElement={false}>
			<PageLayout
				applyMainElement={true}
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
					introduction={pkg.description}
					callToAction={
						(pkg.storybookPath || pkg.figmaGalleryNodeId) && (
							<Flex
								gap={1.5}
								flexWrap="wrap"
								flexDirection={['column', 'row']}
								alignItems="flex-start"
							>
								{pkg.figmaGalleryNodeId && (
									<ButtonLink
										variant="text"
										href={`${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=${pkg.figmaGalleryNodeId}`}
										iconBefore={FigmaLogo}
									>
										View in Figma
									</ButtonLink>
								)}
								{pkg.storybookPath && (
									<ButtonLink
										variant="text"
										href={`${process.env.NEXT_PUBLIC_STORYBOOK_URL}?path=${pkg.storybookPath}`}
										iconBefore={StorybookLogo}
									>
										View in Storybook
									</ButtonLink>
								)}

								<ButtonLink
									variant="text"
									href={`https://github.com/steelthreads/agds-next/tree/main/packages/react/src/${pkg.slug}`}
									iconBefore={GithubLogo}
								>
									View in Github
								</ButtonLink>
							</Flex>
						)
					}
				/>
				{!pkg.deprecated && (
					<Fragment>
						{!pkg.unreleased ? (
							<Prose>
								<pre>
									<code>{`import { ... } from '@ag.ds-next/react/${pkg.name}';`}</code>
								</pre>
							</Prose>
						) : (
							<PageAlert tone="warning">
								<Text>
									This component is unreleased and will be available as part of
									the next <TextLink href="/updates">update</TextLink>.
								</Text>
							</PageAlert>
						)}
						{pkg.subNavItems?.length ? (
							<SubNav
								activePath={asPath}
								links={pkg.subNavItems.map((item) => ({
									...item,
									scroll: false,
								}))}
							/>
						) : null}
					</Fragment>
				)}

				{children}
			</PageLayout>
		</SiteLayout>
	);
}
