import { ButtonHTMLAttributes } from 'react';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { boxPalette, mapSpacing } from '../core';

type ComboboxClearButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ComboboxClearButton({
	disabled,
	...props
}: ComboboxClearButtonProps) {
	return (
		<Button
			type="button"
			variant="text"
			disabled={disabled}
			aria-label="Clear input"
			{...props}
			css={{
				position: 'absolute',
				top: '50%',
				right: mapSpacing(1),
				transform: 'translateY(-50%)',
				opacity: disabled ? 0.3 : 1,
				color: boxPalette.foregroundAction,
			}}
		>
			<CloseIcon />
		</Button>
	);
}
