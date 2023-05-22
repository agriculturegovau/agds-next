import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/react/box';
import { Prose } from '@ag.ds-next/react/prose';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateNavLinks,
	Template,
	getTemplateList,
} from '../../../../lib/mdx/templates';
import { withBasePath } from '../../../../lib/img';
import { PatternLayout } from '../../../../components/PatternLayout';
import { mdxComponents } from '../../../../components/mdxComponents';
import { DocumentTitle } from '../../../../components/DocumentTitle';

export default function TemplatePage({
	breadcrumbs,
	pattern,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Fragment>
			<DocumentTitle
				title={`${pattern.title} pattern`}
				description={pattern.description}
			/>
			<PatternLayout
				pattern={pattern}
				breadcrumbs={breadcrumbs}
				editPath={`/docs/content/templates/${pattern.slug}/index.mdx`}
				navTitle="Patterns"
				navTitleLink="/patterns"
				navLinks={navLinks}
			>
				<Prose id="page-content">
					<Box border borderColor="muted" css={{ img: { display: 'block' } }}>
						{pattern.group !== 'interactions' && (
							<img
								src={withBasePath(`/img/templates/${pattern.slug}.webp`)}
								role="presentation"
								alt=""
							/>
						)}
					</Box>
					<MDXRemote {...pattern.source} components={mdxComponents} />
				</Prose>
			</PatternLayout>
		</Fragment>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pattern: Template;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	},
	{ slug: string; group: string }
> = async ({ params }) => {
	const { slug, group } = params ?? {};
	const pattern = slug ? await getTemplate(slug) : undefined;

	if (!(slug && group && pattern)) {
		return { notFound: true };
	}

	const navLinks = await getTemplateNavLinks(group);
	const breadcrumbs = await getTemplateBreadcrumbs(slug);

	return {
		props: {
			pattern,
			navLinks,
			breadcrumbs,
			slug,
		},
	};
};

export const getStaticPaths = async () => {
	const templateList = await getTemplateList();
	return {
		paths: templateList.map((p) => ({
			params: { slug: p.slug, group: p.group },
		})),
		fallback: false,
	};
};
