import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import { getGuideList, GUIDE_PATH } from '../../lib/mdx/guides';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function GuidesHome({ source, guideLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Guides" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Guides',
						titleLink: '/guides',
						items: guideLinks,
					}}
					editPath="/docs/content/guides/index.mdx"
				>
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<Stack as="ul" gap={1.5}>
						{guideLinks.map(({ href, label, description }) => (
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
	const { content } = await getMarkdownData(
		normalize(`${GUIDE_PATH}/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const guideList = await getGuideList();
	const guideLinks = guideList.map(({ slug, title, description }) => ({
		href: `/guides/${slug}`,
		label: title,
		description,
	}));

	return {
		props: {
			source,
			guideLinks,
		},
	};
}
