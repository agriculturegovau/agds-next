import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Content } from '@ag.ds-next/content';

import { getMarkdownData, serializeMarkdown } from '../lib/mdxUtils';
import { mdxComponents } from '../components/utils';
import { EditPage } from '../components/EditPage';
import { Layout } from '../components/Layout';
import { Body } from '@ag.ds-next/body';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function Homepage({ source }: StaticProps) {
	return (
		<Layout>
			<Content spacing="large">
				<Body>
					<MDXRemote {...source} components={mdxComponents} />
				</Body>
				<EditPage slug="/docs" />
			</Content>
		</Layout>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/README.md`)
	);
	const source = await serializeMarkdown(content);

	return {
		props: { source },
	};
}
