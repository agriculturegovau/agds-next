import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex, Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';

import {
	getNavItems,
	getPkg,
	Pkg,
	NavItems,
	getPkgSlugs,
} from '../../lib/mdxUtils';

import { InlineCode } from '../../components/mdx/InlineCode';
import { mdxComponents } from '../../components/utils';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';
import { Content } from '@ag.ds-next/content';

export default function Packages({
	pkg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	if (!pkg) return null;

	return (
		<Layout>
			<Content>
				<Flex as="main" flexDirection="column" gap={1}>
					<Flex flexDirection="column" gap={1}>
						<H1>{pkg.data.title}</H1>
						<Box>
							<InlineCode>{pkg.name}</InlineCode>{' '}
							<InlineCode>v{pkg.version}</InlineCode>
						</Box>
						{pkg.data.description && <Text>{pkg.data.description}</Text>}
					</Flex>
					<Box
						theme="light"
						rounded
						background="shade"
						paddingX={1}
						fontSize="sm"
						color="text"
					>
						<pre>
							<code>
								yarn add {pkg.name}@{pkg.version}
							</code>
						</pre>
					</Box>
				</Flex>
			</Content>
			<Content>
				<Body>
					<MDXRemote {...pkg.source} components={mdxComponents} />
				</Body>

				<EditPage slug={`/packages/${pkg.slug}`} />
			</Content>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<
	{ pkg: Pkg | undefined; navItems: NavItems; slug?: string },
	{ slug: string }
> = async ({ params }) => {
	const navItems = await getNavItems();

	const pkg = params ? await getPkg(params.slug) : undefined;

	return {
		props: {
			navItems,
			pkg,
			slug: params?.slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getPkgSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
