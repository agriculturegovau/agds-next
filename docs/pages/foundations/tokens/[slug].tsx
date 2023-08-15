import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { mdxComponents } from '../../../components/mdxComponents';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';
import { getTokenPage, TokenPage } from '../../../lib/mdx/foundations';
import { generateToc } from '../../../lib/generateToc';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TokensPage({
	toc,
	page,
	pageTitle,
	editPath,
	description,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={pageTitle} description={description} />
			<TokenLayout
				title={pageTitle}
				description={description}
				editPath={editPath}
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

export const getStaticProps: GetStaticProps<
	{
		description: string;
		page: TokenPage;
		pageTitle: string;
		editPath: string;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: keyof typeof TOKEN_PAGES }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const page = slug ? await getTokenPage(slug) : undefined;

	if (!page || !slug) {
		return { notFound: true };
	}

	const toc = await generateToc(page.content);

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
			page,
			editPath,
			pageTitle,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const mdxPageSlugs = ['breakpoints', 'spacing', 'shadows'];
	return {
		paths: mdxPageSlugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
