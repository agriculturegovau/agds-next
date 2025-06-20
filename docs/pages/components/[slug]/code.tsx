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

export default function PackagesCode({
	breadcrumbs,
	navLinks,
	pkg,
	source,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const documentTitle = `${pkg.title} Code`;
	const components = mdxComponents({ title: documentTitle });
	return (
		<>
			<DocumentTitle title={documentTitle} />
			<PkgLayout
				breadcrumbs={breadcrumbs}
				editPath={`/packages/react/src/${pkg.slug}/docs/code.mdx`}
				navLinks={navLinks}
				pkg={pkg}
			>
				<InpageNav
					links={[
						{
							label: 'Usage',
							href: '#usage',
						},
						...toc.map((i) => ({ label: i.title, href: `#${i.slug}` })),
						{
							label: 'Source',
							href: '#source',
						},
					]}
					title="On this page"
				/>
				<Prose id="pkg-content">
					<h2 id="usage">Usage</h2>
					<p>
						{pkg.title} components can be imported via the{' '}
						<code>{pkg.name}</code> entrypoint in the{' '}
						<code>@ag.ds-next/react</code> package.
					</p>
					<p>For example:</p>
					<pre>
						<code>{`import { ... } from '@ag.ds-next/react/${pkg.name}';`}</code>
					</pre>
					<MDXRemote {...source} components={components} />
					<h2 id="source">Source</h2>
					<p>
						You can view the full source code for this package on{' '}
						<a
							href={`https://github.com/agriculturegovau/agds-next/tree/main/packages/react/src/${pkg.slug}`}
						>
							Github
						</a>
						.
					</p>
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
	const pkgContent = pkg ? await getPkgDocsContent(pkg.slug, 'code.mdx') : null;

	if (!(slug && pkg && pkgContent)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks();
	const breadcrumbs = await getPkgBreadcrumbs(slug, 'Code');
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
