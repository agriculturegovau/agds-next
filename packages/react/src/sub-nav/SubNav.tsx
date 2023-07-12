import { PropsWithChildren } from 'react';
import { findBestMatch } from '../core';
import { SubNavContainer, SubNavBackground } from './SubNavContainer';
import { SubNavList, SubNavListLink } from './SubNavList';

export type SubNavProps = PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	/** The navigation list items. */
	links: SubNavListLink[];
	/** If the SubNav is placed on a page with 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: SubNavBackground;
}>;

export function SubNav({
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'secondary',
	background = 'body',
}: SubNavProps) {
	const bestMatch = findBestMatch(links, activePath);
	return (
		<SubNavContainer id={id} aria-label={ariaLabel} background={background}>
			<SubNavList links={links} activePath={bestMatch} />
		</SubNavContainer>
	);
}
