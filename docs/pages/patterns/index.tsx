import { normalize } from 'path';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { getMarkdownData } from '../../lib/mdxUtils';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { PATTERNS_PATH } from '../../lib/mdx/patterns';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

const templateLinks = [
	{
		label: 'Patterns',
		slug: 'patterns',
		description:
			'Patterns are reusable combinations of components that solve common user problems. These best practice solutions help users achieve their goals and help ensure consistency across experiences.',
	},
	{
		label: 'Templates',
		slug: 'templates',
		description:
			"Templates help your project up and running faster. They'll save your team time and resources and help get value to your users sooner.",
	},
];

export default function PatternsPage({ title, description }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates" description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/templates/index.mdx"
			>
				<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 2 }}>
					{templateLinks.map((template) => {
						return <TemplateCard key={template.slug} {...template} />;
					})}
				</Columns>
			</CategoryPageTemplate>
		</>
	);
}

const TemplateCard = ({
	slug,
	label,
	description,
}: {
	slug: string;
	label: string;
	description: string;
}) => {
	return (
		<Card as="li" clickable shadow>
			<Flex flexDirection="column-reverse">
				<CardInner>
					<Stack gap={1} flexGrow={1}>
						<Box as="h3">
							<CardLink href={`/patterns/${slug}`}>{label}</CardLink>
						</Box>
						<Text>{description}</Text>
					</Stack>
				</CardInner>
			</Flex>
		</Card>
	);
};

export async function getStaticProps() {
	const { data } = await getMarkdownData(
		normalize(`${PATTERNS_PATH}/index.mdx`)
	);
	return {
		props: {
			title: data?.title as string,
			description: data?.description as string,
		},
	};
}
