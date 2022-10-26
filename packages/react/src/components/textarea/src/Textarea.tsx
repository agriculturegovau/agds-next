import { forwardRef, TextareaHTMLAttributes } from 'react';
import { Field, FieldMaxWidth } from '../../field/src';
import { textInputStyles } from '../../text-input/src';

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
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid or valid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the valid state will be rendered. */
	valid?: boolean;
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** The maximum width of the field. */
	maxWidth?: FieldMaxWidth;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	function Textarea(
		{
			label,
			required,
			hint,
			message,
			invalid,
			valid,
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
			valid,
			multiline: true,
		});
		return (
			<Field
				label={label}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={id}
			>
				{(a11yProps) => (
					<textarea ref={ref} css={styles} {...a11yProps} {...props} />
				)}
			</Field>
		);
	}
);
