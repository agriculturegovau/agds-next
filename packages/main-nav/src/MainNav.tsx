import { ReactNode } from 'react';
import { NavContainer, NavContainerVariant } from './NavContainer';
import { NavList, NavListLink } from './NavList';

import { findBestMatch } from './utils';

export type MainNavProps = React.PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	links?: NavListLink[];
	rightContent?: ReactNode;
	variant: NavContainerVariant;
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
			links={links}
		>
			<NavList links={links} activePath={bestMatch} />
		</NavContainer>
	);
}
