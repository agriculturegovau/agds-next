import { normalize } from 'path';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Box } from '@ag.ds-next/react/box';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { getMarkdownData } from '../../../lib/mdxUtils';
import { GUIDE_PATH } from '../../../lib/mdx/guides';
import { getContentGuideList } from '../../../lib/mdx/guidesHowToWriteGuidance';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SubcategoryPageTemplate } from '../../../components/SubcategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function ContentGuidesHome({
	title,
	description,
	contentGuideList,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<SubcategoryPageTemplate
				title={title}
				breadcrumbs={[
					{ href: '/', label: 'Home' },
					{ href: '/guides', label: 'Guides' },
					{ label: title },
				]}
				editPath="/docs/content/guides/how-to-write-guidance.mdx"
			>
				<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
					{contentGuideList.map(({ slug, title, overview }) => (
						<Card as="li" key={title} clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<Box as="h3">
										<CardLink href={`/guides/how-to-write-guidance/${slug}`}>
											{title}
										</CardLink>
									</Box>
									{overview ? <Text as="p">{overview}</Text> : null}
								</Stack>
							</CardInner>
						</Card>
					))}
				</Columns>
			</SubcategoryPageTemplate>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await getMarkdownData(
		normalize(`${GUIDE_PATH}/how-to-write-guidance.mdx`)
	);
	const contentGuideList = await getContentGuideList();

	return {
		props: {
			title: data?.title as string,
			description: data?.overview as string,
			contentGuideList,
		},
	};
}
