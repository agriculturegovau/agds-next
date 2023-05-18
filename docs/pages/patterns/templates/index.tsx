import { Fragment } from 'react';
import { boxPalette } from '@ag.ds-next/react/core';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { mq } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { H2 } from '@ag.ds-next/react/heading';
import { withBasePath } from '../../../lib/img';
import {
	getTemplateGroupList,
	getTemplateList,
} from '../../../lib/mdx/templates';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SubcategoryPageTemplate } from '../../../components/SubcategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({
	breadcrumbs,
	groupList,
	templateList,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates" />
			<SubcategoryPageTemplate
				title="Templates"
				editPath="/docs/content/patterns/index.mdx" // TODO
				breadcrumbs={breadcrumbs}
			>
				<Stack gap={3}>
					{groupList.map((group) => (
						<Stack gap={1.5} key={group.slug}>
							<H2 id={group.slug}>
								<TextLink href={`/patterns/templates/${group.slug}`}>
									{group.title}
								</TextLink>
							</H2>
							<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
								{templateList
									.filter((p) => p.group === group.slug)
									.map((pattern) => (
										<PatternCard key={pattern.slug} {...pattern} />
									))}
							</Columns>
						</Stack>
					))}
				</Stack>
			</SubcategoryPageTemplate>
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
						<CardLink href={`/patterns/templates/${group}/${slug}`}>
							{title}
						</CardLink>
					</Box>
					<Text>{description}</Text>
				</Stack>
			</CardInner>
		</Card>
	);
}

export async function getStaticProps() {
	const groupList = await getTemplateGroupList();
	const templateList = await getTemplateList();

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Patterns', href: '/patterns' },
		{ label: 'Templates' },
	];

	return {
		props: {
			breadcrumbs,
			groupList,
			templateList,
		},
	};
}
