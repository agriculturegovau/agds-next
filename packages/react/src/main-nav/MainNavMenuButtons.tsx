import { MouseEventHandler, PropsWithChildren } from 'react';
import { BaseButton } from '../button';
import { Flex } from '../flex';
import { boxPalette } from '../core';
import { CloseIcon, MenuIcon } from '../icon';
import { ids } from './utils';
import { localPalette } from './localPalette';

export type MainNavOpenButtonProps = PropsWithChildren<{
	onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export function MainNavOpenButton({ onClick }: MainNavOpenButtonProps) {
	return (
		<Flex
			as={BaseButton}
			display={{ xs: 'flex', lg: 'none' }}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			fontSize="xs"
			lineHeight="nospace"
			padding={1}
			gap={0.5}
			focus
			onClick={onClick}
			aria-label="Open main menu"
			aria-controls={ids.dialog}
			aria-expanded="false"
			css={{
				color: boxPalette.foregroundAction,
				'&:hover': {
					color: boxPalette.foregroundText,
					backgroundColor: localPalette.linkHoverBg,
				},
			}}
		>
			<MenuIcon />
			Menu
		</Flex>
	);
}

export type MainNavCloseButtonProps = PropsWithChildren<{
	onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export function MainNavCloseButton({ onClick }: MainNavCloseButtonProps) {
	return (
		<Flex
			as={BaseButton}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			fontSize="xs"
			lineHeight="nospace"
			gap={0.5}
			padding={1}
			focus
			onClick={onClick}
			aria-label="Close main menu"
			aria-controls={ids.dialog}
			aria-expanded="true"
			css={{
				color: boxPalette.foregroundAction,
				'&:hover': {
					color: boxPalette.foregroundText,
					backgroundColor: localPalette.linkHoverBg,
				},
			}}
		>
			<CloseIcon />
			Close
		</Flex>
	);
}
