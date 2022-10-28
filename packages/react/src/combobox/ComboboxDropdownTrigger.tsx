import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ChevronDownIcon } from '../icon';
import { Button } from '../button';
import { boxPalette, mapSpacing } from '../core';

type ComboboxDropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ComboboxDropdownTrigger = forwardRef<
	HTMLButtonElement,
	ComboboxDropdownTriggerProps
>(function ComboboxDropdownTrigger({ disabled, ...props }, ref) {
	return (
		<Button
			ref={ref}
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
});
