import { PropsWithChildren, useMemo } from 'react';
import { Box, Flex } from '@ag.ds-next/react/box';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { TemplateBanner } from './TemplateBanner';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

type SiteLayoutProps = PropsWithChildren<{
	/** If true, the area between the header and footer will be a 'main' element with the ID of 'main-content' applied (used for skip links). */
	applyMainElement?: boolean;
	/** If true, the `MainNav` component will not be rendered. Used on pages with focused tasks such as multi-page forms. */
	focusMode?: boolean;
	/** The name and slug of the template. */
	template?: { name: string; slug: string };
}>;

export const SiteLayout = ({
	children,
	applyMainElement = true,
	focusMode = false,
	template,
}: SiteLayoutProps) => {
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
				{template ? <TemplateBanner {...template} /> : null}
				<SiteHeader focusMode={focusMode} />
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
