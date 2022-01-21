import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';

import {
	getPkgList,
	getPkg,
	Pkg,
	getPkgNavLinks,
	getPkgBreadcrumbs,
} from '../../../lib/mdxUtils';

import { mdxComponents } from '../../../components/utils';
import { AppLayout } from '../../../components/AppLayout';
import { PageLayout } from '../../../components/PageLayout';

export default function Packages({
	pkg,
	navLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AppLayout>
			<PageLayout
				navLinks={navLinks}
				editPath={`/packages/${pkg.slug}/README.md`}
				breadcrumbs={breadcrumbs}
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
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
	},
	{ slug: string; group: string }
> = async ({ params }) => {
	const { slug, group } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;

	if (!(slug && group && pkg)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks(group);
	const breadcrumbs = await getPkgBreadcrumbs(slug);

	return {
		props: {
			pkg,
			navLinks,
			breadcrumbs,
		},
	};
};

export const getStaticPaths = async () => {
	const packages = await getPkgList();

	return {
		paths: packages.map(({ group, slug }) => ({
			params: { group, slug },
		})),
		fallback: false,
	};
};
