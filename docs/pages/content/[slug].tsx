import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import { mdxComponents } from '../../components/mdxComponents';
import { SiteLayout } from '../../components/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';
import {
	getContent,
	getContentBreadcrumbs,
	getContentList,
	getContentNavLinks,
	type Content,
} from '../../lib/mdx/content';
import { generateToc } from '../../lib/generateToc';

export default function ContentPage({
	breadcrumbs,
	document,
	navLinks,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: document.title });
	return (
		<>
			<DocumentTitle
				description={document.description}
				title={document.title}
			/>
			<SiteLayout applyMainElement={false}>
				<PageLayout
					applyMainElement
					breadcrumbs={breadcrumbs}
					editPath={`/docs/content/content/${document.slug}.mdx`}
					sideNav={{
						items: navLinks,
						title: 'Content',
						titleLink: '/content',
					}}
				>
					<PageTitle
						introduction={document.description}
						title={document.title}
					/>
					{toc?.length > 1 ? (
						<InpageNav
							links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
							title="On this page"
						/>
					) : null}
					<Prose>
						<MDXRemote {...document.source} components={components} />
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getContentBreadcrumbs>>;
		document: Content;
		navLinks: Awaited<ReturnType<typeof getContentNavLinks>>;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const document = slug ? await getContent(slug) : undefined;
	const navLinks = await getContentNavLinks();

	if (!(document && slug)) {
		return { notFound: true };
	}

	const breadcrumbs = await getContentBreadcrumbs(slug);
	const toc = generateToc(document.content);

	return {
		props: {
			breadcrumbs,
			document,
			navLinks,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const content = await getContentList();

	return {
		fallback: false,
		paths: content.map(({ slug }) => ({
			params: { slug },
		})),
	};
};
