import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { Prose } from '@ag.ds-next/react/prose';
import { Divider } from '@ag.ds-next/react/divider';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { getContent, getContentList } from '../../lib/mdx/content';
import { mdxComponents } from '../../components/mdxComponents';

export default function ContentPage({
	document,
	pageList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: document.title });
	return (
		<>
			<DocumentTitle
				description={document.description}
				title={document.title}
			/>
			<CategoryPageTemplate
				description={document.description as string}
				editPath="/docs/pages/content/index.tsx"
				title={document.title}
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{pageList.map(({ slug, title, description }) => (
						<Card as="li" clickable key={slug} shadow>
							<Flex flexDirection="column-reverse">
								<CardInner>
									<Stack flexGrow={1} gap={1}>
										<Heading as="h2" type="h4">
											<CardLink href={`/content/${slug}`}>{title}</CardLink>
										</Heading>
										<Text>{description}</Text>
									</Stack>
								</CardInner>
							</Flex>
						</Card>
					))}
				</Columns>
				<Divider />
				<Prose>
					<MDXRemote {...document.source} components={components} />
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
			document,
			pageList,
		},
	};
};
