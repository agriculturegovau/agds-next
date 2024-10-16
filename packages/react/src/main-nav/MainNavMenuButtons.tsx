import { MouseEventHandler, PropsWithChildren } from 'react';
import { BaseButton } from '../button';
import { Flex } from '../flex';
import { boxPalette, packs } from '../core';
import { CloseIcon, MenuIcon } from '../icon';
import { localPalette } from './localPalette';

export type MainNavOpenButtonProps = PropsWithChildren<{
	isMobileMenuOpen: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export function MainNavOpenButton({
	isMobileMenuOpen,
	onClick,
}: MainNavOpenButtonProps) {
	return (
		<Flex
			aria-expanded={isMobileMenuOpen}
			aria-haspopup="dialog"
			as={BaseButton}
			display={{ xs: 'flex', lg: 'none' }}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			fontSize="xs"
			lineHeight="nospace"
			paddingX={1}
			gap={0.5}
			focusRingFor="keyboard"
			onClick={onClick}
			aria-label="Menu (Open main menu)"
			css={{
				color: boxPalette.foregroundAction,
				'&:hover': {
					color: boxPalette.foregroundText,
					backgroundColor: localPalette.linkHoverBg,
					...packs.underline,
				},
			}}
			minHeight={{ xs: '5rem', lg: '3.5rem' }}
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
			focusRingFor="keyboard"
			onClick={onClick}
			aria-label="Close main menu"
			css={{
				alignSelf: 'flex-start',
				color: boxPalette.foregroundAction,
				'&:hover': {
					color: boxPalette.foregroundText,
					backgroundColor: localPalette.linkHoverBg,
					...packs.underline,
				},
			}}
		>
			<CloseIcon />
			Close
		</Flex>
	);
}
