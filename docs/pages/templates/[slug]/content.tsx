import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Body } from '@ag.ds-next/body';

import { TemplateLayout } from '../../../components/TemplateLayout';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateDocsContent,
	getTemplateList,
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
	templateLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<TemplateLayout
			template={template}
			breadcrumbs={breadcrumbs}
			navLinks={templateLinks}
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
		templateLinks: { href: string; label: string }[];
		breadcrumbs: ReturnType<typeof getTemplateBreadcrumbs>;
		subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const templateList = await getTemplateList();
	const templateLinks = templateList.map(({ title, slug }) => ({
		href: `/templates/${slug}`,
		label: title,
	}));
	const subNavItems = slug ? await getTemplateSubNavItems(slug) : undefined;

	const content = template
		? await getTemplateDocsContent(template.slug, 'content.mdx')
		: null;

	if (!(slug && template && content && subNavItems)) {
		return { notFound: true };
	}

	const breadcrumbs = getTemplateBreadcrumbs(template.data.title);

	return {
		props: {
			content,
			template,
			templateLinks,
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
