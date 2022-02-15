import React, {
	forwardRef,
	DetailedHTMLProps,
	SelectHTMLAttributes,
} from 'react';
import { Field, FieldMaxWidth, fieldMaxWidth } from '@ag.ds-next/field';
import {
	boxPalette,
	fontGrid,
	mapSpacing,
	outline,
	themeVars,
	tokens,
} from '@ag.ds-next/core';
import { Icon } from '@ag.ds-next/icon';

type Option = string | { label: string; value: string };

export type SelectProps = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
> & {
	label: string;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: true;
	valid?: true;
	block?: boolean;
	maxWidth?: FieldMaxWidth;
	placeholder?: string | null;
	options: Option[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	function Select(
		{
			label,
			required,
			hint,
			message,
			invalid,
			valid,
			block,
			maxWidth,
			options,
			placeholder = 'Please select',
			defaultValue = '',
			...props
		},
		ref
	) {
		const styles = selectStyles({ block, invalid, valid });
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
					<div
						css={{
							position: 'relative',
							maxWidth: maxWidth ? fieldMaxWidth[maxWidth] : '12.8125rem',
						}}
					>
						<select
							ref={ref}
							defaultValue={defaultValue}
							required={required}
							{...allyProps}
							{...props}
							css={styles}
						>
							{placeholder ? <option value="">{placeholder}</option> : null}
							{options.map((option) => {
								const { value, label } = getOptionProps(option);
								return (
									<option key={value} value={value}>
										{label}
									</option>
								);
							})}
						</select>
						<Icon
							icon="chevronDown"
							color="action"
							css={{
								position: 'absolute',
								top: '50%',
								right: mapSpacing(1),
								transform: 'translateY(-50%)',
								opacity: props.disabled ? 0.3 : 1,
							}}
						/>
					</div>
				)}
			</Field>
		);
	}
);

const getOptionProps = (option: Option) => {
	if (typeof option === 'string') return { label: option, value: option };
	return option;
};

const selectStyles = ({
	block,
	invalid,
	valid,
}: {
	block?: boolean;
	invalid?: boolean;
	valid?: boolean;
}) =>
	({
		position: 'relative',
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
		color: `var(${themeVars.lightForegroundText})`,
		fontFamily: tokens.font.body,
		width: '100%',
		...fontGrid('sm', 'nospace'),

		...(block && {
			maxWidth: 'none',
			display: 'block',
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
