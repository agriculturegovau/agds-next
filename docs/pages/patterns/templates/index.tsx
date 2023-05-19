import { Fragment } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Columns } from '@ag.ds-next/react/columns';
import { TextLink } from '@ag.ds-next/react/text-link';
import { H2 } from '@ag.ds-next/react/heading';
import {
	getTemplateGroupList,
	getTemplateList,
} from '../../../lib/mdx/templates';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SubcategoryPageTemplate } from '../../../components/SubcategoryPageTemplate';
import { TemplateCard } from '../../../components/TemplateCard';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({
	breadcrumbs,
	groupList,
	templateList,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates" />
			<SubcategoryPageTemplate
				title="Templates"
				editPath="/docs/pages/patterns/templates/index.tsx"
				breadcrumbs={breadcrumbs}
			>
				<Stack gap={3}>
					{groupList.map((group) => (
						<Stack gap={1.5} key={group.slug}>
							<H2 id={group.slug}>
								<TextLink href={`/patterns/templates/${group.slug}`}>
									{group.title}
								</TextLink>
							</H2>
							<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
								{templateList
									.filter((p) => p.group === group.slug)
									.map((template) => (
										<TemplateCard key={template.slug} {...template} />
									))}
							</Columns>
						</Stack>
					))}
				</Stack>
			</SubcategoryPageTemplate>
		</>
	);
}

export async function getStaticProps() {
	const groupList = await getTemplateGroupList();
	const templateList = await getTemplateList();

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Patterns', href: '/patterns' },
		{ label: 'Templates' },
	];

	return {
		props: {
			breadcrumbs,
			groupList,
			templateList,
		},
	};
}
