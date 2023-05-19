import { normalize } from 'path';
import { Fragment } from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { getMarkdownData } from '../../lib/mdxUtils';
import { PATTERNS_PATH } from '../../lib/mdx/patterns';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PatternsPage({ title, description }: StaticProps) {
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/patterns/index.mdx"
			>
				<Stack gap={3}>
					<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2 }}>
						<PatternCard
							title="Patterns"
							slug="patterns"
							description="Patterns are reusable compositions of components that solve design problems and help ensure consistency across the service."
						/>
						<PatternCard
							title="Templates"
							slug="templates"
							description="Templates can get your project up and running faster. They'll save your team time and resources and help get value to your users sooner."
						/>
					</Columns>
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
	return {
		props: {
			title: data?.title as string,
			description: data?.description as string,
		},
	};
}
