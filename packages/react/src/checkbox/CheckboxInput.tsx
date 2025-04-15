import { forwardRef, InputHTMLAttributes } from 'react';
import { packs } from '../core';

export type ControlInputProps = InputHTMLAttributes<HTMLInputElement>;

export const CheckboxInput = forwardRef<HTMLInputElement, ControlInputProps>(
	function CheckboxInput(props, ref) {
		return (
			<input
				css={{
					// When this component is focused, outline the `CheckboxIndicator`
					'&:focus ~ span:first-of-type': packs.outline,
					// When this component is checked or indeterminate, show the indicator's active state
					'~ span > svg': { opacity: 0 },
					'&:checked ~ span > svg, &:indeterminate ~ span > svg': {
						opacity: 1,
					},
				}}
				ref={ref}
				{...props}
			/>
		);
	}
);
