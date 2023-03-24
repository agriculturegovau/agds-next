import { Fragment, ReactNode, RefObject, useEffect, useState } from 'react';
import {
	UseComboboxReturnValue,
	UseMultipleSelectionReturnValue,
} from 'downshift';
import { usePopper } from 'react-popper';
import {
	boxPalette,
	FieldMaxWidth,
	fontGrid,
	mapSpacing,
	mergeRefs,
	packs,
	tokens,
} from '../../core';
import { Field } from '../../field';
import { Flex } from '../../box';
import { Tag } from '../../tags';
import { defaultRenderItem } from '../defaultRenderItem';
import { DefaultComboboxOption } from '../utils';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import {
	ComboboxDropdownTrigger,
	ComboboxClearButton,
	ComboboxButtonContainer,
} from './ComboboxButtons';

type ComboboxMultiBaseProps<Option extends DefaultComboboxOption> = {
	// Field props
	label: string;
	hideOptionalLabel?: boolean;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	inputId: string;
	inputName?: string;
	disabled?: boolean;
	// Styles
	block?: boolean;
	maxWidth?: Extract<FieldMaxWidth, 'md' | 'lg' | 'xl'>;
	showDropdownTrigger?: boolean;
	clearable?: boolean;
	// Downshift
	combobox: UseComboboxReturnValue<Option>;
	multiSelection: UseMultipleSelectionReturnValue<Option>;
	selectedItems: Option[];
	onClear: () => void;
	inputRef: RefObject<HTMLInputElement>;
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue: string) => ReactNode;
};

export function ComboboxMultiBase<Option extends DefaultComboboxOption>({
	label,
	hideOptionalLabel,
	required,
	hint,
	message,
	invalid = false,
	inputId,
	disabled = false,
	block = true,
	maxWidth: maxWidthProp = 'xl',
	// clearable = false,
	renderItem = defaultRenderItem,
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	combobox,
	inputItems,
	selectedItems,
	multiSelection,
	onClear,
	inputRef,
}: ComboboxMultiBaseProps<Option>) {
	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLUListElement | null>(null);
	const { styles, attributes, update } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	// This component changes its height as the selected item change
	// So we need to update the popper element to recalculate its position
	useEffect(() => {
		update?.();
	}, [selectedItems, update]);

	const containerStyles = comboboxContainerStyles({ invalid, disabled });
	const inputStyles = comboboxInputStyles({ invalid });

	const showClearButton = selectedItems?.length > 0;

	const { ref: menuRef, ...menuProps } = combobox.getMenuProps({
		...attributes.popper,
		style: styles.popper,
	});

	return (
		<Field
			label={label}
			hideOptionalLabel={hideOptionalLabel}
			required={Boolean(required)}
			hint={hint}
			message={message}
			invalid={invalid}
			id={inputId}
		>
			{(a11yProps) => {
				return (
					<div
						css={{
							position: 'relative',
							maxWidth: !block
								? tokens.maxWidth.field[maxWidthProp]
								: undefined,
							width: block ? '100%' : undefined,
							':focus-within': packs.outline,
						}}
						ref={setRefEl}
					>
						<Flex gap={0.5} flexWrap="wrap" css={containerStyles}>
							{selectedItems.map((item, idx) => {
								const { ref, ...itemProps } =
									multiSelection.getSelectedItemProps({
										selectedItem: item,
										index: idx,
									});
								return (
									<Tag
										key={`selected-item-${idx}`}
										onRemove={() => multiSelection.removeSelectedItem(item)}
										removeButtonRef={ref}
										{...itemProps}
									>
										{item.label}
									</Tag>
								);
							})}
							<div css={{ display: 'flex', flex: '1 1 2rem' }}>
								<input
									disabled={disabled}
									{...a11yProps}
									{...combobox.getInputProps(
										multiSelection.getDropdownProps({
											type: 'text',
											preventKeyAction: combobox.isOpen,
											ref: inputRef,
										})
									)}
									css={inputStyles}
								/>
							</div>
						</Flex>
						<ComboboxButtonContainer>
							{showClearButton && (
								<ComboboxClearButton
									disabled={disabled}
									onClick={() => onClear()}
								/>
							)}
							<ComboboxDropdownTrigger
								disabled={disabled}
								{...combobox.getToggleButtonProps()}
							/>
						</ComboboxButtonContainer>
						<ComboboxList
							{...menuProps}
							ref={mergeRefs([menuRef, setPopperEl])}
							maxWidth={maxWidthProp}
							isOpen={combobox.isOpen}
						>
							{combobox.isOpen && (
								<Fragment>
									{loading ? (
										<ComboboxListLoading />
									) : networkError ? (
										<ComboboxListError />
									) : (
										<Fragment>
											{inputItems?.length ? (
												inputItems.map((item, index) => {
													const isActiveItem =
														combobox.highlightedIndex === index;
													return (
														<ComboboxListItem
															key={`${item.value}${index}`}
															isActiveItem={isActiveItem}
															isInteractive={true}
															{...combobox.getItemProps({ item, index })}
														>
															{renderItem(item, combobox.inputValue)}
														</ComboboxListItem>
													);
												})
											) : (
												<ComboboxListEmptyResults
													message={emptyResultsMessage}
												/>
											)}
										</Fragment>
									)}
								</Fragment>
							)}
						</ComboboxList>
					</div>
				);
			}}
		</Field>
	);
}

function comboboxContainerStyles({
	invalid,
	disabled,
}: {
	invalid: boolean;
	disabled: boolean;
}) {
	return {
		appearance: 'none' as const,
		margin: 0,
		background: boxPalette.backgroundBody,
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderColor: boxPalette.border,
		color: boxPalette.foregroundText,
		fontFamily: tokens.font.body,
		...packs.input.md,
		height: 'auto',
		minHeight: packs.input.md.height,
		paddingTop: mapSpacing(0.25),
		paddingBottom: mapSpacing(0.25),
		paddingLeft: mapSpacing(0.5),
		paddingRight: '5rem',

		...(disabled && {
			cursor: 'not-allowed',
			borderColor: boxPalette.borderMuted,
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundMuted,
		}),

		...(invalid && {
			backgroundColor: boxPalette.systemErrorMuted,
			borderColor: boxPalette.systemError,
		}),
	};
}

function comboboxInputStyles({ invalid }: { invalid: boolean }) {
	return {
		appearance: 'none',
		boxSizing: 'border-box',
		borderWidth: 0,
		width: '100%',
		background: boxPalette.backgroundBody,
		color: boxPalette.foregroundText,
		fontFamily: tokens.font.body,
		...fontGrid('sm', 'default'),

		'&:focus': {
			outline: 'none',
		},

		...(invalid && {
			backgroundColor: boxPalette.systemErrorMuted,
			borderColor: boxPalette.systemError,
		}),

		'&:disabled': {
			backgroundColor: boxPalette.backgroundShade,
		},
	};
}
