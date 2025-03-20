import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/react/box';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateNavLinks,
	Template,
	getTemplateSlugs,
} from '../../lib/mdx/templates';
import { withBasePath } from '../../lib/img';
import { TemplateLayout } from '../../components/TemplateLayout';
import { mdxComponents } from '../../components/mdxComponents';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function TemplatePage({
	breadcrumbs,
	template,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Fragment>
			<DocumentTitle
				description={template.description}
				title={`${template.title} template`}
			/>
			<TemplateLayout
				breadcrumbs={breadcrumbs}
				editPath={`/docs/content/templates/${template.slug}/index.mdx`}
				navLinks={navLinks}
				template={template}
			>
				<Prose id="page-content">
					<Box border borderColor="muted" css={{ img: { display: 'block' } }}>
						<img
							alt=""
							role="presentation"
							src={withBasePath(`/img/templates/${template.slug}.webp`)}
						/>
					</Box>
					<MDXRemote {...template.source} components={mdxComponents} />
				</Prose>
			</TemplateLayout>
		</Fragment>
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

	if (!(slug && template)) {
		return { notFound: true };
	}

	const navLinks = await getTemplateNavLinks();
	const breadcrumbs = await getTemplateBreadcrumbs(slug);

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
