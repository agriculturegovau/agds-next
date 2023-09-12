import { PropsWithChildren } from 'react';
import { findBestMatch } from '../core';
import { SubNavContainer } from './SubNavContainer';
import { SubNavList, SubNavListLink } from './SubNavList';

export type SubNavProps = PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	/** The navigation list items. */
	links: SubNavListLink[];
	/** @deprecated This prop is no longer used and will be removed in the next major version. */
	background?: 'body' | 'bodyAlt';
}>;

export function SubNav({
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'secondary',
}: SubNavProps) {
	const bestMatch = findBestMatch(links, activePath);
	return (
		<SubNavContainer id={id} aria-label={ariaLabel}>
			<SubNavList links={links} activePath={bestMatch} />
		</SubNavContainer>
	);
}
