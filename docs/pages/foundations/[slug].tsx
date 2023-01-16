import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';
import {
	getFoundationList,
	getFoundation,
	getFoundationBreadcrumbs,
	Foundation,
} from '../../lib/mdx/foundations';

export default function FoundationsPage({
	breadcrumbs,
	foundation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle
				title={foundation.title}
				description={foundation.description}
			/>
			<AppLayout>
				<PageLayout
					editPath={`/docs/content/foundations/${foundation.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<PageTitle
						title={foundation.title}
						introduction={foundation.description}
					/>
					<Prose>
						<MDXRemote {...foundation.source} components={mdxComponents} />
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getFoundationBreadcrumbs>>;
		foundation: Foundation;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};

	const foundation = slug ? await getFoundation(slug) : undefined;
	const breadcrumbs = slug ? await getFoundationBreadcrumbs(slug) : undefined;

	if (!(foundation && breadcrumbs)) {
		return { notFound: true };
	}

	return {
		props: {
			breadcrumbs,
			foundation,
		},
	};
};

export const getStaticPaths = async () => {
	const foundations = await getFoundationList();
	return {
		paths: foundations.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
