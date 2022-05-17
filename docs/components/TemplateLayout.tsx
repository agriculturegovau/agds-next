import { PropsWithChildren } from 'react';
import { H1 } from '@ag.ds-next/heading';
import { Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
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
	breadcrumbs: ReturnType<typeof getTemplateBreadcrumbs>;
	subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	template: Template;
	navLinks: { href: string; label: string }[];
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
					<Flex flexDirection="column" gap={0.25}>
						<H1>{template.data.title}</H1>
						<Text fontSize="lg">{template.data.description}</Text>
					</Flex>

					<SecondaryNav activePath={router.asPath} links={subNavItems} />
					{children}
				</Stack>
			</PageLayout>
		</AppLayout>
	);
};
