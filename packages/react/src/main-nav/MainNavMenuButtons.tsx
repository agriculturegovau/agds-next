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
			alignItems="center"
			aria-expanded={isMobileMenuOpen}
			aria-haspopup="dialog"
			aria-label="Menu (Open main menu)"
			as={BaseButton}
			css={{
				color: boxPalette.foregroundAction,
				'&:hover': {
					color: boxPalette.foregroundText,
					backgroundColor: localPalette.linkHoverBg,
					...packs.underline,
				},
			}}
			display={{ xs: 'flex', lg: 'none' }}
			flexDirection="column"
			focusRingFor="keyboard"
			fontSize="xs"
			gap={0.5}
			justifyContent="center"
			lineHeight="nospace"
			minHeight={{ xs: '5rem', lg: '3.5rem' }}
			onClick={onClick}
			paddingX={1}
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
			alignItems="center"
			aria-label="Close main menu"
			as={BaseButton}
			css={{
				alignSelf: 'flex-start',
				color: boxPalette.foregroundAction,
				'&:hover': {
					color: boxPalette.foregroundText,
					backgroundColor: localPalette.linkHoverBg,
					...packs.underline,
				},
			}}
			flexDirection="column"
			focusRingFor="keyboard"
			fontSize="xs"
			gap={0.5}
			justifyContent="center"
			lineHeight="nospace"
			onClick={onClick}
			padding={1}
		>
			<CloseIcon />
			Close
		</Flex>
	);
}
