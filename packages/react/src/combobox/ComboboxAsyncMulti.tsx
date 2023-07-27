import {
	ReactNode,
	Ref,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { FieldMaxWidth } from '../core';
import { useDebounceValue } from './useDebounceValue';
import { ComboboxMultiBase } from './ComboboxBase';
import {
	DefaultComboboxOption,
	useComboboxInputId,
	filterOptions,
} from './utils';

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
	const [inputValue, setInputValue] = useState('');

	const [state, setState] = useState<{
		inputItems: Option[] | undefined;
		loading: boolean;
		networkError: boolean;
	}>({
		inputItems: undefined,
		loading: false,
		networkError: false,
	});

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

	const items = useMemo(
		() => filterOptions(state.inputItems ?? [], inputValue, selectedItems),
		[state.inputItems, inputValue, selectedItems]
	);

	const combobox = useCombobox({
		inputValue,
		inputId,
		items,
		itemToString: (item) => item?.label ?? '',
		selectedItem: null, // TODO
		defaultHighlightedIndex: 0, // after selection, highlight the first item.
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

	// Keep track of the debounced input value to prevent unnecessary network requests
	const debouncedInputValue = useDebounceValue(combobox.inputValue, 300);

	const shouldLoadOptions = useMemo(() => {
		// Do load options when...
		if (
			// User has just started typing, so this avoids the flicker of the empty state
			(!debouncedInputValue && combobox.inputValue) ||
			// User has manually triggered the dropdown menu open
			(combobox.isOpen && !combobox.selectedItem)
		) {
			return true;
		}
		// Do NOT load options when...
		const selectedItemLabel = combobox.selectedItem?.label;
		if (
			// Options are already being loaded
			state.loading ||
			// Options have failed to load
			state.networkError ||
			// Dropdown is closed
			!combobox.isOpen ||
			// If a selection has just been made, no not need to load options again
			(selectedItemLabel && selectedItemLabel === debouncedInputValue)
		) {
			return false;
		}
		return true;
	}, [
		debouncedInputValue,
		combobox.inputValue,
		combobox.isOpen,
		combobox.selectedItem,
		state.loading,
		state.networkError,
	]);

	// Keep track of search terms/loaded options to prevent unnecessary network requests
	const cache = useRef<Record<string, Option[]>>({});

	useEffect(() => {
		async function loadOptions(shouldLoadOptions: boolean) {
			if (!shouldLoadOptions) return;
			// sanitize the input value
			const inputValue = debouncedInputValue?.toLowerCase() ?? '';

			// If there are cached options for the search term, use that
			const cachedInputItems = cache.current[inputValue];
			if (cachedInputItems) {
				setState({
					inputItems: cachedInputItems,
					loading: false,
					networkError: false,
				});
				return;
			}

			// No cached options found, so kick off the loading state
			setState({ inputItems: undefined, loading: true, networkError: false });
			try {
				// Load the options
				const inputItems = await loadOptionsProp(inputValue);
				// Update the cache
				cache.current[inputValue] = inputItems;
				// Update the UI
				setState({
					inputItems: inputItems,
					loading: false,
					networkError: false,
				});
			} catch {
				// An error occurred while loading options
				setState({ inputItems: undefined, loading: false, networkError: true });
			}
		}

		loadOptions(shouldLoadOptions);
	}, [shouldLoadOptions, debouncedInputValue, loadOptionsProp]);

	return (
		<ComboboxMultiBase
			combobox={combobox}
			multiSelection={multiSelection}
			inputId={inputId}
			inputItems={items}
			loading={state.loading}
			networkError={state.networkError}
			selectedItems={selectedItems}
			setSelectedItems={setSelectedItems}
			clearable
			{...props}
		/>
	);
}
