import { normalize } from 'path';
import { type InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/react/prose';
import { getMarkdownData, serializeMarkdown } from '../lib/mdxUtils';
import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageTitle } from '../components/PageTitle';
import { PageLayout } from '../components/PageLayout';
import { mdxComponents } from '../components/mdxComponents';

export default function AboutPage({
	description,
	source,
	title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const components = mdxComponents({ title: title });
	return (
		<>
			<DocumentTitle title={title} />
			<SiteLayout applyMainElement={false}>
				<PageLayout
					applyMainElement
					breadcrumbs={[{ href: '/', label: 'Home' }, { label: title }]}
					editPath="/docs/content/about.mdx"
				>
					<PageTitle introduction={description} title={title} />
					<Prose>
						<MDXRemote {...source} components={components} />
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

export const getStaticProps = async () => {
	const { content, data } = await getMarkdownData(
		normalize(`${process.cwd()}/content/about.mdx`)
	);
	const source = await serializeMarkdown(content, data);
	return {
		props: {
			description: data?.description as string,
			source,
			title: data?.title as string,
		},
	};
};
