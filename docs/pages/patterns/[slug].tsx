import { Fragment } from 'react';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { TextLink } from '@ag.ds-next/react/text-link';
import {
	getPattern,
	getPatternBreadcrumbs,
	getPatternNavLinks,
	getPatternSlugs,
	type Pattern,
} from '../../lib/mdx/patterns';
import { generateToc } from '../../lib/generateToc';
import { PatternLayout } from '../../components/PatternLayout';
import { mdxComponents } from '../../components/mdxComponents';
import { DocumentTitle } from '../../components/DocumentTitle';
import { getPkg, type Pkg } from '../../lib/mdx/packages';

export default function PatternPage({
	breadcrumbs,
	navLinks,
	pattern,
	relatedComponents,
	relatedPatterns,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const documentTitle = `${pattern.title} pattern`;
	const components = mdxComponents({ title: documentTitle });
	return (
		<>
			<DocumentTitle description={pattern.description} title={documentTitle} />
			<PatternLayout
				breadcrumbs={breadcrumbs}
				editPath={`/docs/content/patterns/${pattern.slug}/index.mdx`}
				navLinks={navLinks}
				pattern={pattern}
			>
				{toc?.length > 1 ? (
					<InpageNav
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						title="On this page"
					/>
				) : null}
				<Prose id="page-content">
					<MDXRemote {...pattern.source} components={components} />
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
			</PatternLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getPatternBreadcrumbs>>;
		navLinks: Awaited<ReturnType<typeof getPatternNavLinks>>;
		pattern: Pattern;
		relatedComponents: Awaited<Pkg[]> | null;
		relatedPatterns: Awaited<Pattern[]> | null;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const pattern = slug ? await getPattern(slug) : undefined;
	const navLinks = await getPatternNavLinks();

	if (!(slug && pattern)) {
		return { notFound: true };
	}

	const breadcrumbs = await getPatternBreadcrumbs(slug);
	const toc = generateToc(pattern.content);

	// Get related components
	const relatedComponents = pattern.relatedComponents?.length
		? await Promise.all(pattern.relatedComponents.sort().map(getPkg))
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
	const relatedPatterns = pattern.relatedPatterns?.length
		? await Promise.all(pattern.relatedPatterns.sort().map(getPattern))
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
			pattern,
			relatedComponents,
			relatedPatterns,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getPatternSlugs();
	return {
		fallback: false,
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
	};
};
