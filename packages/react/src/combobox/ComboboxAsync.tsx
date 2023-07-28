import {
	ReactNode,
	RefObject,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useCombobox } from 'downshift';
import { FieldMaxWidth } from '../core';
import { ComboboxBase } from './ComboboxBase';
import { useDebounceValue } from './useDebounceValue';
import {
	DefaultComboboxOption,
	filterOptions,
	useComboboxInputId,
} from './utils';

export type ComboboxAsyncProps<Option extends DefaultComboboxOption> = {
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
	value?: Option | null;
	/** Function to be fired following a change event. */
	onChange?: (value: Option | null) => void;
	/** Function to be used when options need to be loaded over the network. */
	loadOptions: (inputValue: string) => Promise<Option[]>;
	/** Used to override the default item rendering.  */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
	/** If true, the clear button will be rendered. */
	clearable?: boolean;
	/** If true, the dropdown trigger will be rendered. */
	showDropdownTrigger?: boolean;
	/** If true, the dropdown will open when the user focuses on the element  */
	openDropdownOnFocus?: boolean;
	/** Ref to the input element. */
	inputRef?: RefObject<HTMLInputElement>;
};

export function ComboboxAsync<Option extends DefaultComboboxOption>({
	id,
	value,
	onChange,
	loadOptions: loadOptionsProp,
	clearable = false,
	showDropdownTrigger = true,
	openDropdownOnFocus = true,
	inputRef: inputRefProp,
	...props
}: ComboboxAsyncProps<Option>) {
	const inputId = useComboboxInputId(id);

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

	const combobox = useCombobox<Option>({
		selectedItem: value,
		inputId,
		items: state.inputItems ?? [],
		defaultHighlightedIndex: 0,
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem = null }) => {
			onChange?.(selectedItem);
		},
		onInputValueChange: () => {
			isInputDirty.current = true;
		},
		stateReducer: (state, actionAndChanges) => {
			const { type: actionAndChangesType, changes } = actionAndChanges;
			switch (actionAndChangesType) {
				case useCombobox.stateChangeTypes.InputFocus:
					// In downshift v7 the dropdown is opened automatically when the user focuses
					// We want to disable this functionality in the `Autocomplete` component
					return { ...changes, isOpen: openDropdownOnFocus };
				// Reset the input value when the menu is closed
				case useCombobox.stateChangeTypes.InputBlur:
					return {
						...changes,
						inputValue: state.selectedItem?.label ?? '',
					};
				default:
					return changes;
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
			(showDropdownTrigger && combobox.isOpen && !combobox.selectedItem)
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
			(selectedItemLabel && selectedItemLabel === debouncedInputValue) ||
			// When there is no dropdown trigger (e.g. Autocomplete), only load the options if the user has interacted with the input
			(!showDropdownTrigger && !isInputDirty.current)
		) {
			return false;
		}
		return true;
	}, [
		debouncedInputValue,
		combobox.inputValue,
		combobox.isOpen,
		combobox.selectedItem,
		showDropdownTrigger,
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
	}, [shouldLoadOptions, debouncedInputValue, loadOptionsProp]);

	return (
		<ComboboxBase
			combobox={combobox}
			inputId={inputId}
			loading={state.loading}
			networkError={state.networkError}
			inputItems={state.inputItems}
			showDropdownTrigger={showDropdownTrigger}
			clearable={clearable}
			inputRef={inputRefProp}
			{...props}
		/>
	);
}
