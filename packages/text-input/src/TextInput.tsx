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

export const TextInput = ({ block, maxWidth, ...props }: InputProps) => {
	const { fieldId, hintId, messageId, hasHint, isInvalid } = useField();
	const styles = textInputStyles({ block, maxWidth, isInvalid });
	return (
		<input
			{...props}
			id={fieldId}
			aria-invalid={isInvalid ? true : false}
			aria-describedby={isInvalid ? messageId : hasHint ? hintId : undefined}
			css={styles}
		/>
	);
};

export const textInputStyles = ({
	block,
	maxWidth,
	isInvalid,
}: {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	isInvalid?: boolean;
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

		// Error
		...(isInvalid === true && {
			backgroundColor: `var(${themeVars.errorMuted})`,
			borderColor: `var(${themeVars.error})`,
		}),

		// Success
		...(isInvalid === false && {
			backgroundColor: `var(${themeVars.successMuted})`,
			borderColor: `var(${themeVars.success})`,
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
