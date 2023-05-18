import { normalize } from 'path';
import { Fragment } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Columns } from '@ag.ds-next/react/columns';
import { TextLink } from '@ag.ds-next/react/text-link';
import { H2 } from '@ag.ds-next/react/heading';
import {
	getTemplateGroupList,
	getTemplateList,
	TEMPLATES_PATH,
} from '../../lib/mdx/templates';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { TemplateCard } from '../../components/TemplateCard';
import { getMarkdownData } from '../../lib/mdxUtils';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({
	title,
	description,
	groupList,
	templateList,
}: StaticProps) {
	return (
		<Fragment>
			<DocumentTitle title={title} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="docs/content/templates/index.mdx"
			>
				<Stack gap={3}>
					{groupList.map((group) => (
						<Stack gap={1.5} key={group.slug}>
							<H2 id={group.slug}>
								<TextLink href={`/templates/${group.slug}`}>
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
			</CategoryPageTemplate>
		</Fragment>
	);
}

export async function getStaticProps() {
	const { data } = await getMarkdownData(
		normalize(`${TEMPLATES_PATH}/index.mdx`)
	);

	const groupList = await getTemplateGroupList();
	const templateList = await getTemplateList();
	return {
		props: {
			title: data?.title as string,
			description: data?.description as string,
			groupList,
			templateList,
		},
	};
}
