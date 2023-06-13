import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { useControlGroupContext } from '../control-group/ControlGroupProvider';
import { CheckboxIndicator } from './CheckboxIndicator';
import { CheckboxInput } from './CheckboxInput';
import { CheckboxContainer } from './CheckboxContainer';
import { CheckboxLabel } from './CheckboxLabel';
import { CheckboxSize } from './utils';

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
	/** The size of the input. */
	size?: CheckboxSize;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	function Checkbox(
		{ children, disabled, invalid: invalidProp, size = 'md', ...props },
		ref
	) {
		const controlGroupContext = useControlGroupContext();
		const invalid = invalidProp || controlGroupContext?.invalid;
		return (
			<CheckboxContainer disabled={disabled}>
				<CheckboxInput
					ref={ref}
					type="checkbox"
					disabled={disabled}
					aria-invalid={invalid ? 'true' : undefined}
					aria-describedby={
						invalid ? controlGroupContext?.messageId : undefined
					}
					{...props}
				/>
				<CheckboxIndicator disabled={disabled} invalid={invalid} size={size} />
				<CheckboxLabel disabled={disabled} size={size}>
					{children}
				</CheckboxLabel>
			</CheckboxContainer>
		);
	}
);
