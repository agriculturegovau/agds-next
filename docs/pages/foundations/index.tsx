import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { getFoundationList } from '../../lib/mdx/foundations';

const title = 'Foundations';
const description =
	'Discover all the foundational elements that make up the Agriculture Design System including colors, typography, spacing, and more.';

export default function FoundationsPage({
	list,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/pages/foundations/index.tsx"
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{list.map(({ slug, title, description }) => (
						<Card key={slug} as="li" clickable shadow>
							<Flex flexDirection="column-reverse">
								<CardInner>
									<Stack gap={1} flexGrow={1}>
										<Box as="h3">
											<CardLink href={`/foundations/${slug}`}>{title}</CardLink>
										</Box>
										<Text>{description}</Text>
									</Stack>
								</CardInner>
							</Flex>
						</Card>
					))}
				</Columns>
			</CategoryPageTemplate>
		</>
	);
}

export const getStaticProps: GetStaticProps<{
	list: Awaited<ReturnType<typeof getFoundationList>>;
}> = async () => {
	return {
		props: {
			list: await getFoundationList(),
		},
	};
};
