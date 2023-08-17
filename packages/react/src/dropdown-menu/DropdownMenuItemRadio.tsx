import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react';
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
	const ref = useRef<HTMLDivElement>(null);
	const { activeDescendantId, closeMenu } = useDropdownMenuContext();

	const id = useDropdownMenuItemId(idProp);
	const isActiveDescendant = id === activeDescendantId;

	// Ensure the active descendant is visible in long lists with overflow
	// Without this, the active item may not be visible on the screen
	useEffect(() => {
		if (!isActiveDescendant) return;
		ref.current?.scrollIntoView({ block: 'nearest' });
	}, [isActiveDescendant]);

	function onClick() {
		onClickProp?.();
		closeMenu();
	}

	return (
		<Flex
			ref={ref}
			role="menuitemradio"
			aria-checked={checked}
			id={id}
			onClick={onClick}
			alignItems="center"
			justifyContent="space-between"
			background="body"
			gap={1}
			padding={1}
			css={{
				cursor: 'pointer',

				...(isActiveDescendant && {
					backgroundColor: boxPalette.backgroundShade,
					color: boxPalette.foregroundText,
					'& > div:first-of-type > span': {
						...packs.underline,
						color: boxPalette.foregroundText,
					},
				}),

				'&:hover': {
					backgroundColor: boxPalette.backgroundShade,
					'& > div:first-of-type > span': {
						...packs.underline,
						color: boxPalette.foregroundText,
					},
				},

				...(checked && {
					backgroundColor: boxPalette.selectedMuted,
					position: 'relative',
					'&:before': {
						content: "''",
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						width: tokens.borderWidth.xl,
						background: boxPalette.selected,
					},
				}),
			}}
		>
			<Stack>
				<Text
					color={checked ? 'text' : 'action'}
					fontWeight={checked ? 'bold' : 'normal'}
				>
					{children}
				</Text>
				<Text fontSize="xs" color="muted">
					{secondaryText}
				</Text>
			</Stack>
			{endElement}
		</Flex>
	);
}
