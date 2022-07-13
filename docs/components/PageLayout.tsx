import { ComponentProps, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { PageContent, ContentBleed } from '@ag.ds-next/content';
import { Flex, Stack } from '@ag.ds-next/box';
import { Columns, Column } from '@ag.ds-next/columns';
import { SideNav } from '@ag.ds-next/side-nav';
import { SkipLinks, SkipLinksProps } from '@ag.ds-next/skip-link';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
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
	breadcrumbs?: ComponentProps<typeof Breadcrumbs>['links'];
	skipLinks?: SkipLinksProps['links'];
	editPath?: string;
}>) {
	const router = useRouter();
	return (
		<PageContent>
			<Columns>
				{sideNav && (
					<Column columnSpan={{ xs: 12, md: 3 }}>
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
					columnSpan={{ xs: 12, md: 8 }}
					columnStart={{ md: sideNav ? 5 : 1 }}
					as="main"
					id="main-content"
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
	);
}
