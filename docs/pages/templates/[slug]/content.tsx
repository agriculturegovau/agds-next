import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Body } from '@ag.ds-next/body';

import { TemplateLayout } from '../../../components/TemplateLayout';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateDocsContent,
	getTemplateNavLinks,
	getTemplateSlugs,
	getTemplateSubNavItems,
	Template,
} from '../../../lib/mdx';

import { mdxComponents } from '../../../components/utils';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function Templates({
	breadcrumbs,
	template,
	content,
	subNavItems,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<TemplateLayout
			template={template}
			breadcrumbs={breadcrumbs}
			navLinks={navLinks}
			subNavItems={subNavItems}
		>
			<DocumentTitle title={`${template.data.title} | Templates`} />
			<Body>
				<MDXRemote {...content} components={mdxComponents} />
			</Body>
		</TemplateLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		content: NonNullable<Awaited<ReturnType<typeof getTemplateDocsContent>>>;
		template: Template;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
		subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const navLinks = await getTemplateNavLinks();
	const subNavItems = slug ? await getTemplateSubNavItems(slug) : undefined;
	const breadcrumbs = slug
		? await getTemplateBreadcrumbs(slug, 'Content')
		: undefined;

	const content = template
		? await getTemplateDocsContent(template.slug, 'content.mdx')
		: null;

	if (!(slug && template && content && subNavItems && breadcrumbs)) {
		return { notFound: true };
	}

	return {
		props: {
			content,
			template,
			navLinks,
			subNavItems,
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
