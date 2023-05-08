import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';
import {
	getContentList,
	getContent,
	getContentBreadcrumbs,
	Content,
	getContentNavLinks,
} from '../../lib/mdx/content';
import { generateToc } from '../../lib/generateToc';

export default function ContentPage({
	breadcrumbs,
	navLinks,
	document,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle
				title={document.title}
				description={document.description}
			/>
			<AppLayout applyMainElement={false}>
				<PageLayout
					editPath={`/docs/content/content/${document.slug}.mdx`}
					breadcrumbs={breadcrumbs}
					applyMainElement={true}
					sideNav={{
						title: 'Content',
						titleLink: '/content',
						items: navLinks,
					}}
				>
					<PageTitle
						title={document.title}
						introduction={document.description}
					/>
					{toc?.length > 1 ? (
						<InpageNav
							title="On this page"
							links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						/>
					) : null}
					<Prose>
						<MDXRemote {...document.source} components={mdxComponents} />
						<h2>Related links</h2>
						<ul>
							<li>
								<a>How to create guidance in the Export Service</a>
							</li>
							<li>
								<a href="./content-structure">Content structure</a>
							</li>
							<li>
								<a href="./content-styles">Content styles</a>
							</li>
							<li>
								<a href="./content-patterns">Content patterns</a>
							</li>
							<li>
								<a href="https://design-system.agriculture.gov.au/documents/design-principles">
									Design principles
								</a>
							</li>
							<li>
								<a href="https://www.stylemanual.gov.au/writing-and-designing-content">
									Writing and designing content I Style Manual
								</a>
							</li>
						</ul>
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		document: Content;
		navLinks: Awaited<ReturnType<typeof getContentNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getContentBreadcrumbs>>;
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
	const toc = await generateToc(document.content);

	return {
		props: {
			document,
			navLinks,
			breadcrumbs,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const content = await getContentList();

	return {
		paths: content.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
