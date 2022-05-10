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
	variant?: SecondaryNavContainerVariant;
}>;

export function SecondaryNav({
	links,
	activePath,
	id,
	'aria-label': ariaLabel = 'secondary',
	variant = 'light',
}: SecondaryNavProps) {
	return (
		<SecondaryNavContainer id={id} aria-label={ariaLabel} variant={variant}>
			<SecondaryNavList links={links} activePath={activePath} />
		</SecondaryNavContainer>
	);
}
