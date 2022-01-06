import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex, Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

import {
	getAllNavItems,
	getAllPkgs,
	getPkg,
	Pkg,
	NavItems,
} from '../../lib/mdxUtils';

import { InlineCode } from '../../components/mdx/InlineCode';
import { mdxComponents } from '../../components/utils';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';

export default function Packages({
	navItems,
	pkg,
	slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout navItems={navItems}>
			{pkg ? (
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

					<MDXRemote {...pkg.source} components={mdxComponents} />

					<EditPage slug={`/packages/${pkg.slug}`} />
				</Flex>
			) : (
				<Flex as="main" flexDirection="column">
					<H1>Page data could not be found {slug}</H1>
				</Flex>
			)}
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<
	{ pkg: Pkg | undefined; navItems: NavItems; slug?: string },
	{ slug: string }
> = async ({ params }) => {
	const navItems = await getAllNavItems();

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
	const pkgs = await getAllPkgs();

	return {
		paths: pkgs.map((pkg) => {
			return {
				params: {
					slug: pkg.slug,
				},
			};
		}),
		fallback: false,
	};
};
