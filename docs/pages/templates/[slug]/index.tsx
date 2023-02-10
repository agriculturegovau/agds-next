import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/react/box';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateNavLinks,
	getTemplateSlugs,
	Template,
} from '../../../lib/mdx/templates';
import { TemplateLayout } from '../../../components/TemplateLayout';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TemplateOverviewPage({
	breadcrumbs,
	template,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
				skipLinks={[
					{
						label: `Skip to ${template.title} template overview`,
						href: '#page-content',
					},
				]}
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
		template: Template;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const navLinks = await getTemplateNavLinks();
	const breadcrumbs = slug ? await getTemplateBreadcrumbs(slug) : undefined;

	if (!(slug && template && breadcrumbs)) {
		return { notFound: true };
	}

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
	const slugs = await getTemplateSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
