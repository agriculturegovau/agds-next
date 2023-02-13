import { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/react/box';
import { SideNavProps } from '@ag.ds-next/react/side-nav';
import { SkipLinksProps } from '@ag.ds-next/react/skip-link';
import { ButtonLink } from '@ag.ds-next/react/button';
import type { Template, getTemplateBreadcrumbs } from '../lib/mdx/templates';
import { AppLayout } from './AppLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';
import { FigmaLogo } from './FigmaLogo';
import { GithubLogo } from './GithubLogo';

type TemplateLayoutProps = PropsWithChildren<{
	breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	editPath: string;
	skipLinks?: SkipLinksProps['links'];
	template: Template;
	navLinks: SideNavProps['items'];
}>;

export const TemplateLayout = ({
	breadcrumbs,
	editPath,
	skipLinks,
	children,
	navLinks,
	template,
}: TemplateLayoutProps) => {
	return (
		<AppLayout>
			<PageLayout
				sideNav={{
					title: 'Templates',
					titleLink: '/templates',
					items: navLinks,
				}}
				editPath={editPath}
				breadcrumbs={breadcrumbs}
				skipLinks={skipLinks}
			>
				<PageTitle
					pretext={`v${template.version}`}
					title={template.title}
					introduction={template.description}
					callToAction={
						(template.figmaTemplateNodeId || template.githubTemplatePath) && (
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
								{template.githubTemplatePath && (
									<ButtonLink
										variant="text"
										href={`https://github.com/steelthreads/agds-next/blob/main/example-site${template.githubTemplatePath}`}
										iconBefore={GithubLogo}
									>
										View in Github
									</ButtonLink>
								)}
							</Flex>
						)
					}
				/>
				{children}
			</PageLayout>
		</AppLayout>
	);
};
