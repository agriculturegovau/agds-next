import { PropsWithChildren } from 'react';
import { Box, Stack } from '@ag.ds-next/box';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { SideNavProps } from '@ag.ds-next/side-nav';
import { SkipLinksProps } from '@ag.ds-next/skip-link';
import { Text } from '@ag.ds-next/text';
import { Callout } from '@ag.ds-next/callout';
import { SecondaryNav } from '@ag.ds-next/secondary-nav';
import { useRouter } from 'next/router';

import { AppLayout } from './AppLayout';
import { PageLayout } from './PageLayout';

import type {
	Template,
	getTemplateBreadcrumbs,
	getTemplateSubNavItems,
} from '../lib/mdx';
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
				<Stack as="main" gap={2}>
					<Stack gap={1.5} alignItems="flex-start">
						<PageTitle
							pretext={`v${template.data.version}`}
							title={template.title}
							introduction={template.data.description}
						/>
						{template.previewUrl && (
							<CallToActionLink href={template.previewUrl}>
								View template preview
							</CallToActionLink>
						)}
					</Stack>
					<SecondaryNav activePath={router.asPath} links={subNavItems} />
					<Box>{children}</Box>
					<Callout title="Questions or feedback?">
						<Text as="p">Contact details go here...</Text>
					</Callout>
				</Stack>
			</PageLayout>
		</AppLayout>
	);
};
