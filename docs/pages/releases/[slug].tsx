import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Box, Flex } from '@ag.ds-next/box';

import {
	getRelease,
	getReleaseList,
	getReleaseSlugs,
	Release,
} from '../../lib/mdxUtils';

import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';

export default function Packages({
	release,
	releaseLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout
				navLinks={releaseLinks}
				editPath={`/releases/${release.slug}.mdx`}
			>
				<Flex as="main" flexDirection="column" gap={1} alignItems="flex-start">
					<H1>{release.data.title}</H1>
					{release.data.type && (
						<Box
							background="shade"
							paddingX={0.25}
							border
							rounded
							fontSize="xs"
							display="inline-block"
						>
							{release.data.type}
						</Box>
					)}
					<Box>
						<MDXRemote {...release.source} components={mdxComponents} />
					</Box>
				</Flex>
			</PageLayout>
		</AppLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		release: Release;
		releaseLinks: { href: string; label: string }[];
	},
	{ slug: string }
> = async ({ params }) => {
	const release = params ? await getRelease(params.slug) : undefined;
	const releaseList = await getReleaseList();
	const releaseLinks = releaseList.map(({ title, slug }) => ({
		href: `/releases/${slug}`,
		label: title,
	}));

	if (!release) {
		return { notFound: true };
	}

	return {
		props: {
			release,
			releaseLinks,
			slug: params?.slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getReleaseSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
