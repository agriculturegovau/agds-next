import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/react/box';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateNavLinks,
	getTemplateSlugs,
	Template,
} from '../../../lib/mdx/templates';
import { TemplateLayout } from '../../../components/TemplateLayout';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { generateToc } from '../../../lib/generateToc';

export default function TemplateOverviewPage({
	breadcrumbs,
	template,
	navLinks,
	toc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle
				title={`${template.title} template`}
				description={template.description}
			/>
			<TemplateLayout
				template={template}
				breadcrumbs={breadcrumbs}
				navLinks={navLinks}
				editPath={`/docs/content/templates/${template.slug}/index.mdx`}
			>
				{toc?.length > 1 ? (
					<InpageNav
						title="On this page"
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
					/>
				) : null}
				<Prose id="page-content">
					<Box border borderColor="muted" css={{ img: { display: 'block' } }}>
						<img
							src={`/img/templates/${template.slug}.webp`}
							role="presentation"
							alt=""
						/>
					</Box>
					<MDXRemote {...template.source} components={mdxComponents} />
				</Prose>
			</TemplateLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		template: Template;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
		toc: Awaited<ReturnType<typeof generateToc>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const navLinks = await getTemplateNavLinks();

	if (!(slug && template)) {
		return { notFound: true };
	}

	const breadcrumbs = await getTemplateBreadcrumbs(slug);
	const toc = await generateToc(template.content);

	return {
		props: {
			template,
			navLinks,
			breadcrumbs,
			toc,
			slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getTemplateSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
