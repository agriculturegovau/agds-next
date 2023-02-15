import { PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/react/box';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

type AppLayoutProps = PropsWithChildren<{
	/** If true, the `main` element will have the id of 'main-content' applied. Used for skip links. */
	applyMainContentId?: boolean;
}>;

export const AppLayout = ({
	applyMainContentId = true,
	children,
}: AppLayoutProps) => {
	return (
		<>
			<SkipLinks
				links={[
					{ href: '#main-content', label: 'Skip to main content' },
					{ href: '#main-nav', label: 'Skip to main navigation' },
				]}
			/>
			<Flex flexDirection="column" fontFamily="body" minHeight="100vh">
				<SiteHeader />
				<Box
					as="main"
					flexGrow={1}
					{...(applyMainContentId && {
						id: 'main-content',
						tabIndex: -1,
						css: { '&:focus': { outline: 'none' } },
					})}
				>
					{children}
				</Box>
				<SiteFooter />
			</Flex>
		</>
	);
};
