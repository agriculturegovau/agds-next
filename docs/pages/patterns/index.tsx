import { normalize } from 'path';
import { Fragment } from 'react';
import { boxPalette } from '@ag.ds-next/react/core';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { mq } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { getMarkdownData } from '../../lib/mdxUtils';
import {
	getPatternList,
	getPatternGroupList,
	PATTERNS_PATH,
} from '../../lib/mdx/patterns';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { withBasePath } from '../../lib/img';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PatternsPage({
	title,
	description,
	groupList,
	patternList,
}: StaticProps) {
	console.log({ groupList });
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
							<H2 id={group.slug}>{group.title}</H2>
							{group.subGroups.length > 0 ? (
								<Fragment>
									{group.subGroups.map((subGroup) => (
										<Stack key={subGroup.slug} gap={1.5}>
											<H3 id={`${group.slug}-${subGroup.slug}`}>
												{subGroup.title}
											</H3>
											<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
												{patternList
													.filter(
														(p) =>
															p.group === group.slug &&
															p.subGroup === subGroup.slug
													)
													.map((pattern) => (
														<PatternCard key={pattern.slug} {...pattern} />
													))}
											</Columns>
										</Stack>
									))}
								</Fragment>
							) : (
								<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
									{patternList
										.filter((p) => p.group === group.slug)
										.map((pattern) => (
											<PatternCard key={pattern.slug} {...pattern} />
										))}
								</Columns>
							)}
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
	group,
}: {
	title: string;
	slug: string;
	description: string;
	group: string;
}) {
	return (
		<Card as="li" clickable shadow>
			{group === 'templates' ? (
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
			) : null}
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
