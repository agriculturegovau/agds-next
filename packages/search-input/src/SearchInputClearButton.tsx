import { MouseEventHandler } from 'react';
import { BaseButton } from '@ag.ds-next/button';
import { CloseIcon } from '@ag.ds-next/icon';
import { Flex } from '@ag.ds-next/box';
import { mapSpacing, tokens } from '@ag.ds-next/core';

export type SearchInputClearButtonProps = {
	disabled?: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export function SearchInputClearButton({
	disabled,
	onClick,
}: SearchInputClearButtonProps) {
	return (
		<Flex
			as={BaseButton}
			alignItems="center"
			justifyContent="center"
			disabled={disabled}
			aria-label="Clear input"
			onClick={onClick}
			focus
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
