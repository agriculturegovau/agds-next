import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { SideNavProps } from '@ag.ds-next/react/side-nav';
import { SkipLinksProps } from '@ag.ds-next/react/skip-link';
import { Text } from '@ag.ds-next/react/text';
import { Callout } from '@ag.ds-next/react/callout';
import { SubNav } from '@ag.ds-next/react/sub-nav';
import type {
	Template,
	getTemplateBreadcrumbs,
	getTemplateSubNavItems,
} from '../lib/mdx/templates';
import { AppLayout } from './AppLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';

type TemplateLayoutProps = PropsWithChildren<{
	breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	editPath: string;
	subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	skipLinks?: SkipLinksProps['links'];
	template: Template;
	navLinks: SideNavProps['items'];
}>;

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
					callToAction={
						template.previewPath && (
							<CallToActionLink href={`/example-site${template.previewPath}`}>
								View template preview
							</CallToActionLink>
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
				<Callout title="Questions or feedback?">
					<Text as="p">Contact details go here...</Text>
				</Callout>
			</PageLayout>
		</AppLayout>
	);
};
