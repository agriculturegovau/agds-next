import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { PullRequestPreviewBanner } from './PullRequestPreviewBanner';

type SiteLayoutProps = PropsWithChildren<{
	/** If true, the area between the header and footer will be a 'main' element with the ID of 'main-content' applied (used for skip links). */
	applyMainElement?: boolean;
}>;

export const SiteLayout = ({
	applyMainElement = true,
	children,
}: SiteLayoutProps) => {
	return (
		<>
			{process.env.NEXT_PUBLIC_GITHUB_PR_PREVIEW_NUMBER ? (
				<PullRequestPreviewBanner
					prPreviewNumber={process.env.NEXT_PUBLIC_GITHUB_PR_PREVIEW_NUMBER}
				/>
			) : null}
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
