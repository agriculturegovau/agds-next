import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { getUpdatesList, UPDATE_PATH } from '../../lib/mdx/updates';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function UpdatesHome({
	title,
	description,
	source,
	updateLinks,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Updates" description={description} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Updates',
						titleLink: '/updates',
						items: updateLinks,
					}}
					editPath="/docs/content/updates/index.mdx"
				>
					<PageTitle title={title} introduction={description} />
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<Stack as="ul" gap={1.5}>
						{updateLinks.map(({ href, label, description }) => (
							<Card as="li" key={label} clickable shadow>
								<CardInner>
									<Stack gap={1}>
										<Heading type="h3">
											<CardLink href={href}>{label}</CardLink>
										</Heading>
										{description ? <Text as="p">{description}</Text> : null}
									</Stack>
								</CardInner>
							</Card>
						))}
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export async function getStaticProps() {
	const { content, data } = await getMarkdownData(
		normalize(`${UPDATE_PATH}/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const updatesList = await getUpdatesList();
	const updateLinks = updatesList.map(({ slug, title, description }) => ({
		href: `/updates/${slug}`,
		label: title,
		description,
	}));

	return {
		props: {
			title: (data?.title || null) as string | null,
			description: (data?.description || null) as string | null,
			source,
			updateLinks,
		},
	};
}
