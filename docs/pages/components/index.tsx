import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { Stack, Prose, H2 } from '@ag.ds-next/react';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import {
	getPkgGroupList,
	getPkgList,
	getPkgNavLinks,
} from '../../lib/mdx/packages';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PkgCardList } from '../../components/PkgCardList';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({
	navLinks,
	groupList,
	pkgList,
	source,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Components" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Components',
						titleLink: '/components',
						items: navLinks,
					}}
					editPath="/packages/README.md"
				>
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<Stack gap={2}>
						{groupList.map((group) => (
							<Stack gap={1} key={group.slug}>
								<H2>{group.title}</H2>
								<PkgCardList
									items={pkgList.filter((p) => p.group === group.slug)}
								/>
							</Stack>
						))}
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../packages/README.md`)
	);
	const source = await serializeMarkdown(content);
	const navLinks = await getPkgNavLinks();
	const groupList = await getPkgGroupList();
	const pkgList = await getPkgList();

	return {
		props: {
			source,
			navLinks,
			groupList,
			pkgList,
		},
	};
}
