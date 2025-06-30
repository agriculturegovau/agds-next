import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { mdxComponents } from '../../../components/mdxComponents';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';
import {
	getTokenPage,
	getTokenSlugs,
	type TokenPage,
} from '../../../lib/mdx/tokens';
import { generateToc } from '../../../lib/generateToc';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TokensPage({
	description,
	editPath,
	page,
	pageTitle,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: pageTitle });
	return (
		<>
			<DocumentTitle description={description} title={pageTitle} />
			<TokenLayout
				description={description}
				editPath={editPath}
				title={pageTitle}
			>
				{toc?.length > 1 ? (
					<InpageNav
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						title="On this page"
					/>
				) : null}
				<Prose>
					<MDXRemote {...page.source} components={components} />
				</Prose>
			</TokenLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		description: string;
		editPath: string;
		page: TokenPage;
		pageTitle: string;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: keyof typeof TOKEN_PAGES }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const page = slug ? await getTokenPage(slug) : undefined;

	if (!page || !slug) {
		return { notFound: true };
	}

	const toc = generateToc(page.content);

	const { label, pageTitle, description } = TOKEN_PAGES[slug];
	const editPath = `/docs/content/foundations/tokens/${slug}.mdx`;
	const breadcrumbs = [
		{ href: '/', label: 'Home' },
		{ href: '/content', label: 'Content' },
		{ label: label },
	];

	return {
		props: {
			breadcrumbs,
			description,
			editPath,
			page,
			pageTitle,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getTokenSlugs();
	return {
		fallback: false,
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
	};
};
