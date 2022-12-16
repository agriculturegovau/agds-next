import { useEffect, useMemo, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useCombobox } from 'downshift';
import {
	DefaultComboboxOption,
	filterOptions,
	useComboboxInputId,
} from './utils';
import { ComboboxBase } from './ComboboxBase';
import { ComboboxProps } from './Combobox';

export type ComboboxAsyncProps<Option extends DefaultComboboxOption> =
	ComboboxProps<Option> & {
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
		onInputValueChange: ({ inputValue }) => {
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

	const [debouncedInput] = useDebounce(downshift.inputValue, 300);

	const shouldLoadOptions = useMemo(() => {
		const selectedItemLabel = downshift.selectedItem?.label;
		// user has manually opened the menu
		if (showDropdownTrigger && downshift.isOpen && !downshift.selectedItem) {
			return true;
		}
		// options are already being loaded
		if (state.loading) return false;
		// options have failed to load
		if (state.networkError) return false;

		return true;

		// return Boolean(
		// 	// Options are not already being loaded
		// 	!state.loading &&
		// 		// Options have not failed
		// 		!state.networkError &&
		// 		// If a selection has just been made, no not need to load options again
		// 		!(selectedItemLabel && selectedItemLabel === debouncedInput) &&
		// 		// When there is no dropdown trigger (Autocomplete), only load the options when the user has interacted with the input
		// 		(showDropdownTrigger ? downshift.isOpen : isInputDirty.current)
		// );
	}, [
		debouncedInput,
		state.loading,
		state.networkError,
		downshift.isOpen,
		downshift.selectedItem?.label,
		showDropdownTrigger,
	]);

	const cache = useRef<Record<string, Option[]>>({});

	useEffect(() => {
		async function loadOptions() {
			if (!shouldLoadOptions) return;
			const inputValue = debouncedInput?.toLowerCase() ?? '';

			// If there are already options for the search term, use the cached version
			const cachedInputItems = cache.current[inputValue];
			if (cachedInputItems) {
				setState({
					inputItems: cachedInputItems,
					loading: false,
					networkError: false,
				});
				return;
			}

			// Start the loading state
			setState({ inputItems: undefined, loading: true, networkError: false });

			try {
				// Attempt to load the options, update the UI and the cache
				const inputItems = await loadOptionsProp(inputValue);
				const filteredInputItems = filterOptions(inputItems, inputValue);
				cache.current[inputValue] = filteredInputItems;
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

		loadOptions();
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
