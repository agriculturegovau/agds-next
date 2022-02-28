import { ReactNode, ButtonHTMLAttributes } from 'react';
import { LinkProps, useLinkComponent } from '@ag.ds-next/core';
import { NavListItem } from './NavItem';

export type MainNavLinkProps = Omit<LinkProps, 'children'> & {
	active?: boolean;
	label: ReactNode;
	icon?: ReactNode;
};

export const MainNavLink = ({
	active,
	href,
	icon,
	label,
	...props
}: MainNavLinkProps) => {
	const Link = useLinkComponent();
	return (
		<NavListItem active={active}>
			<Link href={href} {...props}>
				{label}
				{icon}
			</Link>
		</NavListItem>
	);
};

export type MainNavButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children'
> & {
	active?: boolean;
	label: ReactNode;
	icon?: ReactNode;
};

export const MainNavButton = ({
	active,
	icon,
	label,
	...props
}: MainNavButtonProps) => {
	return (
		<NavListItem active={active}>
			<button {...props} type="button">
				{label}
				{icon}
			</button>
		</NavListItem>
	);
};
