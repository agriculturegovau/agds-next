import { PropsWithChildren } from 'react';
import { SecondaryNavContainer } from './SecondaryNavContainer';
import { SecondaryNavList, SecondaryNavListLink } from './SecondaryNavList';

export type SecondaryNavProps = PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	links: SecondaryNavListLink[];
}>;

export function SecondaryNav({
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'secondary',
}: SecondaryNavProps) {
	return (
		<SecondaryNavContainer id={id} aria-label={ariaLabel}>
			<SecondaryNavList links={links} activePath={activePath} />
		</SecondaryNavContainer>
	);
}
