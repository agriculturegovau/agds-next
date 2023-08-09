import { ReactNode, Ref, useCallback, useMemo, useState } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { FieldMaxWidth } from '../core';
import { ComboboxMultiBase } from './ComboboxBase';
import {
	DefaultComboboxOption,
	useComboboxInputId,
	filterOptions,
} from './utils';
import { useLoadOptions } from './useLoadOptions';

export type ComboboxAsyncMultiProps<Option extends DefaultComboboxOption> = {
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
	/** The value of the field. */
	value?: Option[];
	/** Function to be fired following a change event. */
	onChange?: (value: Option[]) => void;
	/** Function to be used when options need to be loaded over the network. */
	loadOptions: (inputValue: string) => Promise<Option[]>;
	/** Used to override the default item rendering.  */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
	/** Ref to the input element. */
	inputRef?: Ref<HTMLInputElement>;
};

export function ComboboxAsyncMulti<Option extends DefaultComboboxOption>({
	id,
	value,
	onChange,
	loadOptions: loadOptionsProp,
	...props
}: ComboboxAsyncMultiProps<Option>) {
	const inputId = useComboboxInputId(id);
	const [inputValue, setInputValue] = useState<string>();

	// If no `value` has been supplied, use the internal state
	const [_selectedItems, _setSelectedItems] = useState<Option[]>([]);
	const selectedItems = typeof value === 'undefined' ? _selectedItems : value;

	const setSelectedItems = useCallback(
		(items: Option[]) => {
			_setSelectedItems(items);
			onChange?.(items);
		},
		[onChange]
	);

	const multiSelection = useMultipleSelection({
		selectedItems,
		onStateChange({ selectedItems: newSelectedItems, type }) {
			switch (type) {
				case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
				case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
				case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
				case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
					setSelectedItems(newSelectedItems ?? []);
					break;
				default:
					break;
			}
		},
	});

	const {
		loading,
		networkError,
		inputItems,
		onInputValueChange,
		onIsOpenChange,
		dispatch,
	} = useLoadOptions<Option>(loadOptionsProp);

	const items = useMemo(
		() => filterOptions(inputItems ?? [], inputValue, selectedItems),
		[inputItems, inputValue, selectedItems]
	);

	const combobox = useCombobox({
		inputId,
		items,
		itemToString: (item) => item?.label ?? '',
		selectedItem: null,
		defaultHighlightedIndex: 0, // after selection, highlight the first item.
		stateReducer(state, actionAndChanges) {
			const { changes, type } = actionAndChanges;
			switch (type) {
				case useCombobox.stateChangeTypes.FunctionReset:
					dispatch({ type: 'RESET_ITEMS' });
					return changes;
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					return {
						...changes,
						inputValue: '', // clear the input after selection
						isOpen: true, // keep the menu open after selection. highlightedIndex: 0, // with the first option highlighted.
					};
				case useCombobox.stateChangeTypes.InputBlur:
					return { inputValue: '' };
					// case useCombobox.stateChangeTypes.InputChange:
					// 	if (changes.inputValue === '') {
					// 		dispatch({ type: 'RESET_ITEMS' });
					// 	}
					return changes;
				default:
					return changes;
			}
		},
		onInputValueChange: (options) => {
			setInputValue(options.inputValue ?? '');
			onInputValueChange(options);
		},
		onIsOpenChange,
		onStateChange({ type, selectedItem: newSelectedItem }) {
			switch (type) {
				case useCombobox.stateChangeTypes.FunctionSelectItem:
				case useCombobox.stateChangeTypes.ItemClick:
				case useCombobox.stateChangeTypes.InputBlur:
					if (newSelectedItem)
						setSelectedItems([...selectedItems, newSelectedItem]);
					break;
				default:
					break;
			}
		},
	});

	return (
		<ComboboxMultiBase
			combobox={combobox}
			multiSelection={multiSelection}
			inputId={inputId}
			inputItems={items}
			loading={loading}
			networkError={networkError}
			selectedItems={selectedItems}
			setSelectedItems={setSelectedItems}
			clearable
			{...props}
		/>
	);
}
