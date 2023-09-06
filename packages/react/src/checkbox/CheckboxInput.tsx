import { forwardRef, InputHTMLAttributes } from 'react';
import { visuallyHiddenStyles } from '../a11y';
import { packs } from '../core';

export type ControlInputProps = InputHTMLAttributes<HTMLInputElement>;

export const CheckboxInput = forwardRef<HTMLInputElement, ControlInputProps>(
	function CheckboxInput(props, ref) {
		return (
			<input
				ref={ref}
				css={{
					...visuallyHiddenStyles,
					// When this component is focused, outline the `CheckboxIndicator`
					'&:focus-visible ~ span:first-of-type': packs.outline,
					// When this component is checked or indeterminate, show the indicators active state
					'~ span > svg': { opacity: 0 },
					'&:checked ~ span > svg, &:indeterminate ~ span > svg': {
						opacity: 1,
					},
				}}
				{...props}
			/>
		);
	}
);
