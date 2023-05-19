import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { boxPalette } from '@ag.ds-next/react/core';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { mq } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { withBasePath } from '../../../../lib/img';
import {
	getTemplateGroupList,
	getTemplateList,
	getTemplateNavLinks,
} from '../../../../lib/mdx/templates';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { SiteLayout } from '../../../../components/SiteLayout';
import { PageLayout } from '../../../../components/PageLayout';
import { PageTitle } from '../../../../components/PageTitle';

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
					editPath="" // TODO
					breadcrumbs={breadcrumbs}
				>
					<PageTitle title={title} />
					<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
						{groupTemplateList.map(({ slug, group, description, title }) => (
							<Card key={slug} as="li" clickable shadow>
								<img
									src={withBasePath(`/img/templates/${slug}.webp`)}
									role="presentation"
									alt=""
									height="auto"
									width="100%"
									css={mq({
										borderBottom: `1px solid ${boxPalette.borderMuted}`,
										objectFit: 'cover',
									})}
								/>
								<CardInner>
									<Stack gap={1} flexGrow={1}>
										<Box as="h3">
											<CardLink href={`/patterns/templates/${group}/${slug}`}>
												{title}
											</CardLink>
										</Box>
										<Text>{description}</Text>
									</Stack>
								</CardInner>
							</Card>
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
