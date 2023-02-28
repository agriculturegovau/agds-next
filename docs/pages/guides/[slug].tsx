import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getGuide,
	getGuidesBreadcrumbs,
	getGuideSlugs,
	Guide,
} from '../../lib/mdx/guides';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';

export default function Guides({
	guide,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={guide.title} description={guide.opener} />
			<AppLayout applyMainElement={false}>
				<PageLayout
					editPath={`/docs/content/guides/${guide.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<PageTitle title={guide.title} introduction={guide.opener} />
					<Prose>
						<MDXRemote {...guide.source} components={mdxComponents} />
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		guide: Guide;
		breadcrumbs: Awaited<ReturnType<typeof getGuidesBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const guide = slug ? await getGuide(slug) : undefined;
	if (!(slug && guide)) {
		return { notFound: true };
	}
	const breadcrumbs = await getGuidesBreadcrumbs(slug);
	return {
		props: {
			guide,
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
