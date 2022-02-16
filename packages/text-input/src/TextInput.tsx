import React, {
	forwardRef,
	DetailedHTMLProps,
	InputHTMLAttributes,
} from 'react';
import { Field, fieldMaxWidth, FieldMaxWidth } from '@ag.ds-next/field';
import {
	packs,
	boxPalette,
	mapSpacing,
	themeVars,
	tokens,
} from '@ag.ds-next/core';

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	label: string;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: true;
	valid?: true;
	block?: boolean;
	maxWidth?: FieldMaxWidth;
};

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
	function TextInput(
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
		const styles = textInputStyles({ block, maxWidth, invalid, valid });
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
					<input
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
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(1),
		margin: 0,
		backgroundColor: `var(${themeVars.lightBackgroundBody})`,
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: boxPalette.borderInput,
		borderRadius: tokens.borderRadius,
		color: `var(${themeVars.lightForegroundText})`,
		maxWidth: maxWidth ? fieldMaxWidth[maxWidth] : '12.8125rem',
		fontFamily: tokens.font.body,
		...packs.control.md,

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

		'&:focus': packs.outline,
	} as const);
