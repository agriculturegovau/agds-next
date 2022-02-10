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

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const TextInput = ({ block, maxWidth, ...props }: InputProps) => {
	const { fieldId, describedById, invalid, valid, required } = useField();
	const styles = textInputStyles({ block, maxWidth, invalid, valid });
	return (
		<input
			id={fieldId}
			required={required}
			aria-invalid={Boolean(invalid)}
			aria-describedby={describedById}
			css={styles}
			{...props}
		/>
	);
};

export const textInputStyles = ({
	block,
	maxWidth,
	invalid,
	valid,
}: {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	invalid?: boolean;
	valid?: boolean;
}) =>
	({
		appearance: 'none',
		boxSizing: 'border-box',
		verticalAlign: 'middle',
		paddingTop: mapSpacing(0.5),
		paddingBottom: mapSpacing(0.5),
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(1),
		backgroundColor: `var(${themeVars.lightBackgroundBody})`,
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: boxPalette.borderInput,
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		color: themeVars.lightForegroundText,
		maxWidth: maxWidth ? maxWidths[maxWidth] : '12.8125rem',
		fontFamily: tokens.font.body,
		...fontGrid('sm', 'nospace'),

		...(block && {
			maxWidth: 'none',
			display: 'block',
			width: '100%',
		}),

		...(invalid
			? {
					backgroundColor: `var(${themeVars.errorMuted})`,
					borderColor: `var(${themeVars.error})`,
			  }
			: valid
			? {
					backgroundColor: `var(${themeVars.successMuted})`,
					borderColor: `var(${themeVars.success})`,
			  }
			: undefined),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': outline,
	} as const);

const maxWidths = {
	xs: '4.3rem',
	sm: '6.3rem',
	md: '10rem',
	lg: '18rem',
	xl: '25rem',
} as const;
