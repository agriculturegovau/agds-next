import { normalize } from 'path';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Stack } from '@ag.ds-next/react/box';
import { Heading } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { getUpdatesList, UPDATE_PATH } from '../../lib/mdx/updates';
import { getMarkdownData } from '../../lib/mdxUtils';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function UpdatesHome({
	title,
	description,
	updateLinks,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Updates" description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/updates/index.mdx"
			>
				<Columns cols={{ xs: 1, lg: 3 }}>
					<Column columnSpan={{ xs: 1, lg: 2 }}>
						<Stack as="ul" gap={1.5}>
							{updateLinks.map(({ href, label, description }) => (
								<Card as="li" key={label} clickable shadow>
									<CardInner>
										<Stack gap={1}>
											<Heading type="h3">
												<CardLink href={href}>{label}</CardLink>
											</Heading>
											{description ? <Text as="p">{description}</Text> : null}
										</Stack>
									</CardInner>
								</Card>
							))}
						</Stack>
					</Column>
				</Columns>
			</CategoryPageTemplate>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await getMarkdownData(normalize(`${UPDATE_PATH}/index.mdx`));
	const updatesList = await getUpdatesList();
	const updateLinks = updatesList.map(({ slug, title, description }) => ({
		href: `/updates/${slug}`,
		label: title,
		description,
	}));

	return {
		props: {
			title: (data?.title || null) as string,
			description: (data?.description || null) as string,
			updateLinks,
		},
	};
}
