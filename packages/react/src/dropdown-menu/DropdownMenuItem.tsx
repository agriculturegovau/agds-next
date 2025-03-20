import {
	type ComponentType,
	type MouseEvent,
	type PropsWithChildren,
	type ReactNode,
	useEffect,
	useRef,
} from 'react';
import {
	boxPalette,
	forwardRefWithAs,
	mergeRefs,
	packs,
	type NativeLinkProps,
} from '../core';
import { Flex } from '../flex';
import { IconProps } from '../icon';
import { Text } from '../text';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuItemProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** Function to be fired following a click event of the item. */
	onClick?: NativeLinkProps['onClick'];
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
		forwardedRef
	) {
		const ref = useRef<HTMLElement>(null);
		const { activeDescendantId, closeMenu } = useDropdownMenuContext();

		const id = useDropdownMenuItemId(idProp);
		const isActiveDescendant = id === activeDescendantId;

		// Ensure the active descendant is visible in long lists with overflow
		// Without this, the active item may not be visible on the screen
		useEffect(() => {
			if (!isActiveDescendant) return;
			ref.current?.scrollIntoView({ block: 'nearest' });
		}, [isActiveDescendant]);

		function onClick(event: MouseEvent<HTMLAnchorElement>) {
			onClickProp?.(event);
			closeMenu();
		}

		return (
			<Flex
				alignItems="center"
				as={as}
				background="body"
				css={{
					textDecoration: 'none',

					...(isActiveDescendant && {
						backgroundColor: boxPalette.backgroundShade,
						'& > div > span': packs.underline,
					}),

					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						'& > div:first-of-type > span': packs.underline,
					},
				}}
				focusRingFor="keyboard"
				gap={1}
				id={id}
				justifyContent="space-between"
				link
				onClick={onClick}
				padding={1}
				ref={mergeRefs([forwardedRef, ref])}
				role="menuitem"
				tabIndex={-1}
				width="18rem"
				{...props}
			>
				<Flex alignItems="center" gap={0.75}>
					{Icon ? (
						<Icon color="inherit" css={{ flexShrink: 0 }} size="md" />
					) : null}
					<Text color="inherit">{children}</Text>
				</Flex>
				<div css={{ flexShrink: 0 }}>{endElement}</div>
			</Flex>
		);
	}
);
