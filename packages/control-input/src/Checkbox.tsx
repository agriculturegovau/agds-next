import React, {
	forwardRef,
	PropsWithRef,
	DetailedHTMLProps,
	InputHTMLAttributes,
} from 'react';
import { CheckboxIndicator } from './CheckboxIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { ControlSize } from './utils';

export type CheckboxProps = PropsWithRef<
	Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'size'
	> & {
		invalid?: true;
		valid?: true;
		size?: ControlSize;
	}
>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	function Checkbox(
		{ children, disabled, checked, invalid, valid, size = 'md', ...props },
		ref
	) {
		return (
			<ControlContainer disabled={disabled} valid={valid} invalid={invalid}>
				<ControlInput
					ref={ref}
					type="checkbox"
					checked={checked}
					disabled={disabled}
					{...props}
				/>
				<CheckboxIndicator
					checked={checked}
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
