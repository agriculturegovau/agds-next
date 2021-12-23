import { Box } from '@ag.ds-next/box';
import { themeVars } from '@ag.ds-next/core';

import { localValues } from './utils';

export type MenuButtonProps = {
	onClick: () => void;
};

function MenuButton({
	onClick,
	children,
}: React.PropsWithChildren<MenuButtonProps>) {
	return (
		<Box
			as="button"
			display={{ xs: 'flex', md: 'none' }}
			flexDirection="column"
			alignItems="center"
			fontSize="xs"
			lineHeight="nospace"
			gap={0.5}
			padding={1}
			focus
			css={{
				background: 'transparent',
				color: themeVars.foreground.action,

				'&:hover': {
					color: themeVars.foreground.text,
					backgroundColor: localValues.linkHoverBg,
				},
			}}
			onClick={onClick}
		>
			{children}
		</Box>
	);
}

export function ToggleButton({ onClick }: MenuButtonProps) {
	return (
		<MenuButton onClick={onClick}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentcolor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="4" y="16" width="16" height="2" />
				<rect x="4" y="11" width="16" height="2" />
				<rect x="4" y="6" width="16" height="2" />
			</svg>
			<span>Menu</span>
		</MenuButton>
	);
}

export function CloseButton({ onClick }: MenuButtonProps) {
	return (
		<MenuButton onClick={onClick}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentcolor"
				xmlns="http://www.w3.org/2000/svg"
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
			<span>Close</span>
		</MenuButton>
	);
}
