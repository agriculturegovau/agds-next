import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/prose';
import {
	getUpdate,
	getUpdateBreadcrumbs,
	getUpdatesList,
	getUpdateSlugs,
	Update,
} from '../../lib/mdx/updates';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';

export default function Updates({
	update,
	updateLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={update.data.title} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Updates',
						titleLink: '/updates',
						items: updateLinks,
					}}
					editPath={`/docs/content/updates/${update.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<PageTitle
						title={update.data.title}
						introduction={update.data.description}
					/>
					<Prose>
						<MDXRemote {...update.source} components={mdxComponents} />
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		update: Update;
		updateLinks: { href: string; label: string }[];
		breadcrumbs: Awaited<ReturnType<typeof getUpdateBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const update = slug ? await getUpdate(slug) : undefined;
	const updatesList = await getUpdatesList();
	const updateLinks = updatesList.map(({ title, slug }) => ({
		href: `/updates/${slug}`,
		label: title,
	}));

	if (!(slug && update)) {
		return { notFound: true };
	}

	const breadcrumbs = await getUpdateBreadcrumbs(slug);

	return {
		props: {
			update,
			updateLinks,
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
