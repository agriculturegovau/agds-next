import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { Body } from '@ag.ds-next/body';
import { ButtonLink } from '@ag.ds-next/button';

import {
	getTemplate,
	// getTemplateBreadcrumbs,
	getTemplateList,
	getTemplateSlugs,
	Template,
} from '../../lib/mdxUtils';

import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';

export default function Templates({
	template,
	templateLinks,
}: // breadcrumbs,
InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${template.data.title} | Templates | AgDS`} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Templates',
						titleLink: '/templates',
						items: templateLinks,
					}}
					editPath={`/templates/${template.slug}.mdx`}
					// breadcrumbs={breadcrumbs}
				>
					<Flex
						as="main"
						flexDirection="column"
						gap={1}
						alignItems="flex-start"
					>
						<H1>{template.data.title}</H1>

						<Flex gap={1}>
							<ButtonLink
								href={template.data.previewURL}
								target="_blank"
								iconAfter={ExternalLinkIcon}
							>
								Visit Preview
							</ButtonLink>

							<ButtonLink
								href={template.data.codeURL}
								target="_blank"
								iconAfter={ExternalLinkIcon}
								variant="secondary"
							>
								See code on GitHub
							</ButtonLink>
						</Flex>
						<Body>
							<MDXRemote {...template.source} components={mdxComponents} />
						</Body>
					</Flex>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		template: Template;
		templateLinks: { href: string; label: string }[];
		// breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
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

	if (!(slug && template)) {
		return { notFound: true };
	}

	// const breadcrumbs = await getTemplateBreadcrumbs(slug);

	return {
		props: {
			template,
			templateLinks,
			// breadcrumbs,
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
