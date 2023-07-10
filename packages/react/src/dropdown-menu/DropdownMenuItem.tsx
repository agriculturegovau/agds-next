import { ComponentType, PropsWithChildren, ReactNode } from 'react';
import { boxPalette, forwardRefWithAs } from '../core';
import { Flex } from '../flex';
import { IconProps } from '../icon';
import { useMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuItemProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** Function to be fired following a click event of the item. */
	onClick?: () => void;
	/** Used to add an icon to the start of the item. */
	icon?: ComponentType<IconProps>;
	/** Used to add decorative elements to the end of the item such as Indicator dot or Notification badge. */
	endElement?: ReactNode;
}>;

export const DropdownMenuItem = forwardRefWithAs<'div', DropdownMenuItemProps>(
	function DropdownMenuItem(
		{
			as,
			children,
			onClick: onClickProp,
			endElement,
			icon: Icon,
			id: idProp,
			...props
		},
		ref
	) {
		const { activeDescendantId, closeMenu } = useMenuContext();

		function onClick() {
			onClickProp?.();
			closeMenu();
		}

		const id = useDropdownMenuItemId(idProp);
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
