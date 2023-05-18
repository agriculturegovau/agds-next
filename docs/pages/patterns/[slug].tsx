import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getPattern,
	getPatternSlugs,
	getPatternBreadcrumbs,
	getPatternNavLinks,
	Pattern,
} from '../../lib/mdx/patterns';
import { PatternLayout } from '../../components/PatternLayout';
import { mdxComponents } from '../../components/mdxComponents';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function PatternPage({
	breadcrumbs,
	pattern,
	navLinks,
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

	return {
		props: {
			pattern,
			navLinks,
			breadcrumbs,
			slug,
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
