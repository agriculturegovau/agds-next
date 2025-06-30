import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SubcategoryPageTemplate } from '../../../components/SubcategoryPageTemplate';
import { ACCESSIBILITY_NAV_LINKS } from '../../../components/AccessibilityLayout';
import {
	getFoundation,
	getFoundationBreadcrumbs,
} from '../../../lib/mdx/foundations';

export default function AccessibilityPage({
	breadcrumbs,
	description,
	title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle description={description} title={title} />
			<SubcategoryPageTemplate
				breadcrumbs={breadcrumbs}
				editPath="/docs/pages/foundations/accessibility/index.tsx"
				title={title}
			>
				<Text as="p" fontSize="md" maxWidth={tokens.maxWidth.bodyText}>
					{description}
				</Text>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{ACCESSIBILITY_NAV_LINKS.map(({ href, label, description }) => (
						<Card as="li" clickable key={href} shadow>
							<Flex flexDirection="column-reverse">
								<CardInner>
									<Stack flexGrow={1} gap={1}>
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
	const { title, description } = await getFoundation('accessibility');
	const breadcrumbs = await getFoundationBreadcrumbs('accessibility');
	return {
		props: {
			breadcrumbs,
			description,
			title,
		},
	};
};
