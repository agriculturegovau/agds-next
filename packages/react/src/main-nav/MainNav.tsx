import { PropsWithChildren } from 'react';
import { findBestMatch } from '../core';
import { NavContainer } from './NavContainer';
import { NavList, NavListItem } from './NavList';
import { MainNavBackground } from './utils';

export type MainNavProps = PropsWithChildren<{
	/** Used for highlighting the active navigation item. */
	activePath?: string;
	/** The background of the component. */
	background?: MainNavBackground;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** List of navigation items to display. */
	items?: NavListItem[];
	/** Optional list of navigation items to display on the right of the component. */
	secondaryItems?: NavListItem[];
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
		<NavContainer
			background={background}
			id={id}
			hasItems={items && items.length > 0}
			rightContent={
				<NavList
					aria-label="secondary"
					items={secondaryItems}
					activePath={bestMatch}
					type="secondary"
				/>
			}
		>
			<NavList
				aria-label="main"
				items={items}
				activePath={bestMatch}
				type="primary"
			/>
		</NavContainer>
	);
}
