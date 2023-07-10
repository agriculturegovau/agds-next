import { ComponentType, PropsWithChildren, ReactNode } from 'react';
import { boxPalette, forwardRefWithAs } from '../core';
import { Flex } from '../flex';
import { IconProps } from '../icon';
import { useMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuItemProps = PropsWithChildren<{
	id?: string;
	onSelect?: () => void;
	icon?: ComponentType<IconProps>;
	endElement?: ReactNode;
}>;

export const DropdownMenuItem = forwardRefWithAs<'div', DropdownMenuItemProps>(
	function DropdownMenuItem(
		{ as, children, onSelect, endElement, icon: Icon, id: idProp, ...props },
		ref
	) {
		const { menuId, activeDescendantId, closeMenu } = useMenuContext();

		const id = useDropdownMenuItemId(idProp, menuId);

		function onClick() {
			onSelect?.();
			closeMenu();
		}

		const isActiveItem = id === activeDescendantId;

		return (
			<Flex
				as={as}
				ref={ref}
				role="menuitem"
				tabIndex={-1}
				id={id}
				onClick={onClick}
				alignItems="center"
				justifyContent="space-between"
				background={isActiveItem ? 'shade' : 'body'}
				gap={1}
				padding={1}
				link
				focus
				css={{
					...(isActiveItem && {
						textDecoration: 'none',
						color: boxPalette.foregroundText,
						backgroundColor: boxPalette.backgroundShade,
					}),
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
				{...props}
			>
				<Flex alignItems="center" gap={1}>
					{Icon ? <Icon color="action" size="md" /> : null}
					<span>{children}</span>
				</Flex>
				{endElement}
			</Flex>
		);
	}
);
