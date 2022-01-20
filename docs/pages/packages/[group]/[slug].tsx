import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';

import { getPkgList, getPkg, Pkg, getPkgSlugs } from '../../../lib/mdxUtils';

import { mdxComponents } from '../../../components/utils';
import { AppLayout } from '../../../components/AppLayout';
import { PageLayout } from '../../../components/PageLayout';

export default function Packages({
	pkg,
	pkgLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout
				navLinks={pkgLinks}
				editPath={`/packages/${pkg.slug}/README.md`}
			>
				<Stack as="main" gap={1}>
					<Flex flexDirection="column" gap={0.25}>
						<Text fontSize="sm" color="muted">
							v{pkg.version}
						</Text>
						<H1>{pkg.data.title}</H1>
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
					<Body>
						<MDXRemote {...pkg.source} components={mdxComponents} />
					</Body>
				</Stack>
			</PageLayout>
		</AppLayout>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pkg: Pkg;
		pkgLinks: { href: string; label: string }[];
		slug?: string;
	},
	{ slug: string }
> = async ({ params }) => {
	const pkgList = await getPkgList();
	const pkg = params ? await getPkg(params.slug) : undefined;

	if (!pkg) {
		return { notFound: true };
	}

	const pkgLinks = pkgList.map(({ slug, title }) => ({
		href: `/packages/${slug}`,
		label: title,
	}));

	return {
		props: {
			pkg,
			pkgLinks,
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
