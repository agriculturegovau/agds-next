import React, {
	forwardRef,
	DetailedHTMLProps,
	TextareaHTMLAttributes,
} from 'react';
import { Field, FieldMaxWidth } from '@ag.ds-next/field';
import { textInputStyles } from '@ag.ds-next/text-input';

export type TextareaProps = DetailedHTMLProps<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	label: string;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: true;
	valid?: true;
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
			>
				{(allyProps) => (
					<textarea
						ref={ref}
						required={required}
						css={styles}
						{...allyProps}
						{...props}
					/>
				)}
			</Field>
		);
	}
);
