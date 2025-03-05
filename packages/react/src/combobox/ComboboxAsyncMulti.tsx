import {
	FocusEventHandler,
	ReactNode,
	Ref,
	useCallback,
	useMemo,
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
import { useAsync } from './useAsync';

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
	/** Function to be used when options need to be loaded over the network. */
	loadOptions: (inputValue: string) => Promise<Option[]>;
	/** Used to override the default item rendering. inputValue is now unused. */
	renderItem?: (item: Option, inputValue?: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
	/** Ref to the input element. */
	inputRef?: Ref<HTMLInputElement>;
};

export function ComboboxAsyncMulti<Option extends DefaultComboboxOption>({
	block = true,
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
	} = useAsync<Option>(loadOptionsProp);

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
		stateReducer(_state, actionAndChanges) {
			const { changes, type } = actionAndChanges;
			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					return {
						...changes,
						inputValue: '', // clear the input after selection
						isOpen: true, // keep the menu open after selection. highlightedIndex: 0, // with the first option highlighted.
					};
				case useCombobox.stateChangeTypes.InputBlur:
					return { inputValue: '' };
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
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
				case useCombobox.stateChangeTypes.InputBlur:
					if (newSelectedItem) {
						setSelectedItems([...selectedItems, newSelectedItem]);
						setInputValue('');
					}
					break;
				default:
					break;
			}
		},
	});

	return (
		<ComboboxMultiBase
			block={block}
			clearable
			combobox={combobox}
			inputId={inputId}
			inputItems={items}
			loading={loading}
			multiSelection={multiSelection}
			networkError={networkError}
			selectedItems={selectedItems}
			setSelectedItems={setSelectedItems}
			{...props}
		/>
	);
}
