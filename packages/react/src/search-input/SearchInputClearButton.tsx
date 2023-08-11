import { MouseEventHandler } from 'react';
import { CloseIcon } from '../icon';
import { Flex } from '../flex';
import { boxPalette, mapSpacing, tokens } from '../core';

export type SearchInputClearButtonProps = {
	disabled?: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
};

// This component renders a `div` element and not a `button`
// because it should not be focusable by keyboard users
// See https://react-spectrum.adobe.com/react-spectrum/SearchField.html

export function SearchInputClearButton({
	disabled,
	onClick,
}: SearchInputClearButtonProps) {
	return (
		<Flex
			role="button"
			alignItems="center"
			justifyContent="center"
			aria-label="Clear search"
			width="2rem"
			height="2rem"
			onClick={onClick}
			css={{
				position: 'absolute',
				top: '50%',
				right: `calc(${mapSpacing(0.5)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
				opacity: disabled ? 0.3 : undefined,
				cursor: 'pointer',
				color: boxPalette.foregroundAction,
				'&:hover': { color: boxPalette.foregroundText },
			}}
		>
			<CloseIcon color="inherit" />
		</Flex>
	);
}
