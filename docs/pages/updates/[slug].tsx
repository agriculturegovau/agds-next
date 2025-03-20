import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getUpdate,
	getUpdateBreadcrumbs,
	getUpdateSlugs,
	Update,
} from '../../lib/mdx/updates';
import { mdxComponents } from '../../components/mdxComponents';
import { SiteLayout } from '../../components/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';

export default function Updates({
	update,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
						<MDXRemote {...update.source} components={mdxComponents} />
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		update: Update;
		breadcrumbs: Awaited<ReturnType<typeof getUpdateBreadcrumbs>>;
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
			update,
			breadcrumbs,
			slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getUpdateSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
