import { ButtonHTMLAttributes } from 'react';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { Button } from '@ag.ds-next/button';
import { boxPalette, mapSpacing } from '@ag.ds-next/core';

type ComboboxDropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ComboboxDropdownTrigger({
	disabled,
	...props
}: ComboboxDropdownTriggerProps) {
	return (
		<Button
			type="button"
			variant="text"
			disabled={disabled}
			aria-label="Toggle menu"
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
			<ChevronDownIcon />
		</Button>
	);
}
