import { Fragment } from 'react';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import { TextLink } from '@ag.ds-next/react/text-link';
import {
	getPkg,
	getPkgBreadcrumbs,
	getPkgDocsContent,
	getPkgNavLinks,
	getPkgSlugs,
	type Pkg,
} from '../../../lib/mdx/packages';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PkgLayout } from '../../../components/PkgLayout';
import { generateToc } from '../../../lib/generateToc';
import { getPattern, Pattern } from '../../../lib/mdx/patterns';

export default function Packages({
	breadcrumbs,
	navLinks,
	pkg,
	relatedComponents,
	relatedPatterns,
	source,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: pkg.title });
	return (
		<>
			<DocumentTitle description={pkg.description} title={pkg.title} />
			<PkgLayout
				breadcrumbs={breadcrumbs}
				editPath={`/packages/react/src/${pkg.slug}/docs/overview.mdx`}
				navLinks={navLinks}
				pkg={pkg}
			>
				{toc?.length > 1 ? (
					<InpageNav
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						title="On this page"
					/>
				) : null}
				<Prose id="pkg-content">
					<MDXRemote {...source} components={components} />
					{relatedComponents?.length ? (
						<Fragment>
							<h2 id="related-components">Related components</h2>
							<ul>
								{relatedComponents.map(({ slug, title, description }) => (
									<li key={slug}>
										<TextLink href={`/components/${slug}`}>{title}</TextLink>{' '}
										&ndash; {description}
									</li>
								))}
							</ul>
						</Fragment>
					) : null}
					{relatedPatterns?.length ? (
						<Fragment>
							<h2 id="related-patterns">Related patterns</h2>
							<ul>
								{relatedPatterns.map(({ slug, title, description }) => (
									<li key={slug}>
										<TextLink href={`/patterns/${slug}`}>{title}</TextLink>{' '}
										&ndash; {description}
									</li>
								))}
							</ul>
						</Fragment>
					) : null}
				</Prose>
			</PkgLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		pkg: NonNullable<Pkg>;
		relatedComponents: Awaited<Pkg[]> | null;
		relatedPatterns: Awaited<Pattern[]> | null;
		source: NonNullable<
			Awaited<ReturnType<typeof getPkgDocsContent>>
		>['source'];
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;
	const pkgContent = pkg
		? await getPkgDocsContent(pkg.slug, 'overview.mdx')
		: null;

	if (!(slug && pkg && pkgContent)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks();
	const breadcrumbs = await getPkgBreadcrumbs(slug);
	const toc = generateToc(pkgContent.content);

	// Add Colour link to ToC
	if (pkg?.colourSection) {
		toc.push({
			title: 'Colour',
			slug: 'colour',
			id: 'colour',
			level: 2,
			items: [],
		});
	}

	// Get related components
	const relatedComponents = pkg.relatedComponents?.length
		? await Promise.all(pkg.relatedComponents.sort().map(getPkg))
		: null;
	if (relatedComponents?.length) {
		toc.push({
			id: 'related-components',
			items: [],
			level: 2,
			slug: 'related-components',
			title: 'Related components',
		});
	}

	// Get related patterns
	const relatedPatterns = pkg.relatedPatterns?.length
		? await Promise.all(pkg.relatedPatterns.sort().map(getPattern))
		: null;
	if (relatedPatterns?.length) {
		toc.push({
			id: 'related-patterns',
			items: [],
			level: 2,
			slug: 'related-patterns',
			title: 'Related patterns',
		});
	}

	return {
		props: {
			breadcrumbs,
			navLinks,
			pkg,
			relatedComponents,
			relatedPatterns,
			source: pkgContent.source,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getPkgSlugs();
	return {
		fallback: false,
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
	};
};
