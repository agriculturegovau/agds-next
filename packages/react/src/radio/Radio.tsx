import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { packs, useId } from '../core';
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
	{
		children,
		disabled,
		invalid: invalidProp,
		name: nameProp,
		required: requiredProp,
		size = 'md',
		...props
	},
	ref
) {
	const id = useRadioId(props.id);
	const controlGroupContext = useControlGroupContext();
	const { height, width } = packs.control[size];

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

	return (
		<RadioContainer disabled={disabled} htmlFor={id}>
			<span
				css={{
					display: 'inline-block',
					height,
					position: 'relative',
					width,
				}}
			>
				<RadioInput
					aria-describedby={
						invalid ? controlGroupContext?.messageId : undefined
					}
					aria-invalid={invalid || undefined}
					aria-required={required}
					disabled={disabled}
					height={height}
					id={id}
					name={name}
					ref={ref}
					type="radio"
					width={width}
					{...props}
				/>
				<RadioIndicator disabled={disabled} invalid={invalid} size={size} />
			</span>
			<RadioLabel disabled={disabled} size={size}>
				{children}
			</RadioLabel>
		</RadioContainer>
	);
});

function useRadioId(idProp?: string) {
	const autoId = useId(idProp);
	return idProp || `radio-${autoId}`;
}
