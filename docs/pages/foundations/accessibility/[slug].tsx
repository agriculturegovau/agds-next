import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { mdxComponents } from '../../../components/mdxComponents';
import {
	AccessibilityLayout,
	ACCESSIBILITY_PAGES,
} from '../../../components/AccessibilityLayout';
import {
	getAccessibilityPage,
	getAccessibilitySlugs,
	type AccessibilityPage,
} from '../../../lib/mdx/accessibility';
import { generateToc } from '../../../lib/generateToc';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function AccessibilityPage({
	description,
	editPath,
	page,
	pageTitle,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: pageTitle });
	return (
		<>
			<DocumentTitle description={description} title={pageTitle} />
			<AccessibilityLayout
				description={description}
				editPath={editPath}
				title={pageTitle}
			>
				{toc?.length > 1 ? (
					<InpageNav
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
						title="On this page"
					/>
				) : null}
				<Prose>
					<MDXRemote {...page.source} components={components} />
				</Prose>
			</AccessibilityLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		description: string;
		editPath: string;
		page: AccessibilityPage;
		pageTitle: string;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: keyof typeof ACCESSIBILITY_PAGES }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const page = slug ? await getAccessibilityPage(slug) : undefined;

	if (!page || !slug) {
		return { notFound: true };
	}

	const toc = generateToc(page.content);

	const { label, pageTitle, description } = ACCESSIBILITY_PAGES[slug];
	const editPath = `/docs/content/foundations/accessibility/${slug}.mdx`;
	const breadcrumbs = [
		{ href: '/', label: 'Home' },
		{ href: '/content', label: 'Content' },
		{ label: label },
	];

	return {
		props: {
			breadcrumbs,
			description,
			editPath,
			page,
			pageTitle,
			toc,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getAccessibilitySlugs();
	return {
		fallback: false,
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
	};
};
