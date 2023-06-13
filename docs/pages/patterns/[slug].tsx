import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
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

export default function PatternPage({
	breadcrumbs,
	pattern,
	navLinks,
	toc,
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

	return {
		props: {
			breadcrumbs,
			navLinks,
			pattern,
			toc,
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
