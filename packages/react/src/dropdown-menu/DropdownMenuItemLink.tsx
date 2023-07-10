import { ExternalLinkCallout } from '../a11y';
import { LinkProps, useLinkComponent } from '../core';
import { DropdownMenuItem } from './DropdownMenuItem';

export type DropdownMenuItemLinkProps = LinkProps;

export function DropdownMenuItemLink({
	children,
	target,
	...props
}: DropdownMenuItemLinkProps) {
	const Link = useLinkComponent();
	return (
		<DropdownMenuItem as={Link} target={target} {...props}>
			{children}
			{target === '_blank' && <ExternalLinkCallout />}
		</DropdownMenuItem>
	);
}
