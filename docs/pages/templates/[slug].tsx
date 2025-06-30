import { Fragment } from 'react';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/react/box';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateNavLinks,
	getTemplateSlugs,
	type Template,
} from '../../lib/mdx/templates';
import { withBasePath } from '../../lib/img';
import { TemplateLayout } from '../../components/TemplateLayout';
import { mdxComponents } from '../../components/mdxComponents';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function TemplatePage({
	breadcrumbs,
	navLinks,
	template,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const documentTitle = `${template.title} template`;
	const components = mdxComponents({ title: documentTitle });
	return (
		<Fragment>
			<DocumentTitle description={template.description} title={documentTitle} />
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
					<MDXRemote {...template.source} components={components} />
				</Prose>
			</TemplateLayout>
		</Fragment>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		template: Template;
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
			breadcrumbs,
			navLinks,
			slug,
			template,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getTemplateSlugs();
	return {
		fallback: false,
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
	};
};
