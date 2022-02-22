import { NavContainer, NavContainerProps } from './NavContainer';
import { NavList, NavListProps } from './NavList';

import { findBestMatch } from './utils';

export function MainNav({
	variant = 'darkAlt',
	links,
	secondaryLinks,
	activePath,
}: React.PropsWithChildren<{
	variant: NavContainerProps['variant'];
	links: NavListProps['links'];
	secondaryLinks?: NavListProps['links'];
	activePath?: string;
}>) {
	const bestMatch = findBestMatch(
		[...links, ...(secondaryLinks || [])],
		activePath
	);
	return (
		<NavContainer variant={variant}>
			<NavList links={links} activePath={bestMatch} />
			{secondaryLinks?.length ? (
				<NavList links={secondaryLinks} activePath={bestMatch} />
			) : null}
		</NavContainer>
	);
}
