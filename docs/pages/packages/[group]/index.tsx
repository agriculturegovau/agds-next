import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getPkgList, getPkgGroupList } from '../../../lib/mdxUtils';
import { AppLayout } from '../../../components/AppLayout';
import { PageLayout } from '../../../components/PageLayout';
import { Box } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';

export default function PackagesHome({
	group,
	pkgList,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout navLinks={navLinks}>
				<H1>{group.name}</H1>
				<Box>
					{pkgList.map((p) => (
						<Box key={p.slug} border>
							{p.title}
						</Box>
					))}
				</Box>
			</PageLayout>
		</AppLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		navLinks: { href: string; label: string }[];
		pkgList: any[];
		group: { slug: string; name: string };
	},
	{ group: string }
> = async ({ params }) => {
	// Bail if page not found
	const groupList = await getPkgGroupList();

	const group = params?.group
		? groupList.find((g) => g.name === params.group)
		: undefined;

	if (!group) return { notFound: true };

	const pkgList = await getPkgList(group.slug);

	const navLinks = groupList.map((g) => {
		if (g.slug === group.slug) {
			return {
				label: g.name,
				href: `/packages/${g.slug}`,
				children: pkgList.map(({ title, slug }) => ({
					label: title,
					href: `/packages/${group.slug}/${slug}`,
				})),
			};
		}

		return {
			label: g.name,
			href: `/packages/${g.slug}`,
		};
	});

	return {
		props: {
			navLinks,
			pkgList,
			group,
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
