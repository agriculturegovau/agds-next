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
				applyMainElement={true}
				sideNav={{
					title: 'Patterns',
					titleLink: '/patterns',
					items: navLinks,
				}}
				editPath={editPath}
				breadcrumbs={breadcrumbs}
			>
				<PageTitle title={pattern.title} introduction={pattern.description} />
				{(pattern.figmaTemplateNodeId ||
					pattern.githubTemplatePath ||
					pattern.storybookPath) && (
					<Flex
						gap={1.5}
						flexWrap="wrap"
						flexDirection={['column', 'row']}
						alignItems="flex-start"
					>
						{pattern.figmaTemplateNodeId && (
							<ButtonLink
								variant="text"
								href={`${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=${pattern.figmaTemplateNodeId}`}
								iconBefore={FigmaLogo}
							>
								View in Figma
							</ButtonLink>
						)}
						{pattern.storybookPath && (
							<ButtonLink
								variant="text"
								href={`${process.env.NEXT_PUBLIC_STORYBOOK_URL}?path=${pattern.storybookPath}`}
								iconBefore={StorybookLogo}
							>
								View in Storybook
							</ButtonLink>
						)}
						{pattern.githubTemplatePath && (
							<ButtonLink
								variant="text"
								href={`https://github.com/steelthreads/agds-next/blob/main${pattern.githubTemplatePath}`}
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
