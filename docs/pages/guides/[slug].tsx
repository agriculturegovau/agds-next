import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Body } from '@ag.ds-next/body';
import {
	getGuide,
	getGuideList,
	getGuidesBreadcrumbs,
	getGuideSlugs,
	Guide,
} from '../../lib/mdx/guides';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';

export default function Guides({
	guide,
	guideLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={guide.title} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Guides',
						titleLink: '/guides',
						items: guideLinks,
					}}
					editPath={`/guides/${guide.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<PageTitle title={guide.title} introduction={guide.description} />
					<Body>
						<MDXRemote {...guide.source} components={mdxComponents} />
					</Body>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		guide: Guide;
		guideLinks: { href: string; label: string }[];
		breadcrumbs: Awaited<ReturnType<typeof getGuidesBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const guide = slug ? await getGuide(slug) : undefined;
	const guideList = await getGuideList();
	const guideLinks = guideList.map(({ title, slug }) => ({
		href: `/guides/${slug}`,
		label: title,
	}));

	if (!(slug && guide)) {
		return { notFound: true };
	}

	const breadcrumbs = await getGuidesBreadcrumbs(slug);

	return {
		props: {
			guide,
			guideLinks,
			breadcrumbs,
			slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getGuideSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
