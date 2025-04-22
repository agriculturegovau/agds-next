import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getPkgSlugs,
	getPkg,
	Pkg,
	getPkgNavLinks,
	getPkgBreadcrumbs,
	getPkgDocsContent,
} from '../../../lib/mdx/packages';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PkgLayout } from '../../../components/PkgLayout';
import { generateToc } from '../../../lib/generateToc';

export default function PackagesLegacy({
	pkg,
	navLinks,
	breadcrumbs,
	source,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${pkg.title} Legacy`} />
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
					<MDXRemote {...source} components={mdxComponents} />
				</Prose>
			</PkgLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pkg: NonNullable<Pkg>;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
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
			pkg,
			navLinks,
			breadcrumbs,
			source: pkgContent.source,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getPkgSlugs();
	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
