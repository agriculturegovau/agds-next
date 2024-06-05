import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getGuide,
	getGuidesBreadcrumbs,
	getGuideSlugs,
	Guide,
} from '../../lib/mdx/guides';
import { mdxComponents } from '../../components/mdxComponents';
import { SiteLayout } from '../../components/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';
import { generateToc } from '../../lib/generateToc';

export default function Guides({
	guide,
	toc,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={guide.title} description={guide.opener} />
			<SiteLayout applyMainElement={false}>
				<PageLayout
					applyMainElement={true}
					editPath={`/docs/content/guides/${guide.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<PageTitle title={guide.title} introduction={guide.opener} />
					{toc?.length > 1 ? (
						<InpageNav
							title="On this page"
							links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						/>
					) : null}
					<Prose>
						<MDXRemote {...guide.source} components={mdxComponents} />
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		guide: Guide;
		breadcrumbs: Awaited<ReturnType<typeof getGuidesBreadcrumbs>>;
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
			guide,
			breadcrumbs,
			slug,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getGuideSlugs();

	return {
		paths: slugs
			.filter((slug) => {
				// this page is defined in docs/pages/guides/how-to-write-guidance/index.tsx
				return slug !== 'how-to-write-guidance';
			})
			.map((slug) => ({
				params: { slug },
			})),
		fallback: false,
	};
};
