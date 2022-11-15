import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { CheckboxIndicator } from './CheckboxIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { useControlGroupContext } from './ControlGroupProvider';
import { ControlSize } from './utils';

type NativeCheckboxProps = InputHTMLAttributes<HTMLInputElement>;

type BaseCheckboxProps = PropsWithChildren<{
	autoFocus?: NativeCheckboxProps['autoFocus'];
	disabled?: NativeCheckboxProps['disabled'];
	checked?: NativeCheckboxProps['checked'];
	id?: NativeCheckboxProps['id'];
	max?: NativeCheckboxProps['max'];
	maxLength?: NativeCheckboxProps['maxLength'];
	min?: NativeCheckboxProps['min'];
	minLength?: NativeCheckboxProps['minLength'];
	name?: NativeCheckboxProps['name'];
	onBlur?: NativeCheckboxProps['onBlur'];
	onChange?: NativeCheckboxProps['onChange'];
	pattern?: NativeCheckboxProps['pattern'];
	required?: NativeCheckboxProps['required'];
	value?: NativeCheckboxProps['value'];
}>;

export type CheckboxProps = BaseCheckboxProps & {
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true,  the valid state will be rendered. */
	valid?: boolean;
	/** The size of the input. */
	size?: ControlSize;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	function Checkbox(
		{ children, disabled, invalid: invalidProp, valid, size = 'md', ...props },
		ref
	) {
		const controlGroupContext = useControlGroupContext();
		const invalid = invalidProp || controlGroupContext?.invalid;
		return (
			<ControlContainer disabled={disabled}>
				<ControlInput
					ref={ref}
					type="checkbox"
					disabled={disabled}
					aria-invalid={invalid ? 'true' : undefined}
					aria-describedby={
						invalid ? controlGroupContext?.messageId : undefined
					}
					{...props}
				/>
				<CheckboxIndicator
					disabled={disabled}
					invalid={invalid}
					size={size}
					valid={valid}
				/>
				<ControlLabel disabled={disabled} size={size}>
					{children}
				</ControlLabel>
			</ControlContainer>
		);
	}
);
