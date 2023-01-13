import { InputHTMLAttributes } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Field } from '../field';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

export type FileSelectProps = {
	id?: NativeInputProps['id'];
	/** Describes the purpose of the field. */
	label: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
};

export function FileSelect({
	label,
	required,
	hint,
	message,
	invalid,
	id,
	...props
}: FileSelectProps) {
	return (
		<Field
			label={label}
			required={Boolean(required)}
			hint={hint}
			message={message}
			invalid={invalid}
			id={id}
		>
			<Box {...props}>
				<input type="file" />
			</Box>
		</Field>
	);
}
