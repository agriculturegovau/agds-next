import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { mdxComponents } from '../../../components/mdxComponents';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';
import { getTokenPage, TokenPage } from '../../../lib/mdx/foundations';
import { generateToc } from '../../../lib/generateToc';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TokensspacingPage({
	toc,
	page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle
				title={TOKEN_PAGES.spacing.pageTitle}
				description={TOKEN_PAGES.spacing.description}
			/>
			<TokenLayout
				title={TOKEN_PAGES.spacing.pageTitle}
				description={TOKEN_PAGES.spacing.description}
				editPath="/docs/content/foundations/tokens/spacing.mdx"
			>
				{toc?.length > 1 ? (
					<InpageNav
						title="On this page"
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
					/>
				) : null}
				<Prose>
					<MDXRemote {...page.source} components={mdxComponents} />
				</Prose>
			</TokenLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<{
	page: TokenPage;
	toc: Awaited<ReturnType<typeof generateToc>>;
}> = async () => {
	const page = await getTokenPage('spacing');

	if (!page) {
		return { notFound: true };
	}

	const toc = await generateToc(page.content);

	return {
		props: {
			page,
			toc,
		},
	};
};
