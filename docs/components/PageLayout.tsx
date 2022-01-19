import { Content } from '@ag.ds-next/content';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { SideNav } from '@ag.ds-next/side-nav';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import { EditPage } from './EditPage';

export function PageLayout({
	navLinks,
	editPath,
	children,
}: PropsWithChildren<{
	navLinks?: { href: string; label: string }[];
	editPath?: string;
}>) {
	const router = useRouter();
	return (
		<Content spacing="large">
			<Flex gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }}>
				{navLinks && (
					<Box width={'20rem'} padding={1} flexShrink={0}>
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
					{children}
					<Flex justifyContent="flex-start">
						<EditPage path={editPath} />
					</Flex>
				</Stack>
			</Flex>
		</Content>
	);
}
