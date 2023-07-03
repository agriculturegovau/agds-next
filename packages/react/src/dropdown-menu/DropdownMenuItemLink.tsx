import { LinkProps, useLinkComponent } from '../core';
import { DropdownMenuItem } from './DropdownMenuItem';

// Links in dropdown menus can not open in new tabs
export type DropdownMenuItemLinkProps = Omit<LinkProps, 'target'>;

export function DropdownMenuItemLink(props: DropdownMenuItemLinkProps) {
	const Link = useLinkComponent();
	return <DropdownMenuItem as={Link} {...props} />;
}
