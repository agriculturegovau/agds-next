import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { FieldMaxWidth, useId } from '../core';
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
	placeholder?: NativeInputProps['placeholder'];
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
	maxWidth?: FieldMaxWidth;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	function PasswordInput({ id: idProp, ...props }, ref) {
		const id = usePasswordInputId(idProp);
		const [checked, setChecked] = useState(false);
		return (
			<Stack gap={1}>
				<TextInput
					ref={ref}
					{...props}
					id={id}
					type={checked ? 'text' : 'password'}
				/>
				<Checkbox
					disabled={props.disabled}
					aria-controls={id}
					size="sm"
					checked={checked}
					onChange={(event) => setChecked(event.target.checked)}
				>
					Show password
				</Checkbox>
			</Stack>
		);
	}
);

function usePasswordInputId(idProp: string | undefined) {
	const autoId = useId(idProp);
	return idProp ? idProp : `password-input-${autoId}`;
}
