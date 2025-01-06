import { Fragment, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { Prose } from '@ag.ds-next/react/prose';
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
	editPath,
}: PropsWithChildren<{
	pkg: Pkg;
	navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
	breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
	editPath?: string;
}>) {
	const { asPath } = useRouter();
	return (
		<SiteLayout applyMainElement={false}>
			<PageLayout
				applyMainElement
				breadcrumbs={breadcrumbs}
				editPath={editPath}
				sideNav={{
					title: 'Components',
					titleLink: '/components',
					items: navLinks,
				}}
			>
				<PageTitle
					callToAction={
						(pkg.storybookPath || pkg.figmaGalleryNodeId) && (
							<Flex
								alignItems="flex-start"
								flexDirection={['column', 'row']}
								flexWrap="wrap"
								gap={1.5}
							>
								{pkg.figmaGalleryNodeId && (
									<ButtonLink
										href={`${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=${pkg.figmaGalleryNodeId}`}
										iconBefore={FigmaLogo}
										variant="text"
									>
										View in Figma
									</ButtonLink>
								)}
								{pkg.storybookPath && (
									<ButtonLink
										href={`${process.env.NEXT_PUBLIC_STORYBOOK_URL}?path=${pkg.storybookPath}`}
										iconBefore={StorybookLogo}
										variant="text"
									>
										View in Storybook
									</ButtonLink>
								)}

								<ButtonLink
									href={`https://github.com/agriculturegovau/agds-next/tree/main/packages/react/src/${pkg.slug}`}
									iconBefore={GithubLogo}
									variant="text"
								>
									View in Github
								</ButtonLink>
							</Flex>
						)
					}
					introduction={pkg.description}
					title={pkg.title}
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
								<Text as="p">
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
