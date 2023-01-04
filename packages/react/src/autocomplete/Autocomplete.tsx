import {
	ComboboxAsync,
	ComboboxAsyncProps,
	DefaultComboboxOption,
} from '../combobox';

export type AutocompleteProps<Option extends DefaultComboboxOption> = Omit<
	ComboboxAsyncProps<Option>,
	'showDropdownTrigger' | 'clearable' | 'emptyResultsMessage'
>;

export function Autocomplete<Option extends DefaultComboboxOption>(
	props: AutocompleteProps<Option>
) {
	return (
		<ComboboxAsync
			{...props}
			showDropdownTrigger={false}
			clearable={true}
			emptyResultsMessage="No results found."
		/>
	);
}
