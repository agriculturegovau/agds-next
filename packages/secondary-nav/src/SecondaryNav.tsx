import { PropsWithChildren } from 'react';
import {
	SecondaryNavContainer,
	SecondaryNavContainerVariant,
} from './SecondaryNavContainer';
import { SecondaryNavList, SecondaryNavListLink } from './SecondaryNavList';

export type SecondaryNavProps = PropsWithChildren<{
	activePath?: string;
	'aria-label'?: string;
	id?: string;
	links: SecondaryNavListLink[];
	variant: SecondaryNavContainerVariant;
}>;

export function SecondaryNav({
	variant = 'darkAlt',
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'main',
}: SecondaryNavProps) {
	return (
		<SecondaryNavContainer variant={variant} id={id} aria-label={ariaLabel}>
			<SecondaryNavList links={links} activePath={activePath} />
		</SecondaryNavContainer>
	);
}
