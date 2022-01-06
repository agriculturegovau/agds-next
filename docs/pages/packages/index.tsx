import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';

import {
	getPkg,
	getPkgSlugs,
	getMarkdownData,
	serializeMarkdown,
	getPkgList,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';
import { Content } from '@ag.ds-next/content';
import { Body } from '@ag.ds-next/body';
import { LinkList } from '@ag.ds-next/link-list';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({ pkgList, source }: StaticProps) {
	return (
		<Layout>
			<Content spacing="large">
				<Body>
					<MDXRemote {...source} components={mdxComponents} />
				</Body>
				<LinkList
					links={pkgList.map(({ title, slug }) => ({
						label: title,
						href: `/packages/${slug}`,
					}))}
				/>
				<EditPage slug="/packages" />
			</Content>
		</Layout>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../packages/README.md`)
	);
	const source = await serializeMarkdown(content);
	const pkgList = await getPkgList();

	return {
		props: {
			pkgList,
			source,
		},
	};
}
