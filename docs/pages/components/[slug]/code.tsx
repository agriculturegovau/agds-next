import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
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

export default function PackagesCode({
	pkg,
	navLinks,
	breadcrumbs,
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${pkg.title} Code`} />
			<PkgLayout
				pkg={pkg}
				navLinks={navLinks}
				breadcrumbs={breadcrumbs}
				editPath={`/packages/${pkg.slug}/docs/code.mdx`}
			>
				<Prose>
					<h2>Usage</h2>
					<p>
						{pkg.title} components can be imported via the{' '}
						<code>{pkg.name}</code> entrypoint in the{' '}
						<code>@ag.ds-next/react</code> package.
					</p>
					<p>For example:</p>
					<pre>
						<code>{`import { ... } from '@ag.ds-next/react/${pkg.name}';`}</code>
					</pre>
					<MDXRemote {...content} components={mdxComponents} />
					<h2>Source</h2>
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
		content: NonNullable<Awaited<ReturnType<typeof getPkgDocsContent>>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;
	const content = pkg ? await getPkgDocsContent(pkg.slug, 'code.mdx') : null;

	if (!(slug && pkg && content)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks();
	const breadcrumbs = await getPkgBreadcrumbs(slug, 'Code');

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
		paths: packages.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
