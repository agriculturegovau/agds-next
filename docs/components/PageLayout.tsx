import { useRouter } from 'next/router';
import { ComponentProps, PropsWithChildren } from 'react';
import {
	Breadcrumbs,
	Column,
	Columns,
	ContentBleed,
	Flex,
	PageContent,
	SideNav,
	SkipLinks,
	SkipLinksProps,
	Stack,
} from '@ag.ds-next/design-system';
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
					columnSpan={{ xs: 12, md: 8 }}
					columnStart={{ lg: sideNav ? 5 : 1 }}
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
