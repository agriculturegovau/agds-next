import { MouseEventHandler, PropsWithChildren } from 'react';
import { BaseButton } from '../button';
import { Box, Flex } from '../box';
import { boxPalette } from '../core';
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
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentcolor"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<rect x="4" y="16" width="16" height="2" />
				<rect x="4" y="11" width="16" height="2" />
				<rect x="4" y="6" width="16" height="2" />
			</svg>
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
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentcolor"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<rect
					x="6"
					y="17.3137"
					width="16"
					height="2"
					transform="rotate(-45 6 17.3137)"
				/>
				<rect
					x="7.41406"
					y="6"
					width="16"
					height="2"
					transform="rotate(45 7.41406 6)"
				/>
			</svg>
			Close
		</MainNavButton>
	);
}
