import {
	Fragment,
	forwardRef,
	PropsWithChildren,
	SelectHTMLAttributes,
} from 'react';
import { Field } from '../field';
import { packs, boxPalette, mapSpacing, tokens, FieldMaxWidth } from '../core';
import { ChevronDownIcon } from '../icon';

export type Option = {
	label: string;
	value: string;
	disabled?: boolean;
};
export type OptionGroup = {
	label: string;
	disabled?: boolean;
	options: Option[];
};
export type Options = (Option | OptionGroup)[];

type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type BaseSelectProps = {
	autoFocus?: NativeSelectProps['autoFocus'];
	disabled?: NativeSelectProps['disabled'];
	id?: NativeSelectProps['id'];
	name?: NativeSelectProps['name'];
	onBlur?: NativeSelectProps['onBlur'];
	onChange?: NativeSelectProps['onChange'];
	onFocus?: NativeSelectProps['onFocus'];
	placeholder?: NativeSelectProps['placeholder'];
	value?: NativeSelectProps['value'];
};

type SelectMaxWidth = Extract<FieldMaxWidth, 'sm' | 'md' | 'lg' | 'xl'>;

export type SelectProps = BaseSelectProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** The list of options to display in the drop-down list. */
	options: Options;
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
	maxWidth?: SelectMaxWidth;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	function Select(
		{
			label,
			hideOptionalLabel,
			required,
			hint,
			message,
			invalid,
			block,
			maxWidth = 'md',
			options,
			placeholder,
			id,
			...props
		},
		ref
	) {
		const styles = selectStyles({ block, invalid });
		return (
			<Field
				label={label}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				id={id}
			>
				{(a11yProps) => (
					<SelectContainer block={block} maxWidth={maxWidth}>
						<select ref={ref} css={styles} {...a11yProps} {...props}>
							<SelectOptions options={options} placeholder={placeholder} />
						</select>
						<SelectIcon disabled={props.disabled} />
					</SelectContainer>
				)}
			</Field>
		);
	}
);

const SelectContainer = ({
	children,
	block,
	maxWidth,
}: PropsWithChildren<{
	block?: boolean;
	maxWidth: SelectMaxWidth;
}>) => (
	<div
		css={{
			position: 'relative',
			...(!block && {
				maxWidth: tokens.maxWidth.field[maxWidth],
			}),
		}}
	>
		{children}
	</div>
);

const SelectOptions = ({
	options,
	placeholder,
}: {
	options: Options;
	placeholder?: string;
}) => {
	return (
		<Fragment>
			{placeholder ? <option value="">{placeholder}</option> : null}
			{options.map((opt) => {
				if ('options' in opt) {
					return (
						<optgroup key={opt.label} label={opt.label} disabled={opt.disabled}>
							{opt.options.map(({ value, label, disabled }) => (
								<option key={value} value={value} disabled={disabled}>
									{label}
								</option>
							))}
						</optgroup>
					);
				}
				return (
					<option key={opt.value} value={opt.value} disabled={opt.disabled}>
						{opt.label}
					</option>
				);
			})}
		</Fragment>
	);
};

const SelectIcon = ({ disabled }: { disabled?: boolean }) => (
	<ChevronDownIcon
		size="sm"
		weight="bold"
		css={{
			position: 'absolute',
			top: '50%',
			right: mapSpacing(1),
			transform: 'translateY(-50%)',
			opacity: disabled ? 0.3 : undefined,
			pointerEvents: 'none',
			color: boxPalette.foregroundAction,
		}}
	/>
);

const selectStyles = ({
	block,
	invalid,
}: {
	block?: boolean;
	invalid?: boolean;
}) =>
	({
		position: 'relative',
		appearance: 'none',
		boxSizing: 'border-box',
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(3),
		margin: 0,
		background: boxPalette.backgroundBody,
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderColor: boxPalette.border,
		borderRadius: tokens.borderRadius,
		color: boxPalette.foregroundText,
		width: '100%',
		fontFamily: tokens.font.body,
		...packs.input.md,
		lineHeight: tokens.lineHeight.default,
		...packs.truncate,

		...(block && {
			maxWidth: 'none',
			display: 'block',
		}),

		...(invalid && {
			backgroundColor: boxPalette.systemErrorMuted,
			borderColor: boxPalette.systemError,
		}),

		'&:disabled': {
			opacity: 1, // Overwrites default browser styles
			cursor: 'not-allowed',
			borderColor: boxPalette.borderMuted,
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundMuted,
		},

		'&:focus': packs.outline,
	}) as const;
