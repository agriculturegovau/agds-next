import { PropsWithChildren } from 'react';
import { NavContainer } from './NavContainer';
import { NavList, NavListItem } from './NavList';
import { findBestMatch, MainNavBackground } from './utils';

export type MainNavProps = PropsWithChildren<{
	activePath?: string;
	background?: MainNavBackground;
	id?: string;
	items?: NavListItem[];
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
