import { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { SideNavProps } from '@ag.ds-next/react/side-nav';
import { ButtonLink } from '@ag.ds-next/react/button';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Template, getTemplateBreadcrumbs } from '../lib/mdx/templates';
import { SiteLayout } from './SiteLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';
import { FigmaLogo } from './FigmaLogo';
import { GithubLogo } from './GithubLogo';
import { StorybookLogo } from './StorybookLogo';

type TemplateLayoutProps = PropsWithChildren<{
	breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	editPath: string;
	template: Template;
	navLinks: SideNavProps['items'];
}>;

export function TemplateLayout({
	breadcrumbs,
	editPath,
	children,
	navLinks,
	template,
}: TemplateLayoutProps) {
	return (
		<SiteLayout applyMainElement={false}>
			<PageLayout
				applyMainElement={true}
				sideNav={{
					title: 'Templates',
					titleLink: '/templates',
					items: navLinks,
				}}
				editPath={editPath}
				breadcrumbs={breadcrumbs}
			>
				<PageTitle
					pretext={`v${template.version}`}
					title={template.title}
					introduction={template.description}
					callToAction={
						template.previewPath && (
							<CallToActionLink href={`/example-site${template.previewPath}`}>
								View template preview
							</CallToActionLink>
						)
					}
				/>
				{(template.figmaTemplateNodeId ||
					template.githubTemplatePath ||
					template.storybookPath) && (
					<Flex
						gap={1.5}
						flexWrap="wrap"
						flexDirection={['column', 'row']}
						alignItems="flex-start"
					>
						{template.figmaTemplateNodeId && (
							<ButtonLink
								variant="text"
								href={`${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=${template.figmaTemplateNodeId}`}
								iconBefore={FigmaLogo}
							>
								View in Figma
							</ButtonLink>
						)}
						{template.storybookPath && (
							<ButtonLink
								variant="text"
								href={`${process.env.NEXT_PUBLIC_STORYBOOK_URL}?path=${template.storybookPath}`}
								iconBefore={StorybookLogo}
							>
								View in Storybook
							</ButtonLink>
						)}
						{template.githubTemplatePath && (
							<ButtonLink
								variant="text"
								href={`https://github.com/steelthreads/agds-next/blob/main${template.githubTemplatePath}`}
								iconBefore={GithubLogo}
							>
								View in Github
							</ButtonLink>
						)}
					</Flex>
				)}
				{children}
			</PageLayout>
		</SiteLayout>
	);
}
