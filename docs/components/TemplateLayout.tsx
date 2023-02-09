import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@ag.ds-next/react/box';
import { SideNavProps } from '@ag.ds-next/react/side-nav';
import { SkipLinksProps } from '@ag.ds-next/react/skip-link';
import { SubNav } from '@ag.ds-next/react/sub-nav';
import { ButtonLink } from '@ag.ds-next/react/button';
import type {
	Template,
	getTemplateBreadcrumbs,
	getTemplateSubNavItems,
} from '../lib/mdx/templates';
import { AppLayout } from './AppLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';
import { FigmaLogo } from './FigmaLogo';
import { GithubLogo } from './GithubLogo';

type TemplateLayoutProps = PropsWithChildren<{
	breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	editPath: string;
	subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	skipLinks?: SkipLinksProps['links'];
	template: Template;
	navLinks: SideNavProps['items'];
}>;

// TODO fixme
const pkg = {
	storybookPath: 'x',
	figmaGalleryNodeId: 'x',
};

export const TemplateLayout = ({
	breadcrumbs,
	editPath,
	skipLinks,
	subNavItems,
	children,
	navLinks,
	template,
}: TemplateLayoutProps) => {
	const router = useRouter();
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
					// callToAction={
					// 	template.previewPath && (
					// 		<CallToActionLink href={`/example-site${template.previewPath}`}>
					// 			View template preview
					// 		</CallToActionLink>
					// 	)
					// }
					callToAction={
						(pkg.storybookPath || pkg.figmaGalleryNodeId) && (
							<Flex
								gap={1.5}
								flexDirection={['column', 'row']}
								alignItems="flex-start"
							>
								{pkg.figmaGalleryNodeId && (
									<ButtonLink
										variant="text"
										href={`https://www.figma.com/file/SgSHfK8AUadp7aEzD34ZG3/AgDS---Agriculture-Design-System?node-id=${pkg.figmaGalleryNodeId}`}
										iconBefore={FigmaLogo}
									>
										View in Figma
									</ButtonLink>
								)}
								{pkg.figmaGalleryNodeId && (
									<ButtonLink
										variant="text"
										href={`https://www.figma.com/file/SgSHfK8AUadp7aEzD34ZG3/AgDS---Agriculture-Design-System?node-id=${pkg.figmaGalleryNodeId}`}
										iconBefore={GithubLogo}
									>
										View in Github
									</ButtonLink>
								)}
							</Flex>
						)
					}
				/>
				<SubNav
					activePath={router.asPath}
					links={subNavItems.map((item) => ({
						...item,
						scroll: false,
					}))}
				/>
				{children}
			</PageLayout>
		</AppLayout>
	);
};
