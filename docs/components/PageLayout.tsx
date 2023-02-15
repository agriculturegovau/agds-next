import { ComponentProps, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { PageContent, ContentBleed } from '@ag.ds-next/react/content';
import { Flex, Stack } from '@ag.ds-next/react/box';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { SkipLinks, SkipLinksProps } from '@ag.ds-next/react/skip-link';
import { Breadcrumbs, BreadcrumbsProps } from '@ag.ds-next/react/breadcrumbs';
import { EditPage } from './EditPage';

export function PageLayout({
	sideNav,
	editPath,
	skipLinks,
	breadcrumbs,
	children,
}: PropsWithChildren<{
	sideNav?: {
		title: string;
		titleLink: string;
		items: ComponentProps<typeof SideNav>['items'];
	};
	breadcrumbs?: BreadcrumbsProps['links'];
	skipLinks?: SkipLinksProps['links'];
	editPath?: string;
}>) {
	const router = useRouter();
	return (
		<>
			{sideNav && (
				<SkipLinks
					links={[
						{
							href: '#page-content',
							label: `Skip to page content`,
						},
					]}
				/>
			)}
			<PageContent>
				<Columns>
					{sideNav && (
						<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
							<ContentBleed visible={{ md: false }}>
								<SideNav
									collapseTitle="In this section"
									activePath={router.asPath}
									title={sideNav.title}
									titleLink={sideNav.titleLink}
									items={sideNav.items}
								/>
							</ContentBleed>
						</Column>
					)}
					<Column
						id="page-content"
						columnSpan={{ xs: 12, md: 8 }}
						columnStart={{ lg: sideNav ? 5 : 1 }}
					>
						{skipLinks?.length ? <SkipLinks links={skipLinks} /> : null}
						<Stack flexGrow={1} gap={3}>
							{breadcrumbs?.length ? <Breadcrumbs links={breadcrumbs} /> : null}
							{children}
							{editPath && (
								<Flex justifyContent="flex-start">
									<EditPage path={editPath} />
								</Flex>
							)}
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</>
	);
}
