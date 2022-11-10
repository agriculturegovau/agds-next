import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { RadioIndicator } from './RadioIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { ControlSize, useControlGroupContext } from './utils';

type NativeRadioProps = InputHTMLAttributes<HTMLInputElement>;

type BaseCheckboxProps = PropsWithChildren<{
	'aria-describedby'?: NativeRadioProps['aria-describedby'];
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
	/** If true,  the valid state will be rendered. */
	valid?: boolean;
	/** The size of the input. */
	size?: ControlSize;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
	{ children, disabled, invalid, valid, size = 'md', ...props },
	ref
) {
	const { groupMessageId } = useControlGroupContext();
	const describedByIds = [
		groupMessageId || null,
		props['aria-describedby'] || null,
	].filter(Boolean);

	return (
		<ControlContainer disabled={disabled}>
			<ControlInput
				ref={ref}
				type="radio"
				disabled={disabled}
				{...(invalid && { 'aria-invalid': true })}
				{...props}
				aria-describedby={
					describedByIds.length ? describedByIds.join(' ') : undefined
				}
			/>
			<RadioIndicator
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
});
