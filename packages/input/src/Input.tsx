import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useField } from '@ag.ds-next/field';
import {
	boxPalette,
	fontGrid,
	mapSpacing,
	outline,
	themeVars,
	tokens,
} from '@ag.ds-next/core';

// TODO Omit?
export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Input = ({ block, maxWidth, ...props }: InputProps) => {
	const { fieldId, hintId, errorMessageId, hasHint, hasError } = useField();
	const styles = inputStyles({ block, hasError, maxWidth });
	return (
		<input
			{...props}
			id={fieldId}
			aria-invalid={hasError ? true : false}
			aria-describedby={
				hasError ? errorMessageId : hasHint ? hintId : undefined
			}
			css={styles}
		/>
	);
};

const inputStyles = ({
	block,
	hasError,
	maxWidth,
}: {
	block?: boolean;
	hasError: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}) =>
	({
		appearance: 'none',
		boxSizing: 'border-box',
		verticalAlign: 'middle',
		paddingTop: mapSpacing(0.5),
		paddingBottom: mapSpacing(0.5),
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(1),
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: boxPalette.border,
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		fontFamily: tokens.font.body,
		...fontGrid('sm', 'nospace'),
		backgroundColor: `var(${themeVars.lightBackgroundBody})`,
		color: boxPalette.foregroundText,

		maxWidth: maxWidth ? maxWidths[maxWidth] : '12.8125rem', // TODO

		...(block && {
			maxWidth: 'none',
			display: 'block',
			width: '100%',
		}),

		...(hasError && {
			// backgroundColor: themeVars.error,
			borderColor: `var(${themeVars.error})`,
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': outline,

		'::placeholder': {
			color: boxPalette.foregroundMuted,
		},
	} as const);

const maxWidths = {
	xs: '4.3rem',
	sm: '6.3rem',
	md: '10rem',
	lg: '18rem',
	xl: '25rem',
} as const;
