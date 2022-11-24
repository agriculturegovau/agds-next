import { MouseEventHandler } from 'react';
import { CloseIcon } from '@ag.ds-next/icon';
import { Flex } from '@ag.ds-next/box';
import { mapSpacing, tokens } from '@ag.ds-next/core';

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
			aria-label="Clear input"
			onClick={onClick}
			css={{
				position: 'absolute',
				top: '50%',
				right: `calc(${mapSpacing(1)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
				opacity: disabled ? 0.3 : 1,
			}}
		>
			<CloseIcon size="md" weight="regular" color="muted" />
		</Flex>
	);
}
