import { normalize } from 'path';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { getMarkdownData } from '../../lib/mdxUtils';
import { getGuideList, GUIDE_PATH } from '../../lib/mdx/guides';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function GuidesHome({
	title,
	description,
	guideList,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Guides" description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/guides/index.mdx"
			>
				<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
					{guideList.map(({ slug, title, overview }) => (
						<Card as="li" key={title} clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<Box as="h3">
										<CardLink href={`/guides/${slug}`}>{title}</CardLink>
									</Box>
									{overview ? <Text as="p">{overview}</Text> : null}
								</Stack>
							</CardInner>
						</Card>
					))}
				</Columns>
			</CategoryPageTemplate>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await getMarkdownData(normalize(`${GUIDE_PATH}/index.mdx`));
	const guideList = await getGuideList();

	return {
		props: {
			title: data?.title as string,
			description: data?.description as string,
			guideList,
		},
	};
}
