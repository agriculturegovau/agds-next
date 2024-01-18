import { PropsWithChildren } from 'react';
import { findBestMatch } from '../core';
import { MainNavContainer } from './MainNavContainer';
import { MainNavDialog } from './MainNavDialog';
import { MainNavListItemType } from './MainNavList';
import { MainNavBackground } from './localPalette';
import { MainNavListDropdown } from './MainNavListItemDropdown';
import { MainNavProvider } from './MainNavProvider';

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
	secondaryItems?: (MainNavListItemType | MainNavListDropdown)[];
}>;

export function MainNav({
	background = 'body',
	activePath,
	items,
	secondaryItems,
	id,
}: MainNavProps) {
	const bestMatch = findBestMatch(
		[...(items || []), ...(secondaryItems || [])],
		activePath
	);

	return (
		<MainNavProvider>
			<MainNavContainer
				background={background}
				id={id}
				activePath={bestMatch}
				items={items}
				secondaryItems={secondaryItems}
			/>
			{/* Mobile dialog menu */}
			<MainNavDialog items={items} activePath={bestMatch} />
		</MainNavProvider>
	);
}
