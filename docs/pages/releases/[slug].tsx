import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Box, Flex } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';

import {
	getRelease,
	getReleaseBreadcrumbs,
	getReleaseList,
	getReleaseSlugs,
	Release,
} from '../../lib/mdxUtils';

import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';

export default function Releases({
	release,
	releaseLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout
				sideNav={{
					title: 'Releases',
					titleLink: '/releases',
					items: releaseLinks,
				}}
				editPath={`/releases/${release.slug}.mdx`}
				breadcrumbs={breadcrumbs}
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
					<Body>
						<MDXRemote {...release.source} components={mdxComponents} />
					</Body>
				</Flex>
			</PageLayout>
		</AppLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		release: Release;
		releaseLinks: { href: string; label: string }[];
		breadcrumbs: Awaited<ReturnType<typeof getReleaseBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const release = slug ? await getRelease(slug) : undefined;
	const releaseList = await getReleaseList();
	const releaseLinks = releaseList.map(({ title, slug }) => ({
		href: `/releases/${slug}`,
		label: title,
	}));

	if (!(slug && release)) {
		return { notFound: true };
	}

	const breadcrumbs = await getReleaseBreadcrumbs(slug);

	return {
		props: {
			release,
			releaseLinks,
			breadcrumbs,
			slug,
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
