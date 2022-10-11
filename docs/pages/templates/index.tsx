import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import {
	Box,
	boxPalette,
	Card,
	CardInner,
	CardLink,
	Columns,
	Flex,
	mq,
	Prose,
	Stack,
	Text,
} from '@ag.ds-next/design-system';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { mdxComponents } from '../../components/mdxComponents';
import { PageLayout } from '../../components/PageLayout';
import { getTemplateList } from '../../lib/mdx/templates';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({ source, templateLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Templates',
						titleLink: '/templates',
						items: templateLinks,
					}}
					editPath="/templates/index.mdx"
				>
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
						{templateLinks.map((template) => {
							return <TemplateCard key={template.slug} {...template} />;
						})}
					</Columns>
				</PageLayout>
			</AppLayout>
		</>
	);
}

const TemplateCard = ({
	slug,
	label,
	description,
}: {
	slug: string;
	label: string;
	description: string;
}) => {
	return (
		<Card as="li" clickable shadow>
			<Flex flexDirection="column-reverse">
				<CardInner>
					<Stack gap={1} flexGrow={1}>
						<Box as="h3">
							<CardLink href={`/templates/${slug}`}>{label}</CardLink>
						</Box>
						<Text>{description}</Text>
					</Stack>
				</CardInner>
				<img
					src={`/agds-next/img/templates/${slug}.png`}
					role="presentation"
					alt=""
					height="auto"
					width="100%"
					css={mq({
						borderBottom: `1px solid ${boxPalette.borderMuted}`,
						objectFit: 'cover',
					})}
				/>
			</Flex>
		</Card>
	);
};

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../templates/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const templateList = await getTemplateList();

	const templateLinks = templateList.map(({ slug, title, description }) => ({
		href: `/templates/${slug}`,
		slug,
		label: title,
		description: description || null,
	}));

	return {
		props: {
			source,
			templateLinks,
		},
	};
}
