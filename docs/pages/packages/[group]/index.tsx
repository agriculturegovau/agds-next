import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Flex } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';

import { AppLayout } from '../../../components/AppLayout';
import { PageLayout } from '../../../components/PageLayout';
import { PkgCard } from '../../../components/PkgCard';
import {
	getPkgList,
	getPkgGroupList,
	getPkgNavLinks,
	getGroupBreadCrumbs,
} from '../../../lib/mdxUtils';

export default function PackagesHome({
	group,
	pkgList,
	navLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout
				navTitle="Packages"
				navTitleLink="/packages"
				navLinks={navLinks}
				breadcrumbs={breadcrumbs}
			>
				<H1>{group.title}</H1>
				<Flex gap={2} flexWrap="wrap">
					{pkgList.map((pkg) => (
						<PkgCard key={pkg.slug} pkg={pkg} />
					))}
				</Flex>
			</PageLayout>
		</AppLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		navLinks: { href: string; label: string }[];
		pkgList: Awaited<ReturnType<typeof getPkgList>>;
		breadcrumbs: Awaited<ReturnType<typeof getGroupBreadCrumbs>>;
		group: { slug: string; title: string };
	},
	{ group: string }
> = async ({ params }) => {
	const groupSlug = params?.group;
	const groupList = await getPkgGroupList();
	const group = groupSlug
		? groupList.find((g) => g.slug === groupSlug)
		: undefined;

	if (!(groupSlug && group)) return { notFound: true };

	const navLinks = await getPkgNavLinks(groupSlug);
	const pkgList = await getPkgList(groupSlug);
	const breadcrumbs = await getGroupBreadCrumbs(groupSlug);

	return {
		props: {
			navLinks,
			pkgList,
			group,
			breadcrumbs,
		},
	};
};

export const getStaticPaths = async () => {
	const groupList = await getPkgGroupList();
	return {
		paths: groupList.map((g) => ({
			params: { group: g.slug },
		})),
		fallback: false,
	};
};
