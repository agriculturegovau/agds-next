import { fontGrid, LinkProps, mapSpacing } from '../core';
import { DropdownMenuItemLink } from './DropdownMenuItemLink';

export type DropdownMenuGroupLinkProps = LinkProps;

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
