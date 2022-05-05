import { H1, H2, H3 } from '@ag.ds-next/heading';
import { Flex, Stack } from '@ag.ds-next/box';
import { Card } from '@ag.ds-next/card';
import { mq, tokens } from '@ag.ds-next/core';
import { Text, TextLink } from '@ag.ds-next/text';
import { Content } from '@ag.ds-next/content';

import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function TemplatesPage() {
	return (
		<>
			<DocumentTitle title="Templates | AgDS" />
			<AppLayout>
				<Content>
					<H1>Templates</H1>
					<Text as="p">All of our examples</Text>

					<Stack as="ul" gap={1} maxWidth={tokens.maxWidth.bodyText}>
						{templateInfo.map((template) => {
							return <TemplateCard key={template.name} data={template} />;
						})}
					</Stack>
				</Content>
			</AppLayout>
		</>
	);
}

const TemplateCard = ({
	data: { imageId, name, description, URLS },
}: {
	data: typeof templateInfo[number];
}) => {
	return (
		<Card as="li">
			<Flex flexDirection={['column', 'row']}>
				<Stack padding={1.5} gap={1} flexGrow={1}>
					<Stack gap={0.5}>
						<H3>{name}</H3>
						<Text>{description}</Text>
					</Stack>
					<Flex gap={1} flexDirection={['column', 'row']}>
						{URLS.preview ? (
							<TextLink href={URLS.preview}>View Preview</TextLink>
						) : null}
						{URLS.code ? <TextLink href={URLS.code}>See Code</TextLink> : null}
						{URLS.figma ? (
							<TextLink href={URLS.figma}>View Figma File</TextLink>
						) : null}
					</Flex>
				</Stack>
				<img
					src={`/agds-next/img/templates/${imageId}.jpg`}
					alt={`Screenshot of ${name} example`}
					height="auto"
					css={mq({
						width: ['100%', '40%'],
						maxWidth: [undefined, 300],
						objectFit: 'cover',
					})}
				/>
			</Flex>
		</Card>
	);
};

const templateInfo = [
	{
		imageId: 'home',
		name: 'Home page',
		description: 'Our homepage example',
		URLS: {
			code: 'https://github.com/steelthreads/agds-next/blob/main/example-site/pages/index.tsx',
			preview:
				'https://steelthreads.github.io/agds-next/example-site/index.html',
		},
	},
	{
		imageId: 'content',
		name: 'Content',
		description: 'Our content page example',
		URLS: {
			code: 'https://github.com/steelthreads/agds-next/blob/main/example-site/pages/content.tsx',
			preview: 'https://steelthreads.github.io/agds-next/example-site/content',
		},
	},
	{
		imageId: 'single-page-form',
		name: 'Single-page form',
		description: 'Single-page form example',
		URLS: {
			code: 'https://github.com/steelthreads/agds-next/blob/main/example-site/pages/form-single-page.tsx',
			preview:
				'https://steelthreads.github.io/agds-next/example-site/form-single-page',
		},
	},
	{
		imageId: 'multi-step-form',
		name: 'Multi-step form',
		description: 'An example for a multi-facited form',
		URLS: {
			code: 'https://github.com/steelthreads/agds-next/blob/main/example-site/pages/form-multi-step.tsx',
			preview:
				'https://steelthreads.github.io/agds-next/example-site/form-multi-step',
		},
	},
] as const;
