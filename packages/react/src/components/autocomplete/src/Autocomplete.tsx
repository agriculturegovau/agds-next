import {
	Combobox,
	ComboboxProps,
	DefaultComboboxOption,
} from '../../combobox/src';

export type AutocompleteProps<Option extends DefaultComboboxOption> = Omit<
	ComboboxProps<Option>,
	'showDropdownTrigger' | 'clearable' | 'options' | 'emptyResultsMessage'
>;

export function Autocomplete<Option extends DefaultComboboxOption>(
	props: AutocompleteProps<Option>
) {
	return (
		<Combobox
			{...props}
			showDropdownTrigger={false}
			clearable={true}
			emptyResultsMessage="No results found."
		/>
	);
}
