import { Fragment } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Columns } from '@ag.ds-next/react/columns';
import { TextLink } from '@ag.ds-next/react/text-link';
import { H2 } from '@ag.ds-next/react/heading';
import { getTemplateGroupList, getTemplateList } from '../../lib/mdx/templates';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { TemplateCard } from '../../components/TemplateCard';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({
	groupList,
	templateList,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates" />
			<CategoryPageTemplate
				title="Pattern"
				description="Patterns are reusable compositions of components that solve design problems and help ensure consistency across the service. They'll save your team time and resources and help get value to your users sooner."
				editPath="/docs/pages/patterns/index.tsx"
			>
				<Stack gap={3}>
					{[groupList[1], ...groupList.filter((_, idx) => idx !== 1)].map(
						(group) => (
							<Stack gap={1.5} key={group.slug}>
								<H2 id={group.slug}>
									<TextLink href={`/patterns/${group.slug}`}>
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
						)
					)}
				</Stack>
			</CategoryPageTemplate>
		</>
	);
}

export async function getStaticProps() {
	const groupList = await getTemplateGroupList();
	const templateList = await getTemplateList();
	return {
		props: {
			groupList,
			templateList,
		},
	};
}
