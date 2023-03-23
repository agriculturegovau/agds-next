import { useCallback, useMemo, useRef, useState } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import {
	ComboboxMultiBase,
	CommonComboboxProps,
} from './ComboboxBase/ComboboxMultiBase';
import {
	DefaultComboboxOption,
	useComboboxInputId,
	filterOptions,
} from './utils';

export type ComboboxMultiProps<Option extends DefaultComboboxOption> = Omit<
	CommonComboboxProps<Option>,
	'showDropdownTrigger' | 'clearable' | 'value' | 'onChange'
> & {
	value: Option[] | null;
	onChange: (value: Option[] | null) => void;
	/** The list of options to show in the dropdown. */
	options: Option[];
};

export function ComboboxMulti<Option extends DefaultComboboxOption>(
	props: ComboboxMultiProps<Option>
) {
	const [inputValue, setInputValue] = useState('');
	const inputId = useComboboxInputId(props.id);

	const [selectedItems, setSelectedItems] = useState<Option[]>([]);

	const items = useMemo(
		() => filterOptions(props.options, inputValue, selectedItems),
		[props.options, inputValue, selectedItems]
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

	const downshift = useCombobox({
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

	const inputRef = useRef<HTMLInputElement>(null);

	const onClear = useCallback(() => {
		setSelectedItems([]);
		inputRef.current?.focus();
	}, []);

	return (
		<ComboboxMultiBase
			downshift={downshift}
			inputItems={items}
			inputId={inputId}
			multiSelection={multiSelection}
			selectedItems={selectedItems}
			onClear={onClear}
			inputRef={inputRef}
			{...props}
		/>
	);
}
