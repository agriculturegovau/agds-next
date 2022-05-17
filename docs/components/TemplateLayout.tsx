import { PropsWithChildren } from 'react';
import { H1 } from '@ag.ds-next/heading';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { SideNavProps } from '@ag.ds-next/side-nav';
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

type TemplateLayoutProps = PropsWithChildren<{
	breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	template: Template;
	navLinks: SideNavProps['items'];
}>;

export const TemplateLayout = ({
	breadcrumbs,
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
				editPath={`/templates/${template.slug}.mdx`}
				breadcrumbs={breadcrumbs}
			>
				<Stack as="main" gap={1}>
					<Flex flexDirection="column" gap={0.25} paddingBottom={1}>
						<Text fontSize="lg" color="muted" fontWeight="bold">
							vX.X.X
						</Text>
						<H1>{template.data.title}</H1>
						<Text fontSize="lg" color="muted">
							{template.data.description}
						</Text>
					</Flex>

					<SecondaryNav activePath={router.asPath} links={subNavItems} />
					<Box paddingY={0.5}>{children}</Box>

					<Callout title="Questions or feedback?">
						<Text as="p">Contact details go here...</Text>
					</Callout>
				</Stack>
			</PageLayout>
		</AppLayout>
	);
};
