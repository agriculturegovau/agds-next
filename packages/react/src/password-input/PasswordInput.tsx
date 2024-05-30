import { forwardRef, InputHTMLAttributes } from 'react';
import { useId, useToggleState } from '../core';
import { TextInput } from '../text-input';
import { Checkbox } from '../checkbox';
import { Stack } from '../stack';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BasePasswordInputProps = {
	autoComplete?: NativeInputProps['autoComplete'];
	autoFocus?: NativeInputProps['autoFocus'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	maxLength?: NativeInputProps['maxLength'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	value?: NativeInputProps['value'];
};

export type PasswordInputProps = BasePasswordInputProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** The maximum width of the field. */
	maxWidth?: 'md' | 'lg' | 'xl';
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	function PasswordInput({ id: idProp, ...props }, ref) {
		const inputId = usePasswordInputId(idProp);
		const [checked, toggleChecked] = useToggleState(false, true);
		return (
			<Stack gap={1}>
				<TextInput
					ref={ref}
					{...props}
					id={inputId}
					type={checked ? 'text' : 'password'}
				/>
				<Checkbox
					disabled={props.disabled}
					aria-controls={inputId}
					size="sm"
					checked={checked}
					onChange={toggleChecked}
				>
					Show password
				</Checkbox>
			</Stack>
		);
	}
);

function usePasswordInputId(idProp: string | undefined) {
	const autoId = useId(idProp);
	return idProp ?? `password-input-${autoId}`;
}
