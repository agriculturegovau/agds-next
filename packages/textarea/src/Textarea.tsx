import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { useField } from '@ag.ds-next/field';
import { textInputStyles } from '@ag.ds-next/text-input';

export type TextareaProps = DetailedHTMLProps<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Textarea = ({ block, maxWidth, ...props }: TextareaProps) => {
	const { fieldId, describedById, invalid, valid, required } = useField();
	const styles = textInputStyles({ block, maxWidth, invalid, valid });
	return (
		<textarea
			id={fieldId}
			required={required}
			aria-invalid={Boolean(invalid)}
			aria-describedby={describedById}
			css={styles}
			{...props}
		/>
	);
};
