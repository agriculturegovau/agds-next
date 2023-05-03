import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { getContentList } from '../../lib/mdx/content';

const title = 'Content';
const description =
	'Basic principles to create clear and consistent content in the Export Service. Learn how to express, structure and style content that meets users’ needs.';

export default function ContentPage({
	list,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/pages/content/index.tsx"
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{list.map(({ slug, title, description }) => (
						<Card key={slug} as="li" clickable shadow>
							<Flex flexDirection="column-reverse">
								<CardInner>
									<Stack gap={1} flexGrow={1}>
										<Box as="h3">
											<CardLink href={`/content/${slug}`}>{title}</CardLink>
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
	list: Awaited<ReturnType<typeof getContentList>>;
}> = async () => {
	return {
		props: {
			list: await getContentList(),
		},
	};
};
