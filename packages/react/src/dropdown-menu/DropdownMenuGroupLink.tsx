import { Box } from '../box';
import { LinkProps, useLinkComponent } from '../core';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuGroupLinkProps = LinkProps;

export function DropdownMenuGroupLink({
	id: idProp,
	...props
}: DropdownMenuGroupLinkProps) {
	const { activeDescendantId } = useDropdownMenuContext();
	const Link = useLinkComponent();

	const id = useDropdownMenuItemId(idProp);
	const isActiveItem = id === activeDescendantId;

	return (
		<Box
			as={Link}
			id={id}
			display="block"
			role="menuitem"
			fontSize="xs"
			padding={1}
			paddingTop={0}
			background={isActiveItem ? 'shade' : undefined}
			link
			{...props}
		/>
	);
}
