import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';

import {
	getNavItems,
	getRelease,
	getReleaseSlugs,
	Release,
	NavItems,
} from '../../lib/mdxUtils';

import { mdxComponents } from '../../components/utils';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';

export default function Packages({
	navItems,
	release,
	slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout navItems={navItems}>
			{release ? (
				<Flex as="main" flexDirection="column" gap={1}>
					<H1>{release.data.title}</H1>
					{release.data.type && (
						<p style={{ marginBottom: '3rem' }}>{release.data.type}</p>
					)}
					<MDXRemote {...release.source} components={mdxComponents} />

					<EditPage slug={`/releases/${release.slug}`} />
				</Flex>
			) : (
				<Flex as="main" flexDirection="column">
					<H1>Page data could not be found for &lquo;{slug}&rquo;</H1>
				</Flex>
			)}
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<
	{ release: Release | undefined; navItems: NavItems; slug?: string },
	{ slug: string }
> = async ({ params }) => {
	const navItems = await getNavItems();

	const release = params ? await getRelease(params.slug) : undefined;

	return {
		props: {
			navItems,
			release,
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
