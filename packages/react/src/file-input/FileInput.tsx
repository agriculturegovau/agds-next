import { forwardRef, InputHTMLAttributes } from 'react';
import { Field } from '../field';
import { packs, boxPalette } from '../core';
import { buttonStyles } from '../button';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseFileInputProps = {
	accept?: NativeInputProps['accept'];
	autoFocus?: NativeInputProps['autoFocus'];
	capture?: NativeInputProps['capture'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	multiple?: NativeInputProps['multiple'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	value?: NativeInputProps['value'];
};

export type FileInputProps = BaseFileInputProps & {
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
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	function FileInput(
		{
			label,
			hideOptionalLabel,
			required,
			hint,
			message,
			invalid,
			id,
			...props
		},
		ref
	) {
		const styles = fileInputStyles({ invalid });
		return (
			<Field
				label={label}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				id={id}
			>
				{(a11yProps) => (
					<input ref={ref} css={styles} {...a11yProps} type="file" {...props} />
				)}
			</Field>
		);
	}
);

export const fileInputStyles = ({ invalid }: { invalid?: boolean }) =>
	({
		'::file-selector-button': {
			...buttonStyles({ size: 'md', variant: 'secondary', block: false }),
			margin: undefined,
		},

		...(invalid && {
			backgroundColor: boxPalette.systemErrorMuted,
			color: boxPalette.systemError,
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	} as const);
