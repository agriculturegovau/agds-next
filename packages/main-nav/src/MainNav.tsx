import { ReactNode } from 'react';
import { NavContainer, NavContainerProps } from './NavContainer';
import { NavList, NavListLink } from './NavList';

import { findBestMatch } from './utils';

export type MainNavProps = React.PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	links: NavListLink[];
	/** Place for your global actions */
	rightContent: ReactNode;
	secondaryLinks?: NavListLink[];
	variant: NavContainerProps['variant'];
}>;

export function MainNav({
	variant = 'darkAlt',
	links,
	rightContent,
	activePath,
	id,
	'aria-label': ariaLabel = 'main',
}: MainNavProps) {
	const bestMatch = findBestMatch(links, activePath);
	return (
		<NavContainer
			variant={variant}
			id={id}
			aria-label={ariaLabel}
			rightContent={rightContent}
		>
			<NavList links={links} activePath={bestMatch} />
		</NavContainer>
	);
}
