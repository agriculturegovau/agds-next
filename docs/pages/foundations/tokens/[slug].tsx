import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { mdxComponents } from '../../../components/mdxComponents';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';
import {
	getTokenPage,
	getTokenSlugs,
	TokenPage,
} from '../../../lib/mdx/tokens';
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
			page,
			editPath,
			pageTitle,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getTokenSlugs();
	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
