import { PropsWithChildren } from 'react';
import { SubNavContainer, SubNavContainerVariant } from './SubNavContainer';
import { SubNavList, SubNavListLink } from './SubNavList';

export type SubNavProps = PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	links: SubNavListLink[];
	variant?: SubNavContainerVariant;
}>;

export function SubNav({
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'secondary',
	variant = 'light',
}: SubNavProps) {
	return (
		<SubNavContainer id={id} aria-label={ariaLabel} variant={variant}>
			<SubNavList links={links} activePath={activePath} />
		</SubNavContainer>
	);
}
