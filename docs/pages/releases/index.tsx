import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Body } from '@ag.ds-next/body';

import {
	getMarkdownData,
	getReleaseList,
	serializeMarkdown,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function ReleasesHome({ source, releaseLinks }: StaticProps) {
	return (
		<AppLayout>
			<PageLayout
				sideNav={{
					title: 'Releases',
					titleLink: '/releases',
					items: releaseLinks,
				}}
				editPath="/releases/index.mdx"
			>
				<Body>
					<MDXRemote {...source} components={mdxComponents} />
				</Body>
			</PageLayout>
		</AppLayout>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../releases/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const releaseList = await getReleaseList();
	const releaseLinks = releaseList.map(({ slug, title }) => ({
		href: `/releases/${slug}`,
		label: title,
	}));

	return {
		props: {
			source,
			releaseLinks,
		},
	};
}
