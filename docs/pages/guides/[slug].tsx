import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';

import {
	getGuide,
	getGuideList,
	getGuidesBreadcrumbs,
	getGuideSlugs,
	Guide,
} from '../../lib/mdxUtils';

import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';

export default function Guides({
	guide,
	guideLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout
				sideNav={{
					title: 'Guides',
					titleLink: '/guides',
					items: guideLinks,
				}}
				editPath={`/guides/${guide.slug}.mdx`}
				breadcrumbs={breadcrumbs}
			>
				<Flex as="main" flexDirection="column" gap={1} alignItems="flex-start">
					<H1>{guide.data.title}</H1>
					<Body>
						<MDXRemote {...guide.source} components={mdxComponents} />
					</Body>
				</Flex>
			</PageLayout>
		</AppLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		guide: Guide;
		guideLinks: { href: string; label: string }[];
		breadcrumbs: Awaited<ReturnType<typeof getGuidesBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const guide = slug ? await getGuide(slug) : undefined;
	const guideList = await getGuideList();
	const guideLinks = guideList.map(({ title, slug }) => ({
		href: `/guides/${slug}`,
		label: title,
	}));

	if (!(slug && guide)) {
		return { notFound: true };
	}

	const breadcrumbs = await getGuidesBreadcrumbs(slug);

	return {
		props: {
			guide,
			guideLinks,
			breadcrumbs,
			slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getGuideSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
