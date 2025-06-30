import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getPkg,
	getPkgBreadcrumbs,
	getPkgDocsContent,
	getPkgNavLinks,
	getPkgSlugs,
	type Pkg,
} from '../../../lib/mdx/packages';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PkgLayout } from '../../../components/PkgLayout';
import { generateToc } from '../../../lib/generateToc';

export default function PackagesLegacy({
	breadcrumbs,
	navLinks,
	pkg,
	source,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const documentTitle = `${pkg.title} Legacy`;
	const components = mdxComponents({ title: documentTitle });
	return (
		<>
			<DocumentTitle title={documentTitle} />
			<PkgLayout
				breadcrumbs={breadcrumbs}
				editPath={`/packages/react/src/${pkg.slug}/docs/legacy.mdx`}
				navLinks={navLinks}
				pkg={pkg}
			>
				{toc?.length > 1 ? (
					<InpageNav
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						title="On this page"
					/>
				) : null}
				<Prose id="pkg-content">
					<MDXRemote {...source} components={components} />
				</Prose>
			</PkgLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		pkg: NonNullable<Pkg>;
		source: NonNullable<
			Awaited<ReturnType<typeof getPkgDocsContent>>
		>['source'];
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;
	const pkgContent = pkg
		? await getPkgDocsContent(pkg.slug, 'legacy.mdx')
		: null;

	if (!(slug && pkg && pkgContent)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks();
	const breadcrumbs = await getPkgBreadcrumbs(slug, 'legacy');
	const toc = generateToc(pkgContent.content);

	return {
		props: {
			breadcrumbs,
			navLinks,
			pkg,
			source: pkgContent.source,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getPkgSlugs();
	return {
		fallback: false,
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
	};
};
