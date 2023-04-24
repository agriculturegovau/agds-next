import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/react/box';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getPattern,
	getPatternBreadcrumbs,
	getPatternNavLinks,
	getPatternSlugs,
	Pattern,
} from '../../../lib/mdx/patterns';
import { withBasePath } from '../../../lib/img';
import { PatternLayout } from '../../../components/PatternLayout';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function PatternOverviewPage({
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
				navLinks={navLinks}
				editPath={`/docs/content/patterns/${pattern.slug}/index.mdx`}
			>
				<Prose id="page-content">
					{pattern.group === 'templates' ? (
						<Box border borderColor="muted" css={{ img: { display: 'block' } }}>
							<img
								src={withBasePath(`/img/templates/${pattern.slug}.webp`)}
								role="presentation"
								alt=""
							/>
						</Box>
					) : null}
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
