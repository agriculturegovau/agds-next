import React, { forwardRef, InputHTMLAttributes } from 'react';
import { CheckboxIndicator } from './CheckboxIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { ControlSize } from './utils';

export type CheckboxProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'size'
> & {
	invalid?: boolean;
	valid?: boolean;
	size?: ControlSize;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	function Checkbox(
		{ children, disabled, invalid, valid, size = 'md', ...props },
		ref
	) {
		return (
			<ControlContainer disabled={disabled} valid={valid} invalid={invalid}>
				<ControlInput
					ref={ref}
					type="checkbox"
					disabled={disabled}
					{...props}
				/>
				<CheckboxIndicator
					disabled={disabled}
					invalid={invalid}
					size={size}
					valid={valid}
				/>
				<ControlLabel disabled={disabled}>{children}</ControlLabel>
			</ControlContainer>
		);
	}
);
