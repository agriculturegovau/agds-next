import { ReactNode } from 'react';
import { Content } from '@ag.ds-next/content';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { LinkList } from '@ag.ds-next/link-list';
import { PropsWithChildren } from 'react';

import { EditPage } from './EditPage';

export function PageLayout({
	navLinks,
	editPath,
	children,
}: PropsWithChildren<{
	navLinks?: { href: string; label: ReactNode }[];
	editPath?: string;
}>) {
	return (
		<Content spacing="large">
			<Flex gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }}>
				{navLinks && (
					<Box width={'20rem'} padding={1} flexShrink={0}>
						<LinkList links={navLinks} />
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
