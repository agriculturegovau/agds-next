import { Box } from '../box';
import { LinkProps, mapSpacing, useLinkComponent } from '../core';
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
			tabIndex={isActiveItem ? 0 : -1}
			display="inline-block"
			role="menuitem"
			fontSize="xs"
			link
			focus
			css={{ margin: mapSpacing(1), marginTop: 0 }}
			{...props}
		/>
	);
}
