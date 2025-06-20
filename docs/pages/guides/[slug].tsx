import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getGuide,
	getGuidesBreadcrumbs,
	getGuideSlugs,
	type Guide,
} from '../../lib/mdx/guides';
import { mdxComponents } from '../../components/mdxComponents';
import { SiteLayout } from '../../components/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';
import { generateToc } from '../../lib/generateToc';

export default function Guides({
	breadcrumbs,
	guide,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: guide.title });
	return (
		<>
			<DocumentTitle description={guide.opener} title={guide.title} />
			<SiteLayout applyMainElement={false}>
				<PageLayout
					applyMainElement
					breadcrumbs={breadcrumbs}
					editPath={`/docs/content/guides/${guide.slug}.mdx`}
				>
					<PageTitle introduction={guide.opener} title={guide.title} />
					{toc?.length > 1 ? (
						<InpageNav
							links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
							title="On this page"
						/>
					) : null}
					<Prose>
						<MDXRemote {...guide.source} components={components} />
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getGuidesBreadcrumbs>>;
		guide: Guide;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const guide = slug ? await getGuide(slug) : undefined;

	if (!(slug && guide)) {
		return { notFound: true };
	}

	const toc = generateToc(guide.content);
	const breadcrumbs = await getGuidesBreadcrumbs(slug);

	return {
		props: {
			breadcrumbs,
			guide,
			slug,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getGuideSlugs();

	return {
		fallback: false,
		paths: slugs
			.filter((slug) => {
				// this page is defined in docs/pages/guides/how-to-write-guidance/index.tsx
				return slug !== 'how-to-write-guidance';
			})
			.map((slug) => ({
				params: { slug },
			})),
	};
};
