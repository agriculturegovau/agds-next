import { Fragment, useState, ReactNode, useCallback } from 'react';
import { useCombobox } from 'downshift';
import { usePopper } from 'react-popper';
import { useId } from '@ag.ds-next/core';
import { textInputStyles } from '@ag.ds-next/text-input';
import { Field } from '@ag.ds-next/field';
import { Text } from '@ag.ds-next/text';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import { ComboboxDropdownTrigger } from './ComboboxDropdownTrigger';
import { ComboboxClearButton } from './ComboboxClearButton';
import { DefaultComboboxOption, filterOptions, splitLabel } from './utils';

export type ComboboxProps<Option extends DefaultComboboxOption> = {
	/** Describes the purpose of the field. */
	label: string;
	/** If true, the secondary label will not be rendered.  */
	hideOptionalText?: boolean;
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
	disabled?: boolean;
	id?: string;
	name?: string;
	/** If true, the selected item can be cleared. Only available when `showDropdownTrigger` is false. */
	clearable?: boolean;
	/** If true, the dropdown trigger will be rendered. */
	showDropdownTrigger?: boolean;
	/** The list of options to show in the dropdown. */
	options?: Option[];
	/** Function to be used when options need to be loaded over the network. */
	loadOptions?: (inputValue: string) => Promise<Option[]>;
	/** The value of the field. */
	value?: Option | null;
	/** Function to be fired following a change event. */
	onChange?: (value: Option | null) => void;
	/** Used to override the default item rendering.  */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
};

export function Combobox<Option extends DefaultComboboxOption>({
	label,
	hideOptionalText,
	required,
	hint,
	message,
	invalid,
	id: idProp,
	disabled,
	block,
	showDropdownTrigger = true,
	clearable = false,
	options = [],
	loadOptions,
	value,
	onChange,
	renderItem = defaultRenderItem,
	emptyResultsMessage = 'No options found.',
}: ComboboxProps<Option>) {
	const inputId = useComboboxInputId(idProp);
	const [loading, setLoading] = useState(false);
	const [networkError, setNetworkError] = useState(false);
	const [inputItems, setInputItems] = useState<Option[]>(options);

	const loadOrFilterOptions = useCallback(
		async (inputValue?: string) => {
			inputValue = inputValue?.toLowerCase() ?? '';
			if (loadOptions) {
				// Asynchronous
				setNetworkError(false);
				setLoading(true);
				try {
					const inputItems = await loadOptions(inputValue);
					setInputItems(filterOptions(inputItems, inputValue));
					setLoading(false);
				} catch {
					setNetworkError(true);
				}
			} else {
				// Synchronous
				setInputItems(filterOptions(options, inputValue));
			}
		},
		[loadOptions, options]
	);

	const {
		inputValue,
		isOpen,
		getToggleButtonProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
		selectedItem,
		reset,
	} = useCombobox<Option>({
		selectedItem: value,
		inputId,
		items: inputItems,
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem }) => {
			if (selectedItem === undefined) selectedItem = null;
			if (onChange) onChange(selectedItem);
		},
		onInputValueChange: async ({ inputValue }) => {
			await loadOrFilterOptions(inputValue);
		},
		onIsOpenChange: async ({ isOpen, inputValue }) => {
			if (!isOpen || inputValue) return;
			await loadOrFilterOptions(inputValue);
		},
		stateReducer: (state, actionAndChanges) => {
			const { type: actionAndChangesType, changes } = actionAndChanges;
			switch (actionAndChangesType) {
				case useCombobox.stateChangeTypes.InputBlur:
					return { inputValue: state.selectedItem ? state.inputValue : '' };
				default:
					return changes;
			}
		},
	});

	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const { maxWidth, ...inputStyles } = {
		...textInputStyles({
			block,
			maxWidth: 'xl',
			invalid,
		}),
	};

	return (
		<div css={{ position: 'relative', maxWidth }} ref={setRefEl}>
			<Field
				label={label}
				disableSecondaryLabel={Boolean(hideOptionalText)}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				id={inputId}
			>
				{(a11yProps) => (
					<div css={{ position: 'relative' }} {...getComboboxProps()}>
						<input
							css={[inputStyles, { width: '100%' }]}
							disabled={disabled}
							{...a11yProps}
							{...getInputProps()}
						/>
						{showDropdownTrigger && (
							<ComboboxDropdownTrigger
								disabled={disabled}
								{...getToggleButtonProps()}
							/>
						)}
						{!showDropdownTrigger && clearable && selectedItem && (
							<ComboboxClearButton disabled={disabled} onClick={reset} />
						)}
					</div>
				)}
			</Field>
			<div
				ref={setPopperEl}
				style={styles.popper}
				{...attributes.popper}
				css={{ zIndex: 1, width: '100%' }}
			>
				<ComboboxList {...getMenuProps()} isOpen={isOpen}>
					{isOpen ? (
						<Fragment>
							{loading ? (
								<ComboboxListLoading />
							) : networkError ? (
								<ComboboxListError />
							) : (
								<Fragment>
									{inputItems.length ? (
										inputItems.map((item, index) => {
											const isActiveItem = highlightedIndex === index;
											return (
												<ComboboxListItem
													key={`${item.value}${index}`}
													isActiveItem={isActiveItem}
													isInteractive={true}
													{...getItemProps({ item, index })}
												>
													{renderItem(item, inputValue)}
												</ComboboxListItem>
											);
										})
									) : (
										<ComboboxListEmptyResults message={emptyResultsMessage} />
									)}
								</Fragment>
							)}
						</Fragment>
					) : null}
				</ComboboxList>
			</div>
		</div>
	);
}

function defaultRenderItem<Option extends DefaultComboboxOption>(
	item: Option,
	inputValue: string
) {
	return splitLabel(item.label, inputValue).map((part, index) => {
		const isHighlighted = part.toLowerCase() === inputValue.toLowerCase();
		if (isHighlighted) {
			return (
				<Text
					key={index}
					as="mark"
					color="action"
					fontWeight="bold"
					css={{ background: 'none' }}
				>
					{part}
				</Text>
			);
		}
		return (
			<Text key={index} as="span" color="action">
				{part}
			</Text>
		);
	});
}

function useComboboxInputId(idProp?: string) {
	const autoId = useId();
	return idProp || `combobox-input-${autoId}`;
}
