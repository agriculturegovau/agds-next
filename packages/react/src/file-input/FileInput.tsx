import { forwardRef, InputHTMLAttributes } from 'react';
import { Field } from '../field';
import { packs, boxPalette, fontGrid, mapSpacing, tokens } from '../core';
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
			disabled,
			...props
		},
		ref
	) {
		const styles = useFileInputStyles({ disabled });
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
					<input
						ref={ref}
						css={styles}
						{...a11yProps}
						type="file"
						disabled={disabled}
						{...props}
					/>
				)}
			</Field>
		);
	}
);

function useFileInputStyles({ disabled }: { disabled?: boolean }) {
	// Use `buttonStyles` to generate the styles for a standard secondary button
	const defaultButtonStyles = buttonStyles({
		size: 'md',
		variant: 'secondary',
		block: false,
	});

	return {
		...fontGrid('sm', 'default'),
		fontFamily: tokens.font.body,
		color: boxPalette.foregroundText,

		'&::file-selector-button': {
			...defaultButtonStyles,
			margin: `0 ${mapSpacing(1)} 0 0`,
		},

		'&:hover': {
			cursor: 'pointer',
			'&::file-selector-button': disabled
				? { cursor: 'not-allowed' }
				: // '&:not(:disabled):hover' is not supported by the '::file-selector-button' component, but we still want the hover styles
				  defaultButtonStyles['&:not(:disabled):hover'],
		},

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	};
}
