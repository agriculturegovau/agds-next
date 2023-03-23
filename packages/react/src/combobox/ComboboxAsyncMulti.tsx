import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { useDebounce } from 'use-debounce';
import {
	ComboboxMultiBase,
	CommonComboboxProps,
} from './ComboboxBase/ComboboxMultiBase';
import {
	DefaultComboboxOption,
	useComboboxInputId,
	filterOptions,
} from './utils';

export type ComboboxAsyncMultiProps<Option extends DefaultComboboxOption> =
	Omit<
		CommonComboboxProps<Option>,
		'showDropdownTrigger' | 'options' | 'clearable' | 'value' | 'onChange'
	> & {
		value: Option[] | null;
		onChange: (value: Option[] | null) => void;
		/** Function to be used when options need to be loaded over the network. */
		loadOptions: (inputValue: string) => Promise<Option[]>;
	};

export function ComboboxAsyncMulti<Option extends DefaultComboboxOption>({
	loadOptions: loadOptionsProp,
	...props
}: ComboboxAsyncMultiProps<Option>) {
	const inputId = useComboboxInputId(props.id);
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

	const [selectedItems, setSelectedItems] = useState<Option[]>([]);

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

	const downshift = useCombobox({
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
					console.log('ok', newSelectedItem);
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
	const [debouncedInputValue] = useDebounce(downshift.inputValue, 300);

	const shouldLoadOptions = useMemo(() => {
		// Do load options when...
		if (
			// User has just started typing, so this avoids the flicker of the empty state
			(!debouncedInputValue && downshift.inputValue) ||
			// User has manually triggered the dropdown menu open
			(downshift.isOpen && !downshift.selectedItem)
		) {
			return true;
		}
		// Do NOT load options when...
		const selectedItemLabel = downshift.selectedItem?.label;
		if (
			// Options are already being loaded
			state.loading ||
			// Options have failed to load
			state.networkError ||
			// Dropdown is closed
			!downshift.isOpen ||
			// If a selection has just been made, no not need to load options again
			(selectedItemLabel && selectedItemLabel === debouncedInputValue)
		) {
			return false;
		}
		return true;
	}, [
		debouncedInputValue,
		downshift.inputValue,
		downshift.isOpen,
		downshift.selectedItem,
		state.loading,
		state.networkError,
	]);

	// Keep track of search terms/loaded options to prevent unnecessary network requests
	const cache = useRef<Record<string, Option[]>>({});

	console.log({ selectedItems });

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

	const inputRef = useRef<HTMLInputElement>(null);

	const onClear = useCallback(() => {
		setSelectedItems([]);
		inputRef.current?.focus();
	}, []);

	return (
		<ComboboxMultiBase
			downshift={downshift}
			inputId={inputId}
			inputItems={items}
			loading={state.loading}
			networkError={state.networkError}
			multiSelection={multiSelection}
			selectedItems={selectedItems}
			onClear={onClear}
			inputRef={inputRef}
			{...props}
		/>
	);
}
