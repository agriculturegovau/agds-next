import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';
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
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { Tag } from '@ag.ds-next/tags';

export default function Releases({
	release,
	releaseLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={release.data.title} />
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
					<Flex
						as="main"
						flexDirection="column"
						gap={1}
						alignItems="flex-start"
					>
						<H1>{release.data.title}</H1>
						{release.data.type && <Tag>{release.data.type}</Tag>}
						<Body>
							<MDXRemote {...release.source} components={mdxComponents} />
						</Body>
					</Flex>
				</PageLayout>
			</AppLayout>
		</>
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
