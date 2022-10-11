import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import {
	Callout,
	CallToActionLink,
	SideNavProps,
	SkipLinksProps,
	SubNav,
	Text,
} from '@ag.ds-next/design-system';
import type {
	getTemplateBreadcrumbs,
	getTemplateSubNavItems,
	Template,
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
					pretext={`v${template.data.version}`}
					title={template.title}
					introduction={template.data.description}
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
