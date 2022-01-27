import { Content } from '@ag.ds-next/content';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { SideNav } from '@ag.ds-next/side-nav';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';

import { ComponentProps, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import { EditPage } from './EditPage';

export function PageLayout({
	navLinks,
	editPath,
	breadcrumbs,
	children,
}: PropsWithChildren<{
	navLinks?: ComponentProps<typeof SideNav>['items'];
	breadcrumbs?: ComponentProps<typeof Breadcrumbs>['links'];
	editPath?: string;
}>) {
	const router = useRouter();
	return (
		<Content>
			<Flex
				gap={{ xs: 1, md: 2, lg: 6 }}
				flexDirection={{ xs: 'column', md: 'row' }}
			>
				{navLinks && (
					<Box
						width={{ md: '25%' }}
						minWidth={'10rem'}
						maxWidth={{ md: '20rem' }}
						flexShrink={0}
					>
						<SideNav
							variant="light"
							activePath={router.asPath}
							menuHeader="Packages"
							menuHeaderLink="/packages"
							items={navLinks}
						/>
					</Box>
				)}
				<Stack flexGrow={1} gap={1}>
					{breadcrumbs?.length ? <Breadcrumbs links={breadcrumbs} /> : null}
					{children}
					{editPath && (
						<Flex justifyContent="flex-start">
							<EditPage path={editPath} />
						</Flex>
					)}
				</Stack>
			</Flex>
		</Content>
	);
}
