import { ReactNode } from 'react';
import { NavContainer, NavContainerProps } from './NavContainer';
import { NavList, NavListLink } from './NavList';

import { findBestMatch } from './utils';

export type MainNavProps = React.PropsWithChildren<{
	/** Place for your global actions */
	rightContent: ReactNode;
	variant: NavContainerProps['variant'];
	links: NavListLink[];
	secondaryLinks?: NavListLink[];
	activePath?: string;
	id?: string;
	ariaLabel?: string;
}>;

export function MainNav({
	variant = 'darkAlt',
	links,
	rightContent,
	activePath,
	id,
}: MainNavProps) {
	const bestMatch = findBestMatch(links, activePath);
	return (
		<NavContainer variant={variant} id={id} rightContent={rightContent}>
			<NavList links={links} activePath={bestMatch} />
		</NavContainer>
	);
}
