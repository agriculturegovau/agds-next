import { PropsWithChildren } from 'react';
import { NavContainer, NavContainerVariant } from './NavContainer';
import { NavList, NavListLink } from './NavList';

export type SecondaryNavProps = PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	links: NavListLink[];
	variant: NavContainerVariant;
}>;

export function SecondaryNav({
	variant = 'darkAlt',
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'main',
}: SecondaryNavProps) {
	return (
		<NavContainer variant={variant} id={id} aria-label={ariaLabel}>
			<NavList links={links} activePath={activePath} />
		</NavContainer>
	);
}
