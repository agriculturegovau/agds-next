import { Fragment, SelectHTMLAttributes } from 'react';
import { boxPalette, FieldMaxWidth, mapSpacing, packs, tokens } from '../core';
import { Text } from '../text';
import { Flex } from '../flex';
import { ChevronDownIcon } from '../icon';
import { Options } from '../select';

type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type BaseSelectProps = {
	autoFocus?: NativeSelectProps['autoFocus'];
	disabled?: NativeSelectProps['disabled'];
	id: NativeSelectProps['id'];
	name?: NativeSelectProps['name'];
	onBlur?: NativeSelectProps['onBlur'];
	onChange?: NativeSelectProps['onChange'];
	onFocus?: NativeSelectProps['onFocus'];
	placeholder?: NativeSelectProps['placeholder'];
	value?: NativeSelectProps['value'];
};

type SelectMaxWidth = Extract<FieldMaxWidth, 'sm' | 'md' | 'lg' | 'xl'>;

export type PaginationSelectProps = BaseSelectProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** The list of options to display in the drop-down list. */
	options: Options;
	/** The maximum width of the field. */
	maxWidth?: SelectMaxWidth;
};

/**
 * This component is a clone of the AgDS Select component, except that it
 * shows the label to the left of the select box instead of above it.
 * It does not support validation.
 */
export const PaginationSelect = ({
	label,
	maxWidth = 'md',
	options,
	placeholder,
	id,
	...props
}: PaginationSelectProps) => {
	return (
		<Flex alignItems="center" gap={1}>
			<Text as="label" fontWeight="bold" htmlFor={id}>
				{label}
			</Text>

			<div
				css={{
					position: 'relative',
					maxWidth: tokens.maxWidth.field[maxWidth],
				}}
			>
				<select css={selectStyles} id={id} {...props}>
					<SelectOptions options={options} placeholder={placeholder} />
				</select>
				<SelectIcon />
			</div>
		</Flex>
	);
};

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
						<optgroup disabled={opt.disabled} key={opt.label} label={opt.label}>
							{opt.options.map(({ value, label, disabled }) => (
								<option disabled={disabled} key={value} value={value}>
									{label}
								</option>
							))}
						</optgroup>
					);
				}
				return (
					<option disabled={opt.disabled} key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				);
			})}
		</Fragment>
	);
};

const SelectIcon = ({ disabled }: { disabled?: boolean }) => (
	<ChevronDownIcon
		css={{
			position: 'absolute',
			top: '50%',
			right: mapSpacing(0.75),
			transform: 'translateY(-50%)',
			opacity: disabled ? 0.3 : undefined,
			pointerEvents: 'none',
			color: boxPalette.foregroundAction,
		}}
	/>
);

const selectStyles = {
	position: 'relative',
	appearance: 'none',
	boxSizing: 'border-box',
	paddingLeft: mapSpacing(1),
	// border width + icon size + desired padding
	paddingRight: `calc(${tokens.borderWidth.lg}px + 2.5rem)`,
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

	'&:disabled': {
		opacity: 1, // Overwrites default browser styles
		cursor: 'not-allowed',
		borderColor: boxPalette.borderMuted,
		backgroundColor: boxPalette.backgroundShade,
		color: boxPalette.foregroundMuted,
	},

	'&:focus': packs.outline,
} as const;
