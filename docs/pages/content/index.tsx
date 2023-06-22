import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { Prose } from '@ag.ds-next/react/prose';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { getContent, getContentList } from '../../lib/mdx/content';
import { mdxComponents } from '../../components/mdxComponents';

export default function ContentPage({
	document,
	pageList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle
				title={document.title}
				description={document.description}
			/>
			<CategoryPageTemplate
				title={document.title}
				description={document.description as string}
				editPath="/docs/pages/content/index.tsx"
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{pageList.map(({ slug, title, description }) => (
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
				<Prose>
					<MDXRemote {...document.source} components={mdxComponents} />
				</Prose>
			</CategoryPageTemplate>
		</>
	);
}

export const getStaticProps: GetStaticProps<{
	document: Awaited<ReturnType<typeof getContent>>;
	pageList: Awaited<ReturnType<typeof getContentList>>;
}> = async () => {
	const document = await getContent('index');
	const pageList = await getContentList();
	return {
		props: {
			pageList,
			document,
		},
	};
};
