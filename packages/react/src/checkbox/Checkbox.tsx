import {
	forwardRef,
	InputHTMLAttributes,
	PropsWithChildren,
	useEffect,
	useRef,
} from 'react';
import { mergeRefs } from '../core';
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
	/** Used to represent a group of checkboxes that has a mix of selected and unselected values. */
	indeterminate?: boolean;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** The size of the input. */
	size?: CheckboxSize;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	function Checkbox(
		{
			children,
			disabled,
			invalid: invalidProp,
			size = 'md',
			indeterminate,
			checked: checkedProp,
			...props
		},
		forwardedRef
	) {
		const ref = useRef<HTMLInputElement>(null);
		const controlGroupContext = useControlGroupContext();
		const invalid = invalidProp || controlGroupContext?.invalid;

		// `indeterminate` cannot be set using an HTML attribute
		useEffect(() => {
			if (!ref.current) return;
			ref.current.indeterminate = Boolean(indeterminate);
		}, [indeterminate]);

		// `indeterminate` should override the `checked` prop
		const checked = indeterminate ? false : checkedProp;

		return (
			<CheckboxContainer disabled={disabled}>
				<CheckboxInput
					ref={mergeRefs([forwardedRef, ref])}
					type="checkbox"
					disabled={disabled}
					aria-invalid={invalid ? 'true' : undefined}
					aria-describedby={
						invalid ? controlGroupContext?.messageId : undefined
					}
					checked={checked}
					aria-checked={indeterminate ? 'mixed' : undefined}
					{...props}
				/>
				<CheckboxIndicator
					disabled={disabled}
					invalid={invalid}
					size={size}
					indeterminate={indeterminate}
				/>
				<CheckboxLabel disabled={disabled} size={size}>
					{children}
				</CheckboxLabel>
			</CheckboxContainer>
		);
	}
);
