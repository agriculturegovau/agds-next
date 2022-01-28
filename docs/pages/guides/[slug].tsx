import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';

import {
	getGuide,
	getGuideList,
	getGuideSlugs,
	Guide,
} from '../../lib/mdxUtils';

import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';

export default function Guides({
	guide,
	guideLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout
				navTitle="Guides"
				navTitleLink="/guides"
				navLinks={guideLinks}
				editPath={`/guides/${guide.slug}.mdx`}
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
	},
	{ slug: string }
> = async ({ params }) => {
	const guide = params ? await getGuide(params.slug) : undefined;
	const guideList = await getGuideList();
	const guideLinks = guideList.map(({ title, slug }) => ({
		href: `/guides/${slug}`,
		label: title,
	}));

	if (!guide) {
		return { notFound: true };
	}

	return {
		props: {
			guide,
			guideLinks,
			slug: params?.slug,
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
