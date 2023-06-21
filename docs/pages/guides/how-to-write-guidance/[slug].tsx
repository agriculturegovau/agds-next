import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import { Guide } from '../../../lib/mdx/guides';
import {
	getNestedGuide,
	getNestedGuideSlugs,
	getNestedGuidesBreadcrumbs,
	getNestedGuidesNavLinks,
} from '../../../lib/mdx/guidesNested';
import { mdxComponents } from '../../../components/mdxComponents';
import { SiteLayout } from '../../../components/SiteLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PageLayout } from '../../../components/PageLayout';
import { PageTitle } from '../../../components/PageTitle';
import { generateToc } from '../../../lib/generateToc';

export default function Guides({
	guide,
	toc,
	breadcrumbs,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={guide.title} description={guide.opener} />
			<SiteLayout applyMainElement={false}>
				<PageLayout
					applyMainElement={true}
					sideNav={{
						title: 'How to write guidance',
						titleLink: '/guides/how-to-write-guidance',
						items: navLinks,
					}}
					editPath={`/docs/content/guides/how-to-write-guidance/${guide.slug}.mdx`}
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
						<h2>Related links</h2>
						<ul>
							<li>
								<a href="/content">Content</a>
							</li>
							<li>
								<a href="https://www.stylemanual.gov.au/">Style Manual</a>
							</li>
						</ul>
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		guide: Guide;
		breadcrumbs: Awaited<ReturnType<typeof getNestedGuidesBreadcrumbs>>;
		navLinks: Awaited<ReturnType<typeof getNestedGuidesNavLinks>>;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const guide = slug ? await getNestedGuide(slug) : undefined;

	if (!(slug && guide)) {
		return { notFound: true };
	}

	const toc = await generateToc(guide.content);
	const breadcrumbs = await getNestedGuidesBreadcrumbs(slug);
	const navLinks = await getNestedGuidesNavLinks();

	return {
		props: {
			guide,
			breadcrumbs,
			navLinks,
			slug,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getNestedGuideSlugs();
	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
