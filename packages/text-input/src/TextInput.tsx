import { forwardRef, Fragment, InputHTMLAttributes } from 'react';
import { Field, fieldMaxWidth, FieldMaxWidth } from '@ag.ds-next/field';
import { packs, boxPalette, mapSpacing, tokens } from '@ag.ds-next/core';
import { SearchIcon } from '@ag.ds-next/icon';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseTextInputProps = {
	autoComplete?: NativeInputProps['autoComplete'];
	autoFocus?: NativeInputProps['autoFocus'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	inputMode?: NativeInputProps['inputMode'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	pattern?: NativeInputProps['pattern'];
	placeholder?: NativeInputProps['placeholder'];
	value?: NativeInputProps['value'];
	type?: NativeInputProps['type'];
};

export type TextInputProps = BaseTextInputProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** The maximum width of the field. */
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
			block,
			maxWidth,
			id,
			type = 'text',
			disabled,
			...props
		},
		ref
	) {
		const styles = textInputStyles({
			block,
			maxWidth,
			invalid,
			type,
		});
		return (
			<Field
				label={label}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				id={id}
			>
				{(a11yProps) => (
					<Fragment>
						{type === 'search' ? <SearchInputIcon disabled={disabled} /> : null}
						<input
							ref={ref}
							type={type}
							disabled={disabled}
							css={styles}
							{...a11yProps}
							{...props}
						/>
					</Fragment>
				)}
			</Field>
		);
	}
);

function SearchInputIcon({ disabled }: { disabled?: boolean }) {
	return (
		<SearchIcon
			size="md"
			weight="regular"
			color="muted"
			css={{
				position: 'absolute',
				top: '50%',
				transform: 'translateY(-50%)',
				pointerEvents: 'none',
				left: mapSpacing(1),
				opacity: disabled ? 0.3 : undefined,
			}}
		/>
	);
}

export const textInputStyles = ({
	block,
	maxWidth,
	invalid,
	multiline,
	type,
}: {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	invalid?: boolean;
	multiline?: boolean;
	type?: string;
}) =>
	({
		appearance: 'none',
		boxSizing: 'border-box',
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(1),
		margin: 0,
		background: 'none',
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderColor: boxPalette.border,
		borderRadius: tokens.borderRadius,
		color: boxPalette.foregroundText,
		maxWidth: maxWidth ? fieldMaxWidth[maxWidth] : '12.8125rem',
		fontFamily: tokens.font.body,
		...packs.input.md,

		...(block && {
			maxWidth: 'none',
			display: 'block',
			width: '100%',
		}),

		...(invalid && {
			backgroundColor: boxPalette.systemErrorMuted,
			borderColor: boxPalette.systemError,
		}),

		...(multiline && {
			paddingTop: mapSpacing(0.5),
			paddingBottom: mapSpacing(0.5),
			height: 'auto',
			minHeight: '6rem',
		}),

		...(type === 'search' && {
			paddingLeft: mapSpacing(3),
			'&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
				{
					display: 'none',
				},
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	} as const);
