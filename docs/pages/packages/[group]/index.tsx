import { normalize } from 'path';

import {
	getMarkdownData,
	serializeMarkdown,
	getPkgList,
} from '../../../lib/mdxUtils';
import { AppLayout } from '../../../components/AppLayout';
import { PageLayout } from '../../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({ pkgLinks }: StaticProps) {
	return (
		<AppLayout>
			<PageLayout navLinks={pkgLinks}>
				<H1>{}</H1>
				{}
			</PageLayout>
		</AppLayout>
	);
}

export async function getStaticProps() {
	const pkgList = await getPkgList();
	const pkgLinks = pkgList.map(({ title, slug }) => ({
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
