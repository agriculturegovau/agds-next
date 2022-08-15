import { PropsWithChildren } from 'react';
import { NavContainer } from './NavContainer';
import { NavList, NavListItem } from './NavList';
import { findBestMatch, MainNavBackground } from './utils';

export type MainNavProps = PropsWithChildren<{
	background?: MainNavBackground;
	activePath?: string;
	'aria-label'?: string;
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
	'aria-label': ariaLabel = 'main',
}: MainNavProps) {
	const bestMatch = findBestMatch(
		[...(items || []), ...(secondaryItems || [])],
		activePath
	);
	return (
		<NavContainer
			background={background}
			id={id}
			aria-label={ariaLabel}
			hasItems={items && items.length > 0}
			rightContent={
				<NavList
					items={secondaryItems}
					activePath={bestMatch}
					type="secondary"
				/>
			}
		>
			<NavList items={items} activePath={bestMatch} type="primary" />
		</NavContainer>
	);
}
