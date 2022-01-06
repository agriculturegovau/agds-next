import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';

import { getAllNavItems, getMarkdown } from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { EditPage } from '../../components/EditPage';
import { Layout } from '../../components/Layout';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({ navItems, source }: StaticProps) {
	return (
		<Layout navItems={navItems}>
			<MDXRemote {...source} components={mdxComponents} />
			<EditPage slug="/releases" filename="index.mdx" />
		</Layout>
	);
}

export async function getStaticProps() {
	const navItems = await getAllNavItems();
	const { source } = await getMarkdown(
		normalize(`${process.cwd()}/../releases/index.mdx`)
	);

	return {
		props: {
			navItems,
			source,
		},
	};
}
