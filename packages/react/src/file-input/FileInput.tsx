import {
	ChangeEvent,
	forwardRef,
	InputHTMLAttributes,
	useCallback,
	useState,
} from 'react';
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
			onChange: onChangeProp,
			...props
		},
		ref
	) {
		const [hasFile, setHasFile] = useState(false);
		const styles = useFileInputStyles({ hasFile });

		const onChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				onChangeProp?.(event);
				setHasFile(Boolean(event.target.files?.length));
			},
			[onChangeProp]
		);

		return (
			<Field
				label={label}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
				hint={hint}
				invalid={invalid}
				message={message}
				id={id}
			>
				{(a11yProps) => (
					<input
						ref={ref}
						css={styles}
						{...a11yProps}
						type="file"
						disabled={disabled}
						onChange={onChange}
						{...props}
					/>
				)}
			</Field>
		);
	}
);

function useFileInputStyles({ hasFile }: { hasFile: boolean }) {
	// Use `buttonStyles` to generate the styles for a standard secondary button
	const defaultButtonStyles = buttonStyles({
		size: 'sm',
		variant: 'secondary',
		block: false,
	});

	return {
		...fontGrid('sm', 'default'),
		fontFamily: tokens.font.body,
		color: boxPalette.foregroundText,
		fontWeight: hasFile ? tokens.fontWeight.bold : tokens.fontWeight.normal,

		'&::file-selector-button': {
			...defaultButtonStyles,
			margin: `0 ${mapSpacing(1)} 0 0`,
		},

		'&:hover': {
			cursor: 'pointer',
			'&:not(:disabled)::file-selector-button':
				defaultButtonStyles['&:not(:disabled):hover'],
		},

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
			'&::file-selector-button': { cursor: 'not-allowed' },
		},

		'&:focus': packs.outline,
	};
}
