import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';
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
				<Text as="p" fontSize="md" maxWidth={tokens.maxWidth.bodyText}>
					{description}
				</Text>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{TOKEN_NAV_LINKS.map(({ href, label, description }) => (
						<Card key={href} as="li" clickable shadow>
							<Flex flexDirection="column-reverse">
								<CardInner>
									<Stack gap={1} flexGrow={1}>
										<Box as="h3">
											<CardLink href={href}>{label}</CardLink>
										</Box>
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
