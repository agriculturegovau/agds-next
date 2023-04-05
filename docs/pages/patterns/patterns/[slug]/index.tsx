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
} from '../../../../lib/mdx/patterns';
import { TemplateLayout } from '../../../../components/TemplateLayout';
import { mdxComponents } from '../../../../components/mdxComponents';
import { DocumentTitle } from '../../../../components/DocumentTitle';

export default function TemplateOverviewPage({
	breadcrumbs,
	template,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log({ template });
	return (
		<>
			<DocumentTitle
				title={`${template.title} template`}
				description={template.description}
			/>
			<TemplateLayout
				template={template}
				breadcrumbs={breadcrumbs}
				navLinks={navLinks}
				editPath={`/docs/content/templates/${template.slug}/index.mdx`}
			>
				<Prose id="page-content">
					<Box border borderColor="muted" css={{ img: { display: 'block' } }}>
						<img
							src={`/img/templates/${template.slug}.webp`}
							role="presentation"
							alt=""
						/>
					</Box>
					<MDXRemote {...template.source} components={mdxComponents} />
				</Prose>
			</TemplateLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		template: Pattern;
		navLinks: Awaited<ReturnType<typeof getPatternNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPatternBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getPattern(slug) : undefined;
	const navLinks = await getPatternNavLinks();

	if (!(slug && template)) {
		return { notFound: true };
	}

	const breadcrumbs = await getPatternBreadcrumbs(slug);

	return {
		props: {
			template,
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
