import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { useControlGroupContext } from '../control-group/ControlGroupProvider';
import { RadioIndicator } from './RadioIndicator';
import { RadioInput } from './RadioInput';
import { RadioContainer } from './RadioContainer';
import { RadioLabel } from './RadioLabel';
import { RadioSize } from './utils';

type NativeRadioProps = InputHTMLAttributes<HTMLInputElement>;

type BaseCheckboxProps = PropsWithChildren<{
	'aria-required'?: NativeRadioProps['aria-required'];
	autoFocus?: NativeRadioProps['autoFocus'];
	disabled?: NativeRadioProps['disabled'];
	checked?: NativeRadioProps['checked'];
	id?: NativeRadioProps['id'];
	max?: NativeRadioProps['max'];
	maxLength?: NativeRadioProps['maxLength'];
	min?: NativeRadioProps['min'];
	minLength?: NativeRadioProps['minLength'];
	name?: NativeRadioProps['name'];
	onBlur?: NativeRadioProps['onBlur'];
	onChange?: NativeRadioProps['onChange'];
	pattern?: NativeRadioProps['pattern'];
	required?: NativeRadioProps['required'];
	value?: NativeRadioProps['value'];
}>;

export type RadioProps = BaseCheckboxProps & {
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** The size of the input. */
	size?: RadioSize;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
	{ children, disabled, invalid: invalidProp, size = 'md', ...props },
	ref
) {
	const controlGroupContext = useControlGroupContext();
	const invalid = invalidProp || controlGroupContext?.invalid;
	return (
		<RadioContainer disabled={disabled}>
			<RadioInput
				ref={ref}
				type="radio"
				disabled={disabled}
				aria-invalid={invalid ? 'true' : undefined}
				aria-describedby={invalid ? controlGroupContext?.messageId : undefined}
				{...props}
			/>
			<RadioIndicator disabled={disabled} invalid={invalid} size={size} />
			<RadioLabel disabled={disabled} size={size}>
				{children}
			</RadioLabel>
		</RadioContainer>
	);
});
