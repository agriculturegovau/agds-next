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
				applyMainElement
				breadcrumbs={breadcrumbs}
				editPath={editPath}
				sideNav={{
					title: 'Templates',
					titleLink: '/templates',
					items: navLinks,
				}}
			>
				<PageTitle
					callToAction={
						template.previewPath && (
							<CallToActionLink href={`/example-site${template.previewPath}`}>
								View template preview
							</CallToActionLink>
						)
					}
					introduction={template.description}
					title={template.title}
				/>
				{(template.figmaTemplateNodeId ||
					template.githubTemplatePath ||
					template.storybookPath) && (
					<Flex
						alignItems="flex-start"
						flexDirection={['column', 'row']}
						flexWrap="wrap"
						gap={1.5}
					>
						{template.figmaTemplateNodeId && (
							<ButtonLink
								href={`${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=${template.figmaTemplateNodeId}`}
								iconBefore={FigmaLogo}
								variant="text"
							>
								View in Figma
							</ButtonLink>
						)}
						{template.storybookPath && (
							<ButtonLink
								href={`${process.env.NEXT_PUBLIC_STORYBOOK_URL}?path=${template.storybookPath}`}
								iconBefore={StorybookLogo}
								variant="text"
							>
								View in Storybook
							</ButtonLink>
						)}
						{template.githubTemplatePath && (
							<ButtonLink
								href={`https://github.com/agriculturegovau/agds-next/blob/main${template.githubTemplatePath}`}
								iconBefore={GithubLogo}
								variant="text"
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
