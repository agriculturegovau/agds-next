import { Box } from '../box';
import { LinkProps, useLinkComponent } from '../core';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuRadioGroupLinkProps = LinkProps;

export function DropdownMenuRadioGroupLink({
	id: idProp,
	...props
}: DropdownMenuRadioGroupLinkProps) {
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
