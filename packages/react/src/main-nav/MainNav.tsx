import { Fragment, type PropsWithChildren } from 'react';
import { type BorderColor } from '../box';
import { findBestMatch, type ResponsiveProp, useTernaryState } from '../core';
import { MainNavBackground } from './localPalette';
import { MainNavContainer } from './MainNavContainer';
import { MainNavDialog } from './MainNavDialog';
import { type MainNavListItemType } from './MainNavList';
import { MainNavListDropdown } from './MainNavListItemDropdown';

export type MainNavProps = PropsWithChildren<{
	/** Used for highlighting the active navigation item. */
	activePath?: string;
	/** The background of the component. */
	background?: MainNavBackground;
	borderColor?: ResponsiveProp<BorderColor>;
	/** When true, removes all navigation items to reduce distractions.  */
	focusMode?: boolean;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** List of navigation items to display. */
	items?: MainNavListItemType[];
	/** Optional list of navigation items to display on the right of the component. */
	secondaryItems?: (MainNavListItemType | MainNavListDropdown)[];
}>;

export function MainNav({
	activePath,
	background = 'body',
	borderColor = 'accent',
	focusMode = false,
	id,
	items,
	secondaryItems,
}: MainNavProps) {
	const [isMobileMenuOpen, openMobileMenu, closeMobileMenu] =
		useTernaryState(false);

	const bestMatch = findBestMatch(
		[...(items || []), ...(secondaryItems || [])],
		activePath
	);

	return (
		<Fragment>
			<MainNavContainer
				activePath={bestMatch}
				background={background}
				borderColor={borderColor}
				focusMode={focusMode}
				id={id}
				isMobileMenuOpen={isMobileMenuOpen}
				items={items}
				openMobileMenu={openMobileMenu}
				secondaryItems={secondaryItems}
			/>
			{/* Mobile dialog menu */}
			<MainNavDialog
				activePath={bestMatch}
				closeMobileMenu={closeMobileMenu}
				isMobileMenuOpen={isMobileMenuOpen}
				items={items}
			/>
		</Fragment>
	);
}
