import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getUpdate,
	getUpdateBreadcrumbs,
	getUpdateSlugs,
	type Update,
} from '../../lib/mdx/updates';
import { mdxComponents } from '../../components/mdxComponents';
import { SiteLayout } from '../../components/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';

export default function Updates({
	breadcrumbs,
	update,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: update.title });
	return (
		<>
			<DocumentTitle description={update.description} title={update.title} />
			<SiteLayout>
				<PageLayout
					breadcrumbs={breadcrumbs}
					editPath={`/docs/content/updates/${update.slug}.mdx`}
				>
					<PageTitle
						introduction={update.description}
						pretext={update.date}
						title={update.title}
					/>
					<Prose>
						<MDXRemote {...update.source} components={components} />
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getUpdateBreadcrumbs>>;
		update: Update;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const update = slug ? await getUpdate(slug) : undefined;

	if (!(slug && update)) {
		return { notFound: true };
	}

	const breadcrumbs = await getUpdateBreadcrumbs(slug);

	return {
		props: {
			breadcrumbs,
			slug,
			update,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getUpdateSlugs();

	return {
		fallback: false,
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
	};
};
