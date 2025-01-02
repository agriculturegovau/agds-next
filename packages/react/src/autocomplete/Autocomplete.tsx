import {
	ComboboxAsync,
	ComboboxAsyncProps,
	DefaultComboboxOption,
} from '../combobox';

export type AutocompleteProps<Option extends DefaultComboboxOption> = Omit<
	ComboboxAsyncProps<Option>,
	'showDropdownTrigger' | 'clearable'
>;

export function Autocomplete<Option extends DefaultComboboxOption>({
	emptyResultsMessage = 'No results found',
	...props
}: AutocompleteProps<Option>) {
	return (
		<ComboboxAsync
			{...props}
			clearable
			emptyResultsMessage={emptyResultsMessage}
			showDropdownTrigger={false}
		/>
	);
}
