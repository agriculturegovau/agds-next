import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Columns } from '@ag.ds-next/react/columns';
import {
	getTemplateGroupList,
	getTemplateList,
	getTemplateNavLinks,
} from '../../../../lib/mdx/templates';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { SiteLayout } from '../../../../components/SiteLayout';
import { PageLayout } from '../../../../components/PageLayout';
import { PageTitle } from '../../../../components/PageTitle';
import { TemplateCard } from '../../../../components/TemplateCard';

export default function TemplatesPage({
	breadcrumbs,
	groupTemplateList,
	navLinks,
	title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Fragment>
			<DocumentTitle title="Templates" />
			<SiteLayout applyMainElement={false}>
				<PageLayout
					applyMainElement={true}
					sideNav={{
						title: 'Templates',
						titleLink: '/patterns/templates',
						items: navLinks,
					}}
					editPath="docs/pages/patterns/templates/[group]/index.tsx"
					breadcrumbs={breadcrumbs}
				>
					<PageTitle title={title} />
					<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
						{groupTemplateList.map((template) => (
							<TemplateCard key={template.slug} {...template} />
						))}
					</Columns>
				</PageLayout>
			</SiteLayout>
		</Fragment>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: { label: string; href?: string }[];
		groupTemplateList: Awaited<ReturnType<typeof getTemplateList>>;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		title: string;
	},
	{ group: string }
> = async ({ params }) => {
	const { group } = params ?? {};
	const groupList = await getTemplateGroupList();

	const activeGroup = group
		? groupList.find((g) => g.slug === group)
		: undefined;

	if (!(group && activeGroup)) {
		return { notFound: true };
	}

	const templateList = await getTemplateList();
	const groupTemplateList = templateList.filter((t) => t.group === group);

	const navLinks = await getTemplateNavLinks(group);

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Patterns', href: '/patterns' },
		{ label: 'Templates', href: '/patterns/templates' },
		{ label: activeGroup.title },
	];

	return {
		props: {
			breadcrumbs,
			groupTemplateList,
			navLinks,
			title: activeGroup.title,
		},
	};
};

export const getStaticPaths = async () => {
	const groups = await getTemplateGroupList();

	return {
		paths: groups.map(({ slug }) => ({
			params: { group: slug },
		})),
		fallback: false,
	};
};
