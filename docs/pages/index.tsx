import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';

import { getMarkdownData, serializeMarkdown } from '../lib/mdxUtils';
import { mdxComponents } from '../components/utils';
import { AppLayout } from '../components/AppLayout';
import { Body } from '@ag.ds-next/body';
import { PageLayout } from '../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function Homepage({ source }: StaticProps) {
	return (
		<AppLayout>
			<PageLayout editPath="/docs/README.md">
				<Body>
					<MDXRemote {...source} components={mdxComponents} />
				</Body>
			</PageLayout>
		</AppLayout>
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
