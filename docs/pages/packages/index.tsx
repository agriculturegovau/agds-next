import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Body } from '@ag.ds-next/body';

import {
	getMarkdownData,
	serializeMarkdown,
	getPkgGroupList,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({ pkgLinks, source }: StaticProps) {
	return (
		<AppLayout>
			<PageLayout navLinks={pkgLinks} editPath="/packages/README.md">
				<Body>
					<MDXRemote {...source} components={mdxComponents} />
				</Body>
			</PageLayout>
		</AppLayout>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../packages/README.md`)
	);
	const source = await serializeMarkdown(content);
	const groupList = await getPkgGroupList();
	const navLinks = groupList.map(({ title, slug }) => ({
		label: title,
		href: `/packages/${slug}`,
	}));

	return {
		props: {
			pkgLinks,
			source,
		},
	};
}
