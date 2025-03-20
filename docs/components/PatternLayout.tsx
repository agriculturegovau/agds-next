import { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { SideNavProps } from '@ag.ds-next/react/side-nav';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Pattern, getPatternBreadcrumbs } from '../lib/mdx/patterns';
import { SiteLayout } from './SiteLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';
import { FigmaLogo } from './FigmaLogo';
import { GithubLogo } from './GithubLogo';
import { StorybookLogo } from './StorybookLogo';

type PatternLayoutProps = PropsWithChildren<{
	breadcrumbs: Awaited<ReturnType<typeof getPatternBreadcrumbs>>;
	editPath: string;
	pattern: Pattern;
	navLinks: SideNavProps['items'];
}>;

export function PatternLayout({
	breadcrumbs,
	editPath,
	children,
	navLinks,
	pattern,
}: PatternLayoutProps) {
	return (
		<SiteLayout applyMainElement={false}>
			<PageLayout
				applyMainElement
				breadcrumbs={breadcrumbs}
				editPath={editPath}
				sideNav={{
					title: 'Patterns',
					titleLink: '/patterns',
					items: navLinks,
				}}
			>
				<PageTitle introduction={pattern.description} title={pattern.title} />
				{(pattern.figmaTemplateNodeId ||
					pattern.githubTemplatePath ||
					pattern.storybookPath) && (
					<Flex
						alignItems="flex-start"
						flexDirection={['column', 'row']}
						flexWrap="wrap"
						gap={1.5}
					>
						{pattern.figmaTemplateNodeId && (
							<ButtonLink
								href={`${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=${pattern.figmaTemplateNodeId}`}
								iconBefore={FigmaLogo}
								variant="text"
							>
								View in Figma
							</ButtonLink>
						)}
						{pattern.storybookPath && (
							<ButtonLink
								href={`${process.env.NEXT_PUBLIC_STORYBOOK_URL}?path=${pattern.storybookPath}`}
								iconBefore={StorybookLogo}
								variant="text"
							>
								View in Storybook
							</ButtonLink>
						)}
						{pattern.githubTemplatePath && (
							<ButtonLink
								href={`https://github.com/agriculturegovau/agds-next/blob/main${pattern.githubTemplatePath}`}
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
