import { forwardRef, TextareaHTMLAttributes } from 'react';
import { Field, FieldMaxWidth } from '@ag.ds-next/field';
import { textInputStyles } from '@ag.ds-next/text-input';

type NativeTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type BaseTextareaProps = {
	autoFocus?: NativeTextareaProps['autoFocus'];
	disabled?: NativeTextareaProps['disabled'];
	id?: NativeTextareaProps['id'];
	inputMode?: NativeTextareaProps['inputMode'];
	name?: NativeTextareaProps['name'];
	onBlur?: NativeTextareaProps['onBlur'];
	onChange?: NativeTextareaProps['onChange'];
	onFocus?: NativeTextareaProps['onFocus'];
	placeholder?: NativeTextareaProps['placeholder'];
	rows?: NativeTextareaProps['rows'];
	value?: NativeTextareaProps['value'];
};

export type TextareaProps = BaseTextareaProps & {
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

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	function Textarea(
		{
			label,
			hideOptionalLabel,
			required,
			hint,
			message,
			invalid,
			block,
			maxWidth,
			id,
			...props
		},
		ref
	) {
		const styles = textInputStyles({
			block,
			maxWidth,
			invalid,
			multiline: true,
		});
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
					<textarea ref={ref} css={styles} {...a11yProps} {...props} />
				)}
			</Field>
		);
	}
);
