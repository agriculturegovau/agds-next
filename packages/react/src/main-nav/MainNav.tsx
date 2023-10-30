import { PropsWithChildren, Fragment } from 'react';
import { findBestMatch, useTernaryState } from '../core';
import { MainNavContainer } from './MainNavContainer';
import { MainNavDialog } from './MainNavDialog';
import { MainNavListItemType } from './MainNavList';
import { MainNavBackground } from './localPalette';

export type MainNavProps = PropsWithChildren<{
	/** Used for highlighting the active navigation item. */
	activePath?: string;
	/** The background of the component. */
	background?: MainNavBackground;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** List of navigation items to display. */
	items?: MainNavListItemType[];
	/** Optional list of navigation items to display on the right of the component. */
	secondaryItems?: MainNavListItemType[];
}>;

export function MainNav({
	background = 'body',
	activePath,
	items,
	secondaryItems,
	id,
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
				background={background}
				id={id}
				openMobileMenu={openMobileMenu}
				activePath={bestMatch}
				items={items}
				secondaryItems={secondaryItems}
			/>
			{/* Mobile dialog menu */}
			<MainNavDialog
				isMobileMenuOpen={isMobileMenuOpen}
				closeMobileMenu={closeMobileMenu}
				items={items}
				activePath={bestMatch}
			/>
		</Fragment>
	);
}
