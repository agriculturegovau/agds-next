import { PropsWithChildren, useMemo } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export const SiteLayout = ({
	children,
	focusMode = false,
}: PropsWithChildren<{
	focusMode?: boolean;
}>) => {
	const skipLinks = useMemo(() => {
		const items = [{ href: '#main-content', label: 'Skip to main content' }];
		if (!focusMode) {
			items.push({ href: '#main-nav', label: 'Skip to main navigation' });
		}
		return items;
	}, [focusMode]);

	return (
		<>
			<SkipLinks links={skipLinks} />
			<Flex
				flexDirection="column"
				fontFamily="body"
				palette="light"
				minHeight="100vh"
			>
				<SiteHeader focusMode={focusMode} />
				<Box
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
					flexGrow={1}
				>
					{children}
				</Box>
				<SiteFooter />
			</Flex>
		</>
	);
};
