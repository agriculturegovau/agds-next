import { normalize } from 'path';
import { Fragment } from 'react';
import { Columns } from '@ag.ds-next/react/columns';
import { boxPalette } from '@ag.ds-next/react/core';
import { Box } from '@ag.ds-next/react/box';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { mq } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { getTemplateList, TEMPLATES_PATH } from '../../lib/mdx/templates';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { getMarkdownData } from '../../lib/mdxUtils';
import { withBasePath } from '../../lib/img';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({
	title,
	description,
	templateList,
}: StaticProps) {
	return (
		<Fragment>
			<DocumentTitle title={title} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="docs/content/templates/index.mdx"
			>
				<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
					{templateList.map((template) => (
						<TemplateCard key={template.slug} {...template} />
					))}
				</Columns>
			</CategoryPageTemplate>
		</Fragment>
	);
}

function TemplateCard({
	title,
	slug,
	description,
}: {
	title: string;
	slug: string;
	description: string;
}) {
	return (
		<Card as="li" clickable shadow>
			<img
				src={withBasePath(`/img/templates/${slug}.webp`)}
				role="presentation"
				alt=""
				height="auto"
				width="100%"
				css={mq({
					borderBottom: `1px solid ${boxPalette.borderMuted}`,
					objectFit: 'cover',
				})}
			/>
			<CardInner>
				<Stack gap={1} flexGrow={1}>
					<Box as="h3">
						<CardLink href={`/templates/${slug}`}>{title}</CardLink>
					</Box>
					<Text>{description}</Text>
				</Stack>
			</CardInner>
		</Card>
	);
}

export async function getStaticProps() {
	const { data } = await getMarkdownData(
		normalize(`${TEMPLATES_PATH}/index.mdx`)
	);
	const templateList = await getTemplateList();
	return {
		props: {
			title: data?.title as string,
			description: data?.description as string,
			templateList,
		},
	};
}
