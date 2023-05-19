import { Fragment } from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { getPatternList } from '../../../lib/mdx/patterns';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SubcategoryPageTemplate } from '../../../components/SubcategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PatternsPage({
	breadcrumbs,
	patternList,
}: StaticProps) {
	return (
		<Fragment>
			<DocumentTitle title="Patterns" />
			<SubcategoryPageTemplate
				title="Patterns"
				editPath="/docs/pages/patterns/patterns/index.tsx"
				breadcrumbs={breadcrumbs}
			>
				<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
					{patternList.map((pattern) => (
						<PatternCard key={pattern.slug} {...pattern} />
					))}
				</Columns>
			</SubcategoryPageTemplate>
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
						<CardLink href={`/patterns/patterns/${slug}`}>{title}</CardLink>
					</Box>
					<Text>{description}</Text>
				</Stack>
			</CardInner>
		</Card>
	);
}

export async function getStaticProps() {
	const patternList = await getPatternList();

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Patterns', href: '/patterns' },
		{ label: 'Patterns' },
	];

	return {
		props: {
			breadcrumbs,
			patternList,
		},
	};
}
