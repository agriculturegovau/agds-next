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
} from '../../lib/mdx/content';
import { generateToc } from '../../lib/generateToc';

export default function ContentPage({
	breadcrumbs,
	foundation,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle
				title={foundation.title}
				description={foundation.description}
			/>
			<AppLayout>
				<PageLayout
					editPath={`/docs/content/content/${foundation.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<PageTitle
						title={foundation.title}
						introduction={foundation.description}
					/>
					{toc?.length > 1 ? (
						<InpageNav
							title="On this page"
							links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						/>
					) : null}
					<Prose>
						<MDXRemote {...foundation.source} components={mdxComponents} />
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
								<a href="https://design-system.agriculture.gov.au/foundations/design-principles">
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
		breadcrumbs: Awaited<ReturnType<typeof getContentBreadcrumbs>>;
		foundation: Content;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const foundation = slug ? await getContent(slug) : undefined;

	if (!(foundation && slug)) {
		return { notFound: true };
	}

	const breadcrumbs = await getContentBreadcrumbs(slug);
	const toc = await generateToc(foundation.content);

	return {
		props: {
			breadcrumbs,
			foundation,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const content = await (
		await getContentList()
	).filter(({ slug }) => !['tokens'].includes(slug));

	return {
		paths: content.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
