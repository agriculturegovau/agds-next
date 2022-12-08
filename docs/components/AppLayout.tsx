import { ReactNode } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { SkipLinks } from '@ag.ds-next/skip-link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { GlobalAlert } from '@ag.ds-next/global-alert';
import { Text } from '@ag.ds-next/text';

type AppLayoutProps = {
	children?: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<>
			<SkipLinks
				links={[
					{ href: '#main-content', label: 'Skip to main content' },
					{ href: '#main-nav', label: 'Skip to main navigation' },
				]}
			/>
			<Flex flexDirection="column" fontFamily="body" minHeight="100vh">
				<GlobalAlert onDismiss={console.log}>
					<Text as="p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
						nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
						cursus orci vulputate nibh sagittis blandit.
					</Text>
				</GlobalAlert>
				<SiteHeader />
				<Box flexGrow={1}>{children}</Box>
				<SiteFooter />
			</Flex>
		</>
	);
};
