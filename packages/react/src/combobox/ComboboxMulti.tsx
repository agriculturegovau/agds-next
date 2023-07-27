import { ReactNode, Ref, useCallback, useMemo, useState } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { FieldMaxWidth } from '../core';
import { ComboboxMultiBase } from './ComboboxBase';
import {
	DefaultComboboxOption,
	useComboboxInputId,
	filterOptions,
} from './utils';

export type ComboboxMultiProps<Option extends DefaultComboboxOption> = {
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
	/** The list of options to show in the dropdown. */
	options: Option[];
	/** Used to override the default item rendering.  */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
	/** Ref to the input element. */
	inputRef?: Ref<HTMLInputElement>;
};

export function ComboboxMulti<Option extends DefaultComboboxOption>({
	id,
	value,
	onChange,
	options,
	...props
}: ComboboxMultiProps<Option>) {
	const [inputValue, setInputValue] = useState('');
	const inputId = useComboboxInputId(id);

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

	const items = useMemo(
		() => filterOptions(options, inputValue, selectedItems),
		[options, inputValue, selectedItems]
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

	const combobox = useCombobox({
		inputValue,
		inputId,
		items: items ?? [],
		itemToString: (item) => item?.label ?? '',
		defaultHighlightedIndex: 0, // after selection, highlight the first item.
		selectedItem: null,
		stateReducer(state, actionAndChanges) {
			const { changes, type } = actionAndChanges;
			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					return {
						...changes,
						isOpen: true, // keep the menu open after selection.
						highlightedIndex: 0, // with the first option highlighted.
					};
				default:
					return changes;
			}
		},
		onStateChange({
			inputValue: newInputValue = '',
			type,
			selectedItem: newSelectedItem,
		}) {
			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
				case useCombobox.stateChangeTypes.InputBlur:
					if (newSelectedItem) {
						setSelectedItems([...selectedItems, newSelectedItem]);
					}
					setInputValue('');
					break;
				case useCombobox.stateChangeTypes.InputChange:
					setInputValue(newInputValue);
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
			inputItems={items}
			inputId={inputId}
			selectedItems={selectedItems}
			setSelectedItems={setSelectedItems}
			{...props}
		/>
	);
}
