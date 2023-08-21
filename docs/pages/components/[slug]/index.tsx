import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import { TextLink } from '@ag.ds-next/react/text-link';
import {
	getPkgSlugs,
	getPkg,
	Pkg,
	getPkgNavLinks,
	getPkgBreadcrumbs,
	getPkgDocsContent,
} from '../../../lib/mdx/packages';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PkgLayout } from '../../../components/PkgLayout';
import { generateToc } from '../../../lib/generateToc';
import { getPattern, Pattern } from '../../../lib/mdx/patterns';

export default function Packages({
	pkg,
	navLinks,
	breadcrumbs,
	toc,
	source,
	relatedPatterns,
	relatedComponents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={pkg.title} description={pkg.description} />
			<PkgLayout
				pkg={pkg}
				navLinks={navLinks}
				breadcrumbs={breadcrumbs}
				skipLinks={[
					{
						label: `Skip to ${pkg.title} overview`,
						href: '#pkg-content',
					},
				]}
				editPath={`/packages/react/src/${pkg.slug}/docs/overview.mdx`}
			>
				{toc?.length > 1 ? (
					<InpageNav
						title="On this page"
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
					/>
				) : null}
				<Prose id="pkg-content">
					<MDXRemote {...source} components={mdxComponents} />
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
		pkg: NonNullable<Pkg>;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
		toc: Awaited<ReturnType<typeof generateToc>>;
		source: NonNullable<
			Awaited<ReturnType<typeof getPkgDocsContent>>
		>['source'];
		relatedPatterns: Awaited<Pattern[]> | null;
		relatedComponents: Awaited<Pkg[]> | null;
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
	const toc = await generateToc(pkgContent.content);

	// Get related patterns
	const relatedPatterns = pkg.relatedPatterns?.length
		? await Promise.all(pkg.relatedPatterns.sort().map(getPattern))
		: null;
	if (relatedPatterns?.length) {
		toc.push({
			title: 'Related patterns',
			slug: 'related-patterns',
			id: 'related-patterns',
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
			title: 'Related components',
			slug: 'related-components',
			id: 'related-components',
			level: 2,
			items: [],
		});
	}

	return {
		props: {
			pkg,
			navLinks,
			breadcrumbs,
			toc,
			source: pkgContent.source,
			relatedPatterns,
			relatedComponents,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getPkgSlugs();
	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
