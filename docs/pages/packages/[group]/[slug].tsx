import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Body } from '@ag.ds-next/body';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { ExternalLinkCallout } from '@ag.ds-next/a11y';

import {
	getPkgList,
	getPkg,
	Pkg,
	getPkgNavLinks,
	getPkgBreadcrumbs,
} from '../../../lib/mdxUtils';

import { mdxComponents } from '../../../components/utils';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PageLayout } from '../../../components/PageLayout';
import { PageTitle } from '../../../components/PageTitle';

export default function Packages({
	pkg,
	navLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={pkg.title} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Packages',
						titleLink: '/packages',
						items: navLinks,
					}}
					editPath={`/packages/${pkg.slug}/README.md`}
					breadcrumbs={breadcrumbs}
				>
					<PageTitle
						pretext={`v${pkg.version}`}
						title={pkg.data.title}
						introduction={pkg.data.description}
						callToAction={
							pkg.storybookPath && (
								<ButtonGroup>
									<ButtonLink
										target="_blank"
										href={`https://steelthreads.github.io/agds-next/storybook/index.html?path=${pkg.storybookPath}`}
										rel="noopener noreferrer"
										variant="secondary"
										iconAfter={ExternalLinkIcon}
									>
										View in Storybook
										<ExternalLinkCallout />
									</ButtonLink>
								</ButtonGroup>
							)
						}
					/>
					<Body>
						<pre>
							<code>
								yarn add {pkg.name}@{pkg.version}
							</code>
						</pre>
					</Body>
					<Body>
						<MDXRemote {...pkg.source} components={mdxComponents} />
					</Body>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pkg: Pkg;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
	},
	{ slug: string; group: string }
> = async ({ params }) => {
	const { slug, group } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;

	if (!(slug && group && pkg)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks(group);
	const breadcrumbs = await getPkgBreadcrumbs(slug);

	return {
		props: {
			pkg,
			navLinks,
			breadcrumbs,
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
