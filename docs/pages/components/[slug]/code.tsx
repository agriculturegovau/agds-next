import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getPkgList,
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

export default function PackagesCode({
	pkg,
	navLinks,
	breadcrumbs,
	source,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${pkg.title} Code`} />
			<PkgLayout
				pkg={pkg}
				navLinks={navLinks}
				breadcrumbs={breadcrumbs}
				skipLinks={[
					{
						label: `Skip to ${pkg.title} code`,
						href: '#pkg-content',
					},
				]}
				editPath={`/packages/${pkg.slug}/docs/code.mdx`}
			>
				<InpageNav
					title="On this page"
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
					<MDXRemote {...source} components={mdxComponents} />
					<h2 id="source">Source</h2>
					<p>
						You can view the full source code for this package on{' '}
						<a
							href={`https://github.com/steelthreads/agds-next/tree/main/packages/react/src/${pkg.slug}`}
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
	const pkgContent = pkg ? await getPkgDocsContent(pkg.slug, 'code.mdx') : null;

	if (!(slug && pkg && pkgContent)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks();
	const breadcrumbs = await getPkgBreadcrumbs(slug, 'Code');
	const toc = await generateToc(pkgContent.content);

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
	const packages = await getPkgList();

	return {
		paths: packages.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
