import { NavContainer, NavContainerProps } from './NavContainer';
import { NavList, NavListLink } from './NavList';

import { findBestMatch } from './utils';

export type MainNavProps = React.PropsWithChildren<{
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
	secondaryLinks,
	activePath,
	id,
}: MainNavProps) {
	const bestMatch = findBestMatch(
		[...links, ...(secondaryLinks || [])],
		activePath
	);
	return (
		<NavContainer variant={variant} id={id}>
			<NavList links={links} activePath={bestMatch} />
			{secondaryLinks?.length ? (
				<NavList links={secondaryLinks} activePath={bestMatch} />
			) : null}
		</NavContainer>
	);
}
