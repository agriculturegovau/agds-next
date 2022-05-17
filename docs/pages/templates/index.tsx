import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Body } from '@ag.ds-next/body';
import { mapSpacing, boxPalette } from '@ag.ds-next/core';
import { H3 } from '@ag.ds-next/heading';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/card';
import { mq } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';

import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import { getTemplateList } from '../../lib/mdx';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({ source, templateLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates" />
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

						<Box
							as="ul"
							css={mq({
								display: 'grid',
								gridGap: mapSpacing(1.5),
								gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
							})}
						>
							{templateLinks.map((template) => {
								return <TemplateCard key={template.slug} data={template} />;
							})}
						</Box>
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

const TemplateCard = ({
	data: { slug, label, description },
}: {
	data: { slug: string; label: string; description: string };
}) => {
	return (
		<Card as="li" clickable shadow>
			<Flex flexDirection="column-reverse">
				<CardInner>
					<Stack gap={1} flexGrow={1}>
						<H3>
							<CardLink href={`/templates/${slug}`}>{label}</CardLink>
						</H3>
						<Text>{description}</Text>
					</Stack>
				</CardInner>
				<img
					// To take a screenshot. Enter 'responsive design mode' in Safari, and take a
					// screenshot (cmd-shift-4) of the webpage in iPad Pro 10.5.
					src={`/agds-next/img/templates/${slug}.png`}
					alt={`Screenshot of ${label} example`}
					height="auto"
					width="100%"
					css={mq({
						borderBottom: `1px solid ${boxPalette.borderMuted}`,
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
