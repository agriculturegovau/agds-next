import { Box, Flex } from '@ag.ds-next/box';
import { SkipLinks } from '@ag.ds-next/skip-link';

import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ExampleBanner, ExampleBannerProps } from './ExampleBanner';

export const AppLayout: React.FC<ExampleBannerProps> = ({
	children,
	templateName,
	templateSlug,
}) => {
	return (
		<>
			<SkipLinks
				links={[
					{ href: '#main-content', label: 'Skip to main content' },
					{ href: '#main-nav', label: 'Skip to main navigation' },
				]}
			/>
			<Flex
				flexDirection="column"
				fontFamily="body"
				palette="light"
				minHeight="100vh"
			>
				{templateName ? (
					<ExampleBanner
						templateName={templateName}
						templateSlug={templateSlug}
					/>
				) : null}
				<SiteHeader />
				<Box as="main" id="main-content" flexGrow={1}>
					{children}
				</Box>
				<SiteFooter />
			</Flex>
		</>
	);
};
