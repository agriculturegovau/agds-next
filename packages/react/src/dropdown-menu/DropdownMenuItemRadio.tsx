import { PropsWithChildren, ReactNode } from 'react';
import { boxPalette, packs, tokens } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { useDropdownMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuItemRadioProps = PropsWithChildren<{
	/** Exposes the radio buttons state to assistive technology. */
	checked: boolean;
	/** Used to add decorative elements to the end of the item such as Indicator dot or Notification badge. */
	endElement?: ReactNode;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** Function to be fired following a click event of the item. */
	onClick?: () => void;
	/** Supporting text for the item. */
	secondaryText?: string;
}>;

export function DropdownMenuItemRadio({
	children,
	onClick: onClickProp,
	endElement,
	checked,
	secondaryText,
	id: idProp,
}: DropdownMenuItemRadioProps) {
	const { activeDescendantId, closeMenu } = useDropdownMenuContext();

	function onClick() {
		onClickProp?.();
		closeMenu();
	}

	const id = useDropdownMenuItemId(idProp);
	const isActiveItem = id === activeDescendantId;

	return (
		<Flex
			role="menuitemradio"
			aria-checked={checked}
			id={id}
			onClick={onClick}
			alignItems="center"
			justifyContent="space-between"
			background={isActiveItem ? 'shade' : 'body'}
			gap={1}
			padding={1}
			css={{
				cursor: 'pointer',
				color: boxPalette.foregroundAction,

				'&:hover': {
					...packs.underline,
					color: boxPalette.foregroundText,
					backgroundColor: boxPalette.backgroundShade,
				},

				...(checked && {
					position: 'relative',
					color: boxPalette.foregroundText,

					'&:before': {
						content: "''",
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						width: tokens.borderWidth.xl,
						background: boxPalette.foregroundAction,
					},
				}),
			}}
		>
			<Stack>
				<Text fontWeight={checked ? 'bold' : 'normal'}>{children}</Text>
				<Text fontSize="xs" color="muted" css={{ textDecoration: 'none' }}>
					{secondaryText}
				</Text>
			</Stack>
			{endElement}
		</Flex>
	);
}
