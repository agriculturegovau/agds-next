import {
	FocusEventHandler,
	ReactNode,
	Ref,
	useCallback,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { ComboboxMultiBase } from './ComboboxBase';
import {
	filterOptions,
	type ComboboxMaxWidthValues,
	type DefaultComboboxOption,
	useComboboxInputId,
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
	/** If true, the field will stretch to the fill the width of its container and ignore maxWidth. */
	block?: boolean;
	/** The maximum width of the field. */
	maxWidth?: ComboboxMaxWidthValues;
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
	/** Function to be fired following a focus event. */
	onFocus?: FocusEventHandler<HTMLInputElement>;
	/** Function to be fired following a blur event. */
	onBlur?: FocusEventHandler<HTMLInputElement>;
	/** The list of options to show in the dropdown. */
	options: Option[];
	/** Used to override the default item rendering. inputValue is now unused. */
	renderItem?: (item: Option, inputValue?: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
	/** Ref to the input element. */
	inputRef?: Ref<HTMLInputElement>;
};

export function ComboboxMulti<Option extends DefaultComboboxOption>({
	block = true,
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

	const previousSelectedItemsRef = useRef<Option[]>([]);

	const multiSelection = useMultipleSelection({
		selectedItems,
		getA11yStatusMessage: (state) => {
			const { selectedItems } = state;

			// No changes made, nothing to announce
			if (selectedItems.length === previousSelectedItemsRef.current.length) {
				previousSelectedItemsRef.current = selectedItems;
				return '';
			}

			// An item was added
			if (selectedItems.length > previousSelectedItemsRef.current.length) {
				const addedItem = selectedItems.find(
					(selectedItem) =>
						previousSelectedItemsRef.current.findIndex(
							(item) => item.value === selectedItem.value
						) < 0
				);

				previousSelectedItemsRef.current = selectedItems;
				return `${addedItem?.label || 'An item'} has been added.`;
			}

			// All items were removed
			if (
				selectedItems.length === 0 &&
				previousSelectedItemsRef.current.length > 0
			) {
				previousSelectedItemsRef.current = selectedItems;
				return 'All items have been removed.';
			}

			// A single item was removed, which we'll announce
			const removedItem = previousSelectedItemsRef.current.find(
				(selectedItem) =>
					selectedItems.findIndex((item) => item.value === selectedItem.value) <
					0
			);
			previousSelectedItemsRef.current = selectedItems;
			return `${removedItem?.label || 'An item'} has been removed.`;
		},
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
		stateReducer(_state, actionAndChanges) {
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
					if (newSelectedItem) {
						setSelectedItems([...selectedItems, newSelectedItem]);
						setInputValue('');
					}
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
			block={block}
			combobox={combobox}
			inputId={inputId}
			inputItems={items}
			multiSelection={multiSelection}
			selectedItems={selectedItems}
			setSelectedItems={setSelectedItems}
			{...props}
		/>
	);
}
