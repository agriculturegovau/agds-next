import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { packs } from '@ag.ds-next/core';

export type ControlInputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

export const ControlInput = forwardRef<HTMLInputElement, ControlInputProps>(
	function ControlInput(props, ref) {
		return (
			<input
				ref={ref}
				css={{
					...visuallyHiddenStyles,

					'&:checked ~ div > div': { display: 'block' },

					'&:focus ~ div': packs.outline,
				}}
				{...props}
			/>
		);
	}
);
