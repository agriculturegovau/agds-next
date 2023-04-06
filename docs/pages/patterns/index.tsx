import { normalize } from 'path';
import { boxPalette } from '@ag.ds-next/react/core';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { mq } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { H2 } from '@ag.ds-next/react/heading';
import { getMarkdownData } from '../../lib/mdxUtils';
import {
	getPatternList,
	getPatternGroupList,
	PATTERNS_PATH,
} from '../../lib/mdx/patterns';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PatternsPage({
	title,
	description,
	groupList,
	patternList,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/patterns/index.mdx"
			>
				<Stack gap={3}>
					{groupList.map((group) => (
						<Stack gap={1.5} key={group.slug}>
							<H2>{group.title}</H2>
							<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
								{patternList
									.filter((p) => p.group === group.slug)
									.map((pattern) => (
										<PatternCard key={pattern.slug} {...pattern} />
									))}
							</Columns>
						</Stack>
					))}
				</Stack>
			</CategoryPageTemplate>
		</>
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
		<Card as="li" clickable shadow>
			<Flex flexDirection="column-reverse">
				<CardInner>
					<Stack gap={1} flexGrow={1}>
						<Box as="h3">
							<CardLink href={`/patterns/${slug}`}>{title}</CardLink>
						</Box>
						<Text>{description}</Text>
					</Stack>
				</CardInner>
				<img
					src={`/img/templates/${slug}.webp`}
					role="presentation"
					alt=""
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
}

export async function getStaticProps() {
	const { data } = await getMarkdownData(
		normalize(`${PATTERNS_PATH}/index.mdx`)
	);
	const groupList = await getPatternGroupList();
	const patternList = await getPatternList();
	return {
		props: {
			title: data?.title as string,
			description: data?.description as string,
			groupList,
			patternList,
		},
	};
}
