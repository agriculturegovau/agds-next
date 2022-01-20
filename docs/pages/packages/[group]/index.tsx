import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getPkgList } from '../../../lib/mdxUtils';
import { AppLayout } from '../../../components/AppLayout';
import { PageLayout } from '../../../components/PageLayout';

export default function PackagesHome({
	group,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout>{group}</PageLayout>
		</AppLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pkgLinks: { href: string; label: string }[];
		group: string;
	},
	{ group: string }
> = async ({ params }) => {
	// Bail if page not found
	if (!params?.group) return { notFound: true };

	const pkgList = await getPkgList();
	const pkgLinks = pkgList
		.filter((p) => p.group === params?.group)
		.map(({ title, slug }) => ({
			label: title,
			href: `/packages/${slug}`,
		}));

	return {
		props: {
			pkgLinks,
			group: params.group,
		},
	};
};

export const getStaticPaths = async () => {
	const pgks = await getPkgList();
	const groups = new Set(pgks.map((p) => p.group));

	return {
		paths: Array.from(groups).map((group) => ({
			params: { group },
		})),
		fallback: false,
	};
};
