import { PropsWithChildren } from 'react';
import { SubNavContainer, SubNavContainerVariant } from './SubNavContainer';
import { SubNavList, SubNavListLink } from './SubNavList';

export type SubNavProps = PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	/** The navigation list items. */
	links: SubNavListLink[];
	/** If the SubNav is placed on a page with 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: SubNavContainerVariant;
}>;

export function SubNav({
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'secondary',
	background = 'body',
}: SubNavProps) {
	return (
		<SubNavContainer id={id} aria-label={ariaLabel} background={background}>
			<SubNavList links={links} activePath={activePath} />
		</SubNavContainer>
	);
}
