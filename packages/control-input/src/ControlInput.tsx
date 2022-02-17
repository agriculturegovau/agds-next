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
					margin: 0,
					padding: 0,

					'&:focus ~ div': packs.outline,
				}}
				{...props}
			/>
		);
	}
);
