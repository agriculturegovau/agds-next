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
	checked?: NativeCheckboxProps['checked'];
	disabled?: NativeCheckboxProps['disabled'];
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
			checked: checkedProp,
			children,
			disabled,
			indeterminate,
			invalid: invalidProp,
			name: nameProp,
			required: requiredProp,
			size = 'md',
			...props
		},
		forwardedRef
	) {
		const ref = useRef<HTMLInputElement>(null);
		const controlGroupContext = useControlGroupContext();

		// The invalid prop should override the context value
		const invalid =
			typeof invalidProp === 'boolean'
				? invalidProp
				: controlGroupContext?.invalid;

		// The required prop should override the context value
		const required =
			typeof requiredProp === 'boolean'
				? requiredProp
				: controlGroupContext?.required;

		// The name prop should override the context value
		const name = nameProp || controlGroupContext?.name;

		// `indeterminate` is set using the HTMLInputElement object's indeterminate property via JavaScript (it cannot be set using an HTML attribute)
		// Read more about this here https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
		useEffect(() => {
			if (!ref.current) return;
			ref.current.indeterminate = Boolean(indeterminate);
		}, [indeterminate]);

		// `indeterminate` should override the `checked` prop
		const checked = indeterminate ? false : checkedProp;

		return (
			<CheckboxContainer disabled={disabled}>
				<CheckboxInput
					aria-checked={indeterminate ? 'mixed' : undefined}
					aria-describedby={
						invalid ? controlGroupContext?.messageId : undefined
					}
					aria-invalid={invalid || undefined}
					aria-required={required}
					checked={checked}
					disabled={disabled}
					name={name}
					ref={mergeRefs([forwardedRef, ref])}
					type="checkbox"
					{...props}
				/>
				<CheckboxIndicator
					disabled={disabled}
					indeterminate={indeterminate}
					invalid={invalid}
					size={size}
				/>
				<CheckboxLabel disabled={disabled} size={size}>
					{children}
				</CheckboxLabel>
			</CheckboxContainer>
		);
	}
);
