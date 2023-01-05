import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/box';
import { Prose } from '@ag.ds-next/react/prose';
import { SkipLinksProps } from '@ag.ds-next/react/skip-link';
import { SubNav } from '@ag.ds-next/react/sub-nav';
import { getPkgBreadcrumbs, getPkgNavLinks, Pkg } from '../lib/mdx/packages';
import { PageTitle } from './PageTitle';
import { PageLayout } from './PageLayout';
import { FigmaLogo } from './FigmaLogo';
import { StorybookLogo } from './StorybookLogo';

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
				pretext={`v${pkg.version}`}
				title={pkg.title}
				introduction={pkg.description}
				callToAction={
					(pkg.storybookPath || pkg.figmaGalleryNodeId) && (
						<Flex
							gap={1.5}
							flexDirection={['column', 'row']}
							alignItems="flex-start"
						>
							{pkg.storybookPath && (
								<ButtonLink
									variant="text"
									href={`${process.env.NEXT_PUBLIC_STORYBOOK_URL}?path=${pkg.storybookPath}`}
									iconBefore={StorybookLogo}
								>
									View in Storybook
								</ButtonLink>
							)}
							{pkg.figmaGalleryNodeId && (
								<ButtonLink
									variant="text"
									href={`https://www.figma.com/file/SgSHfK8AUadp7aEzD34ZG3/AgDS---Agriculture-Design-System-1.2.1?node-id=${pkg.figmaGalleryNodeId}`}
									iconBefore={FigmaLogo}
								>
									View in Figma
								</ButtonLink>
							)}
						</Flex>
					)
				}
			/>
			<Prose>
				<pre>
					<code>{`import { ... } from '@ag.ds-next/react/${pkg.name}';`}</code>
				</pre>
			</Prose>
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
