import { ComponentType, ReactNode } from 'react';
import { ExternalLinkCallout } from '../a11y';
import { LinkProps, useLinkComponent } from '../core';
import { IconProps } from '../icon';
import { DropdownMenuItem } from './DropdownMenuItem';

export type DropdownMenuItemLinkProps = LinkProps & {
	/** Used to add an icon to the start of the item. */
	icon?: ComponentType<IconProps>;
	/** Used to add decorative elements to the end of the item such as Indicator dot or Notification badge. */
	endElement?: ReactNode;
};

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
