import { forwardRef, InputHTMLAttributes } from 'react';
import { Field, fieldMaxWidth, FieldMaxWidth } from '@ag.ds-next/field';
import {
	packs,
	boxPalette,
	mapSpacing,
	globalPalette,
	tokens,
} from '@ag.ds-next/core';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseProps = {
	disabled?: boolean;
	id?: string;
	inputMode?: NativeInputProps['inputMode'];
	name?: string;
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	pattern?: NativeInputProps['id'];
	value?: NativeInputProps['value'];
	type?: NativeInputProps['type'];
};

export type TextInputProps = BaseProps & {
	label: string;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	valid?: boolean;
	block?: boolean;
	maxWidth?: FieldMaxWidth;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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
			id,
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
				id={id}
			>
				{(allyProps) => (
					<input ref={ref} css={styles} {...allyProps} {...props} />
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
	multiline,
}: {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	invalid?: boolean;
	valid?: boolean;
	multiline?: boolean;
}) =>
	({
		appearance: 'none',
		boxSizing: 'border-box',
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(1),
		margin: 0,
		backgroundColor: globalPalette.lightBackgroundBody,
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderColor: boxPalette.borderInput,
		borderRadius: tokens.borderRadius,
		color: globalPalette.lightForegroundText,
		maxWidth: maxWidth ? fieldMaxWidth[maxWidth] : '12.8125rem',
		fontFamily: tokens.font.body,
		...packs.input.md,

		...(block && {
			maxWidth: 'none',
			display: 'block',
			width: '100%',
		}),

		...(invalid
			? {
					backgroundColor: globalPalette.errorMuted,
					borderColor: globalPalette.error,
			  }
			: valid
			? {
					backgroundColor: globalPalette.successMuted,
					borderColor: globalPalette.success,
			  }
			: undefined),

		...(multiline && {
			lineHeight: tokens.lineHeight.default,
			paddingTop: mapSpacing(0.5),
			paddingBottom: mapSpacing(0.5),
			height: 'auto,',
			minHeight: '6rem',
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	} as const);
