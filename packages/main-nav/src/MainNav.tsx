import { ReactNode, PropsWithChildren } from 'react';
import { NavContainer, NavContainerCommonProps } from './NavContainer';
import { NavList, NavListLink } from './NavList';
import { findBestMatch } from './utils';

export type MainNavProps = NavContainerCommonProps &
	PropsWithChildren<{
		activePath?: string;
		'aria-label'?: string;
		id?: string;
		links?: NavListLink[];
		rightContent?: ReactNode;
	}>;

export function MainNav({
	background = 'body',
	links,
	rightContent,
	activePath,
	id,
	'aria-label': ariaLabel = 'main',
}: MainNavProps) {
	const bestMatch = findBestMatch(links, activePath);
	return (
		<NavContainer
			background={background}
			id={id}
			aria-label={ariaLabel}
			rightContent={rightContent}
			links={links}
		>
			<NavList links={links} activePath={bestMatch} />
		</NavContainer>
	);
}
