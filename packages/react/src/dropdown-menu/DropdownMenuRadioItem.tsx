import { PropsWithChildren, ReactNode } from 'react';
import { boxPalette, packs, tokens } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { useMenuContext } from './DropdownMenuContext';
import { useDropdownMenuItemId } from './utils';

export type DropdownMenuRadioItemProps = PropsWithChildren<{
	checked: boolean;
	onClick?: () => void;
	endElement?: ReactNode;
	secondaryText?: string;
}>;

export function DropdownMenuRadioItem({
	children,
	onClick: onClickProp,
	endElement,
	checked,
	secondaryText,
}: DropdownMenuRadioItemProps) {
	const { menuId, activeDescendantId } = useMenuContext();

	const id = useDropdownMenuItemId(menuId);

	function onClick() {
		onClickProp?.();
	}

	const isActiveItem = id === activeDescendantId;

	return (
		<Flex
			role="menuitemradio"
			aria-checked={false}
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
					fontWeight: tokens.fontWeight.bold,
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
			<Stack as="span">
				<div>{children}</div>
				<Text fontSize="xs" color="muted" css={{ textDecoration: 'none' }}>
					{secondaryText}
				</Text>
			</Stack>
			{endElement}
		</Flex>
	);
}
