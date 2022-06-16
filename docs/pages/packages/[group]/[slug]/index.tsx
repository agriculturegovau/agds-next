import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Body } from '@ag.ds-next/body';
import {
	getPkgList,
	getPkg,
	Pkg,
	getPkgNavLinks,
	getPkgBreadcrumbs,
	getPkgDocsContent,
} from '../../../../lib/mdx/packages';
import { mdxComponents } from '../../../../components/utils';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { PkgLayout } from '../../../../components/PkgLayout';

export default function Packages({
	pkg,
	navLinks,
	breadcrumbs,
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${pkg.title} Content`} />
			<AppLayout>
				<PkgLayout
					pkg={pkg}
					navLinks={navLinks}
					breadcrumbs={breadcrumbs}
					skipLinks={[
						{
							label: `Skip to ${pkg.title} content`,
							href: '#pkg-content',
						},
					]}
				>
					<Body>
						<Body id="pkg-content">
							<MDXRemote {...content} components={mdxComponents} />
						</Body>
					</Body>
				</PkgLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pkg: NonNullable<Pkg>;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
		content: NonNullable<Awaited<ReturnType<typeof getPkgDocsContent>>>;
	},
	{ slug: string; group: string }
> = async ({ params }) => {
	const { slug, group } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;

	if (!(slug && group && pkg)) {
		return { notFound: true };
	}

	const content = (await getPkgDocsContent(pkg.slug)) ?? pkg.source;
	const navLinks = await getPkgNavLinks(group);
	const breadcrumbs = await getPkgBreadcrumbs(slug);

	return {
		props: {
			pkg,
			navLinks,
			breadcrumbs,
			content,
		},
	};
};

export const getStaticPaths = async () => {
	const packages = await getPkgList();

	return {
		paths: packages.map(({ group, slug }) => ({
			params: { group, slug },
		})),
		fallback: false,
	};
};
