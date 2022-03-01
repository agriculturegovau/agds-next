import { NavContainer, NavContainerProps } from './NavContainer';
import { NavList, NavListLink } from './NavList';

import { findBestMatch } from './utils';

export type MainNavProps = React.PropsWithChildren<{
	id?: string;
	'aria-label'?: string;
	activePath?: string;
	links: NavListLink[];
	secondaryLinks?: NavListLink[];
	variant: NavContainerProps['variant'];
}>;

export function MainNav({
	variant = 'darkAlt',
	links,
	secondaryLinks,
	activePath,
	id,
	'aria-label': ariaLabel = 'main',
}: MainNavProps) {
	const bestMatch = findBestMatch(
		[...links, ...(secondaryLinks || [])],
		activePath
	);
	return (
		<NavContainer variant={variant} id={id} aria-label={ariaLabel}>
			<NavList links={links} activePath={bestMatch} />
			{secondaryLinks?.length ? (
				<NavList links={secondaryLinks} activePath={bestMatch} />
			) : null}
		</NavContainer>
	);
}
