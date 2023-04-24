import { MouseEventHandler, PropsWithChildren } from 'react';
import { BaseButton } from '../button';
import { Box, Flex } from '../box';
import { boxPalette } from '../core';
import { CloseIcon, MenuIcon } from '../icon';
import { localPalette } from './utils';

export type MainNavButtonProps = PropsWithChildren<{
	onClick: MouseEventHandler<HTMLButtonElement>;
}>;

function MainNavButton({ onClick, children, ...props }: MainNavButtonProps) {
	return (
		<Box paddingBottom={0.5} display={{ xs: 'block', lg: 'none' }}>
			<Flex
				as={BaseButton}
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				fontSize="xs"
				lineHeight="nospace"
				gap={0.5}
				padding={1}
				height="100%"
				focus
				css={{
					color: boxPalette.foregroundAction,
					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
					},
				}}
				onClick={onClick}
				{...props}
			>
				{children}
			</Flex>
		</Box>
	);
}

export function OpenButton({ onClick }: MainNavButtonProps) {
	return (
		<MainNavButton
			onClick={onClick}
			aria-controls="main-nav-dialog"
			aria-expanded="false"
			aria-label="Open main menu"
		>
			<MenuIcon />
			Menu
		</MainNavButton>
	);
}

export function CloseButton({ onClick }: MainNavButtonProps) {
	return (
		<MainNavButton
			onClick={onClick}
			aria-controls="main-nav-dialog"
			aria-expanded="true"
			aria-label="Close main menu"
		>
			<CloseIcon />
			Close
		</MainNavButton>
	);
}
