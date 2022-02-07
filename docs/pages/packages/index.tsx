import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';

import {
	getMarkdownData,
	serializeMarkdown,
	getPkgGroupList,
	getPkgList,
	getPkgNavLinks,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';
import { PkgCardList } from '../../components/PkgCardList';

import { Stack } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';
import { H2 } from '@ag.ds-next/heading';
import { TextLink } from '@ag.ds-next/text';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({
	navLinks,
	groupList,
	pkgList,
	source,
}: StaticProps) {
	return (
		<AppLayout>
			<PageLayout
				sideNav={{
					title: 'Packages',
					titleLink: '/packages',
					items: navLinks,
				}}
				editPath="/packages/README.md"
			>
				<Body>
					<MDXRemote {...source} components={mdxComponents} />
				</Body>
				<Stack gap={2}>
					{groupList.map((group) => (
						<Stack gap={1} key={group.slug}>
							<TextLink href={`/packages/${group.slug}`}>
								<H2>{group.title}</H2>
							</TextLink>
							<PkgCardList
								items={pkgList.filter((p) => p.group === group.slug)}
							/>
						</Stack>
					))}
				</Stack>
			</PageLayout>
		</AppLayout>
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
