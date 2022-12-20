import { useEffect, useMemo, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useCombobox } from 'downshift';
import { ComboboxBase, CommonComboboxProps } from './ComboboxBase';
import {
	DefaultComboboxOption,
	filterOptions,
	useComboboxInputId,
} from './utils';

export type ComboboxAsyncProps<Option extends DefaultComboboxOption> =
	CommonComboboxProps<Option> & {
		/** Function to be used when options need to be loaded over the network. */
		loadOptions: (inputValue: string) => Promise<Option[]>;
	};

export function ComboboxAsync<Option extends DefaultComboboxOption>({
	loadOptions: loadOptionsProp,
	showDropdownTrigger = true,
	...props
}: ComboboxAsyncProps<Option>) {
	const inputId = useComboboxInputId(props.id);

	const [state, setState] = useState<{
		inputItems: Option[] | undefined;
		loading: boolean;
		networkError: boolean;
	}>({
		inputItems: undefined,
		loading: false,
		networkError: false,
	});

	const isInputDirty = useRef(false);

	const downshift = useCombobox<Option>({
		selectedItem: props.value,
		inputId,
		items: state.inputItems ?? [],
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem = null }) => {
			props.onChange?.(selectedItem);
		},
		onInputValueChange: () => {
			isInputDirty.current = true;
		},
		stateReducer: (state, actionAndChanges) => {
			const { type: actionAndChangesType, changes } = actionAndChanges;
			switch (actionAndChangesType) {
				// Reset the input value when the menu is closed
				case useCombobox.stateChangeTypes.InputBlur:
					return { inputValue: state.selectedItem ? state.inputValue : '' };
				default:
					return changes;
			}
		},
	});

	// Keep track of the debounced input value to prevent unnecessary network requests
	const [debouncedInput] = useDebounce(downshift.inputValue, 300);

	const shouldLoadOptions = useMemo(() => {
		// User has manually triggered the menu open and there is no value
		if (showDropdownTrigger && downshift.isOpen && !downshift.selectedItem) {
			return true;
		}
		const selectedItemLabel = downshift.selectedItem?.label;
		// DON'T load options when...
		if (
			// Options are already being loaded
			state.loading ||
			// options have failed to load
			state.networkError ||
			// If a selection has just been made, no not need to load options again
			(selectedItemLabel && selectedItemLabel === debouncedInput) ||
			// When there is no dropdown trigger (e.g. Autocomplete), only load the options if the user has interacted with the input
			(!showDropdownTrigger && !isInputDirty.current)
		) {
			return false;
		}

		return true;
	}, [
		debouncedInput,
		downshift.isOpen,
		downshift.selectedItem,
		showDropdownTrigger,
		state.loading,
		state.networkError,
	]);

	// Keep track of of loaded options and search terms to prevent unnecessary network requests
	const cache = useRef<Record<string, Option[]>>({});

	useEffect(() => {
		async function loadOptions(shouldLoadOptions: boolean) {
			if (!shouldLoadOptions) return;
			// sanitize the input value
			const inputValue = debouncedInput?.toLowerCase() ?? '';

			// If there are cached options for the search term, use that
			const cachedInputItems =
				inputValue in cache.current ? cache.current[inputValue] : null;
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
				const filteredInputItems = filterOptions(inputItems, inputValue);
				// Update the cache
				cache.current[inputValue] = filteredInputItems;
				// Update the UI
				setState({
					inputItems: filteredInputItems,
					loading: false,
					networkError: false,
				});
			} catch {
				// An error occurred while loading options
				setState({ inputItems: undefined, loading: false, networkError: true });
			}
		}

		loadOptions(shouldLoadOptions);
	}, [shouldLoadOptions, debouncedInput, loadOptionsProp]);

	return (
		<ComboboxBase
			downshift={downshift}
			inputId={inputId}
			loading={state.loading}
			networkError={state.networkError}
			inputItems={state.inputItems}
			showDropdownTrigger={showDropdownTrigger}
			{...props}
		/>
	);
}
