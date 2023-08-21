import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { TextLink } from '@ag.ds-next/react/text-link';
import {
	getPattern,
	getPatternSlugs,
	getPatternBreadcrumbs,
	getPatternNavLinks,
	Pattern,
} from '../../lib/mdx/patterns';
import { generateToc } from '../../lib/generateToc';
import { PatternLayout } from '../../components/PatternLayout';
import { mdxComponents } from '../../components/mdxComponents';
import { DocumentTitle } from '../../components/DocumentTitle';
import { getPkg, Pkg } from '../../lib/mdx/packages';

export default function PatternPage({
	breadcrumbs,
	pattern,
	navLinks,
	toc,
	relatedComponents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle
				title={`${pattern.title} pattern`}
				description={pattern.description}
			/>
			<PatternLayout
				pattern={pattern}
				breadcrumbs={breadcrumbs}
				editPath={`/docs/content/patterns/${pattern.slug}/index.mdx`}
				navLinks={navLinks}
			>
				{toc?.length > 1 ? (
					<InpageNav
						title="On this page"
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
					/>
				) : null}
				<Prose id="page-content">
					<MDXRemote {...pattern.source} components={mdxComponents} />
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
				</Prose>
			</PatternLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pattern: Pattern;
		navLinks: Awaited<ReturnType<typeof getPatternNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPatternBreadcrumbs>>;
		toc: Awaited<ReturnType<typeof generateToc>>;
		relatedComponents: Awaited<Pkg[]> | null;
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
	const toc = await generateToc(pattern.content);

	// Get related components
	const relatedComponents = pattern.relatedComponents?.length
		? await Promise.all(pattern.relatedComponents.sort().map(getPkg))
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
			breadcrumbs,
			navLinks,
			pattern,
			toc,
			relatedComponents,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getPatternSlugs();
	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
