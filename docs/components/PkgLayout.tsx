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

/**
 * Calculates what the import statment would be by providing it package data.
 *
 * If only 1 import, it outputs a string like this:
 * import { ComponentName } from '@ag.ds-next/react/component-name';
 *
 * If more than 1 import, it outputs a string like this:
 * import {
 *     ComponentOne,
 *     ComponentTwo,
 * } from '@ag.ds-next/react/component-name'
 *
 * This helps keep the string readable and not require scrolling
 */
export function calculateImportString(pkg: Pkg) {
	const hasMultipleImports = (pkg.importNames?.length || 0) > 1;

	function getImportNames(): string {
		if (!pkg.importNames?.length) {
			const defaultImportName = pkg.slug
				.split('-')
				.map(capitalizeFirstLetter)
				.join('');
			return ' ' + defaultImportName;
		}
		if (hasMultipleImports) {
			const tabInset = '\n    ';
			return tabInset + pkg.importNames?.join(',' + tabInset);
		}
		return ' ' + pkg.importNames.join(', ');
	}

	const importNames = getImportNames();
	const closingBracket = hasMultipleImports ? ',\n}' : ' }';
	const importString = `import {${
		importNames + closingBracket
	} from '@ag.ds-next/react/${pkg.name}';`;

	return importString;
}

function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

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
	const importString = calculateImportString(pkg);

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
									href={`https://github.com/agriculturegovau/agds-next/tree/main/packages/react/src/${pkg.slug}`}
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
									<code>{importString}</code>
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
