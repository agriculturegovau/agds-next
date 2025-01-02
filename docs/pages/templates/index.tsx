import { normalize } from 'path';
import { Fragment } from 'react';
import { Columns } from '@ag.ds-next/react/columns';
import { boxPalette, mq } from '@ag.ds-next/react/core';
import { Heading } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
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
				description={description}
				editPath="docs/content/templates/index.mdx"
				title={title}
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }} gap={1.5}>
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
				alt=""
				css={mq({
					borderBottom: `1px solid ${boxPalette.borderMuted}`,
					objectFit: 'cover',
				})}
				height="auto"
				role="presentation"
				src={withBasePath(`/img/templates/${slug}.webp`)}
				width="100%"
			/>
			<CardInner>
				<Stack flexGrow={1} gap={1}>
					<Heading as="h2" type="h4">
						<CardLink href={`/templates/${slug}`}>{title}</CardLink>
					</Heading>
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
