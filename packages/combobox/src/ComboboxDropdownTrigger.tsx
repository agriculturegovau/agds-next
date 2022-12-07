import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { BaseButton } from '@ag.ds-next/button';
import { boxPalette, mapSpacing } from '@ag.ds-next/core';
import { Flex } from '@ag.ds-next/box';

type ComboboxDropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ComboboxDropdownTrigger = forwardRef<
	HTMLButtonElement,
	ComboboxDropdownTriggerProps
>(function ComboboxDropdownTrigger({ disabled, ...props }, ref) {
	return (
		<Flex
			as={BaseButton}
			ref={ref}
			disabled={disabled}
			aria-label="Toggle menu"
			css={{
				position: 'absolute',
				top: '50%',
				right: mapSpacing(1),
				transform: 'translateY(-50%)',
				opacity: disabled ? 0.3 : 1,
				color: boxPalette.foregroundAction,
				'&:hover': { color: boxPalette.foregroundText },
			}}
			{...props}
		>
			<ChevronDownIcon
				size="sm"
				weight="bold"
				color="inherit"
				css={{ display: 'block' }}
			/>
		</Flex>
	);
});
