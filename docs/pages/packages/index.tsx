import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';

import {
	getNavItems,
	getMarkdownData,
	serializeMarkdown,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({ navItems, source }: StaticProps) {
	return (
		<Layout navItems={navItems}>
			<MDXRemote {...source} components={mdxComponents} />
			<EditPage slug="/packages" />
		</Layout>
	);
}

export async function getStaticProps() {
	const navItems = await getNavItems();
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../packages/README.md`)
	);
	const source = await serializeMarkdown(content);

	return {
		props: {
			navItems,
			source,
		},
	};
}
