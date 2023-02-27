import { Fragment, ReactNode, useEffect, useState } from 'react';
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
} from './ComboboxButtons';

export type CommonComboboxProps<Option extends DefaultComboboxOption> = {
	/** Describes the purpose of the field. */
	label: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
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
	maxWidth?: Extract<FieldMaxWidth, 'md' | 'lg' | 'xl'>;
	/** If true, the field will not be interactive. */
	disabled?: boolean;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** A string specifying a name for the input control. */
	name?: string;
	/** If true, the selected item can be cleared.  */
	clearable?: boolean;
	/** Function to be fired following a change event. */
	onChange?: (value: Option | null) => void;
	/** The value of the field. */
	value?: Option | null;
	/** Used to override the default item rendering.  */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
};

type ComboboxBaseProps<Option extends DefaultComboboxOption> =
	CommonComboboxProps<Option> & {
		inputId: string;
		inputItems?: (Option & { isSelected?: boolean })[];
		loading?: boolean;
		networkError?: boolean;
		downshift: UseComboboxReturnValue<Option>;
		selectedItems: Option[];
		multiSelection: UseMultipleSelectionReturnValue<Option>;
	};

export function ComboboxMultiBase<Option extends DefaultComboboxOption>({
	label,
	hideOptionalLabel,
	required,
	hint,
	message,
	invalid,
	inputId,
	disabled,
	block = true,
	maxWidth: maxWidthProp = 'xl',
	// clearable = false,
	renderItem = defaultRenderItem,
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	downshift,
	inputItems,
	selectedItems,
	multiSelection,
	onClear,
	inputRef,
}: ComboboxBaseProps<Option>) {
	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes, update } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const inputContainerStyles = {
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
		paddingRight: '4rem',
	};

	// This component changes its height as the selected item change
	// So we need to update the popper element to recalculate its position
	useEffect(() => {
		update?.();
	}, [selectedItems, update]);

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
						<Flex gap={0.5} flexWrap="wrap" css={inputContainerStyles}>
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
							<input
								disabled={disabled}
								{...a11yProps}
								{...downshift.getInputProps(
									multiSelection.getDropdownProps({
										type: 'text',
										preventKeyAction: downshift.isOpen,
										ref: inputRef,
									})
								)}
								css={{
									flex: 1,
									appearance: 'none',
									border: 'none',
									with: '100%',
									borderWidth: 0,
									'&:focus': { outline: 'none' },
									fontFamily: tokens.font.body,
									...fontGrid('sm', 'default'),
								}}
							/>
						</Flex>
						{selectedItems?.length ? (
							<ComboboxClearButton
								disabled={disabled}
								onClick={() => onClear()}
								css={{ right: '2.5rem' }}
							/>
						) : null}
						<ComboboxDropdownTrigger
							disabled={disabled}
							{...downshift.getToggleButtonProps()}
						/>
						<div
							ref={setPopperEl}
							style={styles.popper}
							{...attributes.popper}
							css={{
								maxWidth: block
									? undefined
									: tokens.maxWidth.field[maxWidthProp],
								zIndex: 1,
								width: '100%',
							}}
						>
							<ComboboxList
								{...downshift.getMenuProps()}
								isOpen={downshift.isOpen}
							>
								{downshift.isOpen && (
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
															downshift.highlightedIndex === index;
														return (
															<ComboboxListItem
																key={`${item.value}${index}`}
																isActiveItem={isActiveItem}
																isInteractive={true}
																{...downshift.getItemProps({ item, index })}
															>
																{renderItem(item, downshift.inputValue)}
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
					</div>
				);
			}}
		</Field>
	);
}
