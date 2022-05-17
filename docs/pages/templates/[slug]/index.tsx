import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Body } from '@ag.ds-next/body';

import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateList,
	getTemplateSlugs,
	getTemplateSubNavItems,
	Template,
} from '../../../lib/mdx';

import { TemplateLayout } from '../../../components/TemplateLayout';
import { mdxComponents } from '../../../components/utils';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function Templates({
	breadcrumbs,
	subNavItems,
	template,
	templateLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<TemplateLayout
			template={template}
			breadcrumbs={breadcrumbs}
			subNavItems={subNavItems}
			navLinks={templateLinks}
		>
			<DocumentTitle title={`${template.data.title} | Templates`} />
			<Body>
				<MDXRemote {...template.source} components={mdxComponents} />
			</Body>
		</TemplateLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		template: Template;
		templateLinks: { href: string; label: string }[];
		breadcrumbs: ReturnType<typeof getTemplateBreadcrumbs>;
		subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const subNavItems = slug ? await getTemplateSubNavItems(slug) : undefined;
	const templateList = await getTemplateList();
	const templateLinks = templateList.map(({ title, slug }) => ({
		href: `/templates/${slug}`,
		label: title,
	}));

	if (!(slug && template && subNavItems)) {
		return { notFound: true };
	}

	const breadcrumbs = getTemplateBreadcrumbs(template.data.title);

	return {
		props: {
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
