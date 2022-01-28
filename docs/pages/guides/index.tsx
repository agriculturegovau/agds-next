import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Body } from '@ag.ds-next/body';

import {
	getMarkdownData,
	getGuideList,
	serializeMarkdown,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function GuidesHome({ source, guideLinks }: StaticProps) {
	return (
		<AppLayout>
			<PageLayout
				navTitle="Guides"
				navTitleLink="/guides"
				navLinks={guideLinks}
				editPath="/guides/index.mdx"
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
		normalize(`${process.cwd()}/../guides/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const guideList = await getGuideList();
	const guideLinks = guideList.map(({ slug, title }) => ({
		href: `/guides/${slug}`,
		label: title,
	}));

	return {
		props: {
			source,
			guideLinks,
		},
	};
}
