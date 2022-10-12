import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/design-system';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { mdxComponents } from '../../../../components/mdxComponents';
import { PkgLayout } from '../../../../components/PkgLayout';
import {
	getPkg,
	getPkgBreadcrumbs,
	getPkgDocsContent,
	getPkgList,
	getPkgNavLinks,
	Pkg,
} from '../../../../lib/mdx/packages';

export default function PackagesAccessibility({
	pkg,
	navLinks,
	breadcrumbs,
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${pkg.title} Accessibility`} />
			<AppLayout>
				<PkgLayout
					pkg={pkg}
					navLinks={navLinks}
					breadcrumbs={breadcrumbs}
					skipLinks={[
						{
							label: `Skip to ${pkg.title} accessibility`,
							href: '#pkg-content',
						},
					]}
					editPath={`/packages/${pkg.slug}/docs/accessibility.mdx`}
				>
					<Prose id="pkg-content">
						<MDXRemote {...content} components={mdxComponents} />
					</Prose>
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
	const content = pkg
		? await getPkgDocsContent(pkg.slug, 'accessibility.mdx')
		: null;

	if (!(slug && group && pkg && content)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks(group);
	const breadcrumbs = await getPkgBreadcrumbs(slug, 'Accessibility');

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
