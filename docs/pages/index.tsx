import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';

import { getAllNavItems, getMarkdown } from '../lib/mdxUtils';
import { mdxComponents } from '../components/utils';
import { EditPage } from '../components/EditPage';
import { Layout } from '../components/Layout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function Homepage({ navItems, source }: StaticProps) {
	return (
		<Layout navItems={navItems}>
			<MDXRemote {...source} components={mdxComponents} />
			<EditPage slug="/docs" />
		</Layout>
	);
}

export async function getStaticProps() {
	const navItems = await getAllNavItems();
	const { source } = await getMarkdown(normalize(`${process.cwd()}/README.md`));

	return {
		props: {
			navItems,
			source,
		},
	};
}
