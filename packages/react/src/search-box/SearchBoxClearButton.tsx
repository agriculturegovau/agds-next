import { type MouseEventHandler } from 'react';
import { boxPalette, mapSpacing, tokens } from '../core';
import { CloseIcon } from '../icon';
import { Flex } from '../flex';

export type SearchBoxClearButtonProps = {
	onClick: MouseEventHandler<HTMLDivElement>;
};

// This component renders a `div` element and not a `button`
// because it should not be focusable by keyboard users
// See https://react-spectrum.adobe.com/react-spectrum/SearchField.html

export function SearchBoxClearButton({ onClick }: SearchBoxClearButtonProps) {
	return (
		<Flex
			alignItems="center"
			aria-label="Clear search"
			css={{
				position: 'absolute',
				top: '50%',
				right: `calc(${mapSpacing(0.5)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
				cursor: 'pointer',
				color: boxPalette.foregroundAction,
				'&:hover': { color: boxPalette.foregroundText },
			}}
			height="2rem"
			justifyContent="center"
			light // Use light theme, contrast issues with dark.foregroundAction and light.backgroundBody
			onClick={onClick}
			role="button"
			width="2rem"
		>
			<CloseIcon color="inherit" />
		</Flex>
	);
}
