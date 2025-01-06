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
} from '../../../lib/mdx/guidesHowToWriteGuidance';
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
			<DocumentTitle description={guide.opener} title={guide.title} />
			<SiteLayout applyMainElement={false}>
				<PageLayout
					applyMainElement
					breadcrumbs={breadcrumbs}
					editPath={`/docs/content/guides/how-to-write-guidance/${guide.slug}.mdx`}
					sideNav={{
						title: 'How to create guidance in the Export Service',
						titleLink: '/guides/how-to-write-guidance',
						items: navLinks,
					}}
				>
					<PageTitle introduction={guide.opener} title={guide.title} />
					{toc?.length > 1 ? (
						<InpageNav
							links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
							title="On this page"
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

	const toc = generateToc(guide.content);
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
