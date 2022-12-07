import { ReactNode, useState } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { SkipLinks } from '@ag.ds-next/skip-link';
import { Text } from '@ag.ds-next/text';
import { GlobalAlert } from '@ag.ds-next/global-alert';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

type AppLayoutProps = {
	children?: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
	const [open, setOpen] = useState(true);
	return (
		<>
			<SkipLinks
				links={[
					{ href: '#main-content', label: 'Skip to main content' },
					{ href: '#main-nav', label: 'Skip to main navigation' },
				]}
			/>
			{open && (
				<GlobalAlert title="Alert title" onDismiss={() => setOpen(false)}>
					<Text as="p">
						There is an issue with myGov ID which is preventing sign in to that
						shiny new authenticated state that Adham has been working on.
					</Text>
				</GlobalAlert>
			)}
			<Flex flexDirection="column" fontFamily="body" minHeight="100vh">
				<SiteHeader />
				<Box flexGrow={1}>{children}</Box>
				<SiteFooter />
			</Flex>
		</>
	);
};
