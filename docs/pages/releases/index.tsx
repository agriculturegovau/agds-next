import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Body } from '@ag.ds-next/body';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import {
	getMarkdownData,
	getReleaseList,
	serializeMarkdown,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function ReleasesHome({ source, releaseLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Releases" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Releases',
						titleLink: '/releases',
						items: releaseLinks,
					}}
					editPath="/releases/index.mdx"
				>
					<Body>
						<MDXRemote {...source} components={mdxComponents} />
					</Body>
					<Stack as="ul" gap={1}>
						{releaseLinks.map(({ href, label, description }) => (
							<Card key={label} as="li" clickable shadow>
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
		normalize(`${process.cwd()}/../releases/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const releaseList = await getReleaseList();

	const releaseLinks = releaseList.map(({ slug, title, description }) => ({
		href: `/releases/${slug}`,
		label: title,
		description,
	}));

	return {
		props: {
			source,
			releaseLinks,
		},
	};
}
