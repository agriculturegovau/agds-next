import { useEffect, useRef, useState } from 'react';
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
	...props
}: ComboboxAsyncProps<Option>) {
	const inputId = useComboboxInputId(props.id);
	const [loading, setLoading] = useState(false);
	const [networkError, setNetworkError] = useState(false);
	const [inputItems, setInputItems] = useState<Option[]>();

	const isInputDirty = useRef(false);

	const downshift = useCombobox<Option>({
		selectedItem: props.value,
		inputId,
		items: inputItems ?? [],
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem = null }) => {
			props.onChange?.(selectedItem);
		},
		onInputValueChange: ({ inputValue }) => {
			inputValue = inputValue?.toLowerCase() ?? '';
			isInputDirty.current = true;
			if (inputItems) {
				setInputItems(filterOptions(inputItems, inputValue));
			}
		},
		// When the menu is opened by the user, show the entire options list
		// This is common in other Combobox implementations (react-aria, react-select, etc)
		onIsOpenChange: ({ isOpen }) => {
			if (inputItems && isOpen && props.showDropdownTrigger) {
				setInputItems(filterOptions(inputItems, ''));
			}
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

	const [debouncedInput] = useDebounce(downshift.inputValue, 300);

	const selectedItemLabel = downshift.selectedItem?.label;
	const shouldLoadOptions = useRef<boolean>();
	shouldLoadOptions.current = Boolean(
		// When there is no dropdown trigger (Autocomplete), load the options when the user has interacted with the input
		(props.showDropdownTrigger ? false : isInputDirty.current) &&
			// Options are not already being loaded
			!loading &&
			// If a selection has just been made, no not need to load options again
			!(selectedItemLabel && selectedItemLabel === debouncedInput)
	);

	const cache = useRef<Record<string, Option[]>>({});

	useEffect(() => {
		async function loadOptions() {
			if (!shouldLoadOptions.current) return;
			const inputValue = debouncedInput?.toLowerCase() ?? '';

			// If there are already options for the search term, use the cached version
			if (cache.current[inputValue]) {
				setInputItems(cache.current[inputValue]);
				return;
			}

			setLoading(true);
			setNetworkError(false);
			try {
				const inputItems = await loadOptionsProp(inputValue);
				const filteredInputItems = filterOptions(inputItems, inputValue);
				setInputItems(filteredInputItems);
				cache.current[inputValue] = filteredInputItems;
			} catch {
				setInputItems(undefined);
				setNetworkError(true);
			} finally {
				setLoading(false);
			}
		}

		loadOptions();
	}, [shouldLoadOptions, debouncedInput, loadOptionsProp]);

	return (
		<ComboboxBase
			downshift={downshift}
			inputId={inputId}
			loading={loading}
			networkError={networkError}
			inputItems={inputItems}
			{...props}
		/>
	);
}
