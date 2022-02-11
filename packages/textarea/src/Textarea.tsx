import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { Field } from '@ag.ds-next/field';
import { textInputStyles } from '@ag.ds-next/text-input';

export type TextareaProps = DetailedHTMLProps<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	label: string;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	valid?: boolean;
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Textarea = ({
	label,
	required,
	hint,
	message,
	invalid,
	valid,
	block,
	maxWidth,
	...props
}: TextareaProps) => {
	const styles = textInputStyles({ block, maxWidth, invalid, valid });
	return (
		<Field
			label={label}
			required={Boolean(required)}
			hint={hint}
			message={message}
			invalid={Boolean(invalid)}
			valid={Boolean(valid)}
		>
			{(allyProps) => (
				<textarea required={required} css={styles} {...allyProps} {...props} />
			)}
		</Field>
	);
};
