import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { LinkProps, useLinkComponent } from '../core';
import { Text } from '../text';
import { useMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuRadioGroupProps = PropsWithChildren<{
	label: string;
}>;

export function DropdownMenuRadioGroup({
	children,
	label,
}: DropdownMenuRadioGroupProps) {
	return (
		<div role="group">
			<Text
				display="block"
				padding={1}
				paddingBottom={0}
				fontSize="xs"
				color="muted"
			>
				{label}
			</Text>
			{children}
		</div>
	);
}

export type DropdownMenuRadioGroupLinkProps = LinkProps;

export function DropdownMenuRadioGroupLink({
	id: idProp,
	...props
}: DropdownMenuRadioGroupLinkProps) {
	const Link = useLinkComponent();
	const { menuId, activeDescendantId } = useMenuContext();

	const id = useDropdownMenuItemId(idProp, menuId);

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
