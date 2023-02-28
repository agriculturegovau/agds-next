import { PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/react/box';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

type AppLayoutProps = PropsWithChildren<{
	/** If true, the area between the header and footer will be a 'main' element with the ID of 'main-content' applied (used for skip links). */
	applyMainElement?: boolean;
}>;

export const AppLayout = ({
	applyMainElement = true,
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
					flexGrow={1}
					{...(applyMainElement && {
						as: 'main',
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
