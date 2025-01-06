import { normalize } from 'path';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Heading } from '@ag.ds-next/react/heading';
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
			<DocumentTitle description={description} title={title} />
			<SubcategoryPageTemplate
				breadcrumbs={[
					{ href: '/', label: 'Home' },
					{ href: '/guides', label: 'Guides' },
					{ label: title },
				]}
				editPath="/docs/content/guides/how-to-write-guidance.mdx"
				title={title}
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }} gap={1.5}>
					{contentGuideList.map(({ slug, title, overview }) => (
						<Card as="li" clickable key={title} shadow>
							<CardInner>
								<Stack gap={1}>
									<Heading as="h2" type="h4">
										<CardLink href={`/guides/how-to-write-guidance/${slug}`}>
											{title}
										</CardLink>
									</Heading>
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
