import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex, Stack } from '@ag.ds-next/box';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { Body } from '@ag.ds-next/body';
import { ButtonLink } from '@ag.ds-next/button';
import { Text } from '@ag.ds-next/text';

import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateList,
	getTemplateSlugs,
	Template,
} from '../../lib/mdx';

import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';

export default function Templates({
	breadcrumbs,
	template,
	templateLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${template.data.title} | Templates`} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Templates',
						titleLink: '/templates',
						items: templateLinks,
					}}
					editPath={`/templates/${template.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<Stack as="main" gap={1}>
						<Flex flexDirection="column" gap={0.25}>
							<H1>{template.data.title}</H1>
							<Text fontSize="lg">{template.data.description}</Text>
						</Flex>

						<Flex>
							<ButtonLink
								href={template.data.previewURL}
								target="_blank"
								rel="noopener noreferrer"
								iconAfter={ExternalLinkIcon}
								variant="tertiary"
							>
								Visit Preview
							</ButtonLink>

							<ButtonLink
								href={template.data.codeURL}
								target="_blank"
								rel="noopener noreferrer"
								iconAfter={ExternalLinkIcon}
								variant="tertiary"
							>
								See code on GitHub
							</ButtonLink>
						</Flex>
						<Body>
							<MDXRemote {...template.source} components={mdxComponents} />
						</Body>
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		template: Template;
		templateLinks: { href: string; label: string }[];
		breadcrumbs: ReturnType<typeof getTemplateBreadcrumbs>;
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

	const breadcrumbs = getTemplateBreadcrumbs(template.data.title);

	return {
		props: {
			template,
			templateLinks,
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
