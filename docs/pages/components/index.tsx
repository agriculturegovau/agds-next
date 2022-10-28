import { Stack } from '@ag.ds-next/react/box';
import { H2 } from '@ag.ds-next/react/heading';
import {
	getPkgGroupList,
	getPkgList,
	getPkgNavLinks,
} from '../../lib/mdx/packages';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PkgCardList } from '../../components/PkgCardList';
import { PageTitle } from '../../components/PageTitle';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({
	navLinks,
	groupList,
	pkgList,
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
					editPath="/docs/pages/components/index.tsx"
				>
					<PageTitle
						title="Components"
						introduction="Discover all the Agriculture Design System components here
						including visual examples, props, and code examples. In the future we
						will include findings we’ve collected from performing user
						research as well as documentation to help teams adopt the design
						system for their projects."
					/>
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
	const navLinks = await getPkgNavLinks();
	const groupList = await getPkgGroupList();
	const pkgList = await getPkgList();

	return {
		props: {
			navLinks,
			groupList,
			pkgList,
		},
	};
}
