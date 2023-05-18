import { normalize } from 'path';
import { Fragment } from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { getPatternList, PATTERNS_PATH } from '../../lib/mdx/patterns';
import { getMarkdownData } from '../../lib/mdxUtils';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PatternsPage({
	title,
	description,
	patternList,
}: StaticProps) {
	return (
		<Fragment>
			<DocumentTitle title={title} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/patterns/index.mdx"
			>
				<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
					{patternList.map((pattern) => (
						<PatternCard key={pattern.slug} {...pattern} />
					))}
				</Columns>
			</CategoryPageTemplate>
		</Fragment>
	);
}

function PatternCard({
	title,
	slug,
	description,
}: {
	title: string;
	slug: string;
	description: string;
}) {
	return (
		<Card key={slug} as="li" clickable shadow>
			<CardInner>
				<Stack gap={1} flexGrow={1}>
					<Box as="h3">
						<CardLink href={`/patterns/${slug}`}>{title}</CardLink>
					</Box>
					<Text>{description}</Text>
				</Stack>
			</CardInner>
		</Card>
	);
}

export async function getStaticProps() {
	const { data } = await getMarkdownData(
		normalize(`${PATTERNS_PATH}/index.mdx`)
	);
	const patternList = await getPatternList();
	return {
		props: {
			title: data?.title as string,
			description: data?.description as string,
			patternList,
		},
	};
}
