import { forwardRef, TextareaHTMLAttributes } from 'react';
import { Field, FieldMaxWidth } from '@ag.ds-next/field';
import { textInputStyles } from '@ag.ds-next/text-input';

type NativeTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type BaseProps = {
	disabled?: boolean;
	id?: string;
	name?: string;
	onBlur?: NativeTextareaProps['onBlur'];
	onChange?: NativeTextareaProps['onChange'];
	onFocus?: NativeTextareaProps['onFocus'];
	pattern?: NativeTextareaProps['id'];
	rows?: NativeTextareaProps['rows'];
	value?: NativeTextareaProps['value'];
};

export type TextareaProps = BaseProps & {
	label: string;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	valid?: boolean;
	block?: true;
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
				{(allyProps) => (
					<textarea ref={ref} css={styles} {...allyProps} {...props} />
				)}
			</Field>
		);
	}
);
