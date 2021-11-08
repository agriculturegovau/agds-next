import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { getAllPkgs, getPkgBySlug } from '../../lib/mdxUtils';
import { InlineCode } from '../../components/mdx/InlineCode';
import { mdxComponents } from '../../components/utils';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';
import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/flex';

export default function Packages({
	pkgs,
	source,
	data,
	name,
	version,
	slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout pkgs={pkgs}>
			<Flex as="main" flexDirection="column">
				<Flex flexDirection="column" gap={1}>
					<H1>{data.title}</H1>
					<div>
						<InlineCode>{name}</InlineCode> <InlineCode>v{version}</InlineCode>
					</div>
				</Flex>
				{data.description && (
					<p style={{ marginBottom: '3rem' }}>{data.description}</p>
				)}
				<MDXRemote {...source} components={mdxComponents} />

				<EditPage slug={`/packages/${slug}`} />
			</Flex>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<
	Record<string, any>,
	{ slug: string }
> = async ({ params }) => {
	const pkgs = await getAllPkgs();
	const slugPkg = await getPkgBySlug(params!.slug);

	return {
		props: {
			pkgs,
			...slugPkg,
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
