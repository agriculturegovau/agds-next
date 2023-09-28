import { fontGrid, LinkProps, mapSpacing } from '../core';
import { DropdownMenuItemLink } from './DropdownMenuItemLink';

export type DropdownMenuGroupLinkProps = Omit<LinkProps, 'onClick'> & {
	/** Function to be fired following a click event of the item. */
	onClick?: () => void;
};

export function DropdownMenuGroupLink(props: DropdownMenuGroupLinkProps) {
	return (
		<DropdownMenuItemLink
			{...props}
			css={{
				...fontGrid('xs', 'default'),
				paddingTop: mapSpacing(0.25),
				paddingBottom: mapSpacing(0.25),
				marginBottom: mapSpacing(0.75),
			}}
		/>
	);
}
