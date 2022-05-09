import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Body } from '@ag.ds-next/body';
import { H2, H3 } from '@ag.ds-next/heading';
import { Flex, Stack } from '@ag.ds-next/box';
import { Card } from '@ag.ds-next/card';
import { mq, tokens } from '@ag.ds-next/core';
import { Text, TextLink } from '@ag.ds-next/text';

import {
	getMarkdownData,
	getTemplateList,
	serializeMarkdown,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({ source, templateLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates | AgDS" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Templates',
						titleLink: '/templates',
						items: templateLinks,
					}}
					editPath="/templates/index.mdx"
				>
					<Stack gap={2}>
						<Body>
							<MDXRemote {...source} components={mdxComponents} />
						</Body>

						<H2>All Templates</H2>
						<Stack as="ul" gap={1} maxWidth={tokens.maxWidth.bodyText}>
							{templateLinks.map((template) => {
								return <TemplateCard key={template.slug} data={template} />;
							})}
						</Stack>
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

const TemplateCard = ({
	data: { slug, title, description },
}: {
	data: { slug: string; title: string; description: string };
}) => {
	return (
		<Card as="li">
			<Flex flexDirection={['column', 'row']}>
				<Stack padding={1.5} gap={1} flexGrow={1}>
					<H3>{title}</H3>
					<Text>{description}</Text>
					<TextLink href={`./templates/${slug}`}>View</TextLink>
				</Stack>
				<img
					src={`/agds-next/img/templates/${slug}.jpg`}
					alt={`Screenshot of ${title} example`}
					height="auto"
					css={mq({
						width: ['100%', '40%'],
						maxWidth: [undefined, 300],
						objectFit: 'cover',
					})}
				/>
			</Flex>
		</Card>
	);
};

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../templates/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const templateList = await getTemplateList();

	const templateLinks = templateList.map(({ slug, title, description }) => ({
		href: `/templates/${slug}`,
		slug,
		label: title,
		description: description || null,
	}));

	return {
		props: {
			source,
			templateLinks,
		},
	};
}
