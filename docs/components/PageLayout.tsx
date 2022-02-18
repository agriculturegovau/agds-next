import { Content } from '@ag.ds-next/content';
import { Flex, Stack } from '@ag.ds-next/box';
import { Columns, Column } from '@ag.ds-next/columns';
import { SideNav } from '@ag.ds-next/side-nav';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';

import { ComponentProps, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import { EditPage } from './EditPage';

export function PageLayout({
	sideNav,
	editPath,
	breadcrumbs,
	children,
}: PropsWithChildren<{
	sideNav?: {
		title: string;
		titleLink: string;
		items: ComponentProps<typeof SideNav>['items'];
	};
	breadcrumbs?: ComponentProps<typeof Breadcrumbs>['links'];
	editPath?: string;
}>) {
	const router = useRouter();
	return (
		<Content>
			<Columns>
				{sideNav && (
					<Column columnSpan={{ xs: 12, md: 3 }}>
						<SideNav
							variant="light"
							collapseTitle="In this section"
							activePath={router.asPath}
							title={sideNav.title}
							titleLink={sideNav.titleLink}
							items={sideNav.items}
						/>
					</Column>
				)}

				<Column columnStart={{ xs: 1, md: sideNav ? 5 : 1 }} columnEnd="last">
					<Stack flexGrow={1} gap={1}>
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
		</Content>
	);
}
