import { forwardRef, InputHTMLAttributes } from 'react';
import { visuallyHiddenStyles } from '../a11y';
import { packs } from '../core';

export type RadioInputProps = InputHTMLAttributes<HTMLInputElement>;

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
	function RadioInput(props, ref) {
		return (
			<input
				ref={ref}
				css={{
					...visuallyHiddenStyles,
					// When this component is focused, outline the indicator (`RadioIndicator` and `CheckboxIndicator`)
					'&:focus-visible ~ span:first-of-type': packs.outline,
					// When this component is checked, show the indicators active state
					'~ span > span': { opacity: 0 },
					'&:checked ~ span > span': { opacity: 1 },
				}}
				{...props}
			/>
		);
	}
);
