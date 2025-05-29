import { type MouseEventHandler } from 'react';
import { boxPalette, mapSpacing, tokens, type BoxPalette } from '../core';
import { Flex } from '../flex';
import { CloseIcon } from '../icon';

export type SearchInputClearButtonProps = {
	disabled?: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
	palette?: BoxPalette;
};

// This component renders a `div` element and not a `button`
// because it should not be focusable by keyboard users
// See https://react-spectrum.adobe.com/react-spectrum/SearchField.html

export function SearchInputClearButton({
	disabled,
	onClick,
	palette,
}: SearchInputClearButtonProps) {
	return (
		<Flex
			alignItems="center"
			aria-label="Clear search"
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
			height="2rem"
			justifyContent="center"
			onClick={onClick}
			role="button"
			width="2rem"
			{...(palette && { [palette]: true })}
		>
			<CloseIcon color="inherit" />
		</Flex>
	);
}
