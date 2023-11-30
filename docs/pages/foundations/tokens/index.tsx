import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SubcategoryPageTemplate } from '../../../components/SubcategoryPageTemplate';
import { TOKEN_NAV_LINKS } from '../../../components/TokenLayout';
import {
	getFoundation,
	getFoundationBreadcrumbs,
} from '../../../lib/mdx/foundations';

export default function TokensPage({
	breadcrumbs,
	description,
	title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<SubcategoryPageTemplate
				title={title}
				breadcrumbs={breadcrumbs}
				editPath="/docs/pages/foundations/tokens/index.tsx"
			>
				<Text as="p" fontSize="md">
					{description}
				</Text>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{TOKEN_NAV_LINKS.map(({ href, label, description }) => (
						<Card key={href} as="li" clickable shadow>
							<Flex flexDirection="column-reverse">
								<CardInner>
									<Stack gap={1} flexGrow={1}>
										<Heading as="h2" type="h4">
											<CardLink href={href}>{label}</CardLink>
										</Heading>
										<Text>{description}</Text>
									</Stack>
								</CardInner>
							</Flex>
						</Card>
					))}
				</Columns>
			</SubcategoryPageTemplate>
		</>
	);
}

export const getStaticProps: GetStaticProps<{
	breadcrumbs: Awaited<ReturnType<typeof getFoundationBreadcrumbs>>;
	description: string | null;
	title: string;
}> = async () => {
	const { title, description } = await getFoundation('tokens');
	const breadcrumbs = await getFoundationBreadcrumbs('tokens');
	return {
		props: {
			breadcrumbs,
			description,
			title,
		},
	};
};
