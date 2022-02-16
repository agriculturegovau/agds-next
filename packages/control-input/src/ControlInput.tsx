import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { packs } from '@ag.ds-next/core';

export type ControlInputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

export const ControlInput = (props: ControlInputProps) => (
	<input
		css={{
			...visuallyHiddenStyles,
			margin: 0,
			padding: 0,

			'&:focus ~ div': packs.outline,
		}}
		{...props}
	/>
);
