<<<<<<< HEAD:packages/autocomplete/src/Autocomplete.tsx
import {
	ComboboxAsync,
	ComboboxAsyncProps,
	DefaultComboboxOption,
} from '@ag.ds-next/combobox';
=======
import { Combobox, ComboboxProps, DefaultComboboxOption } from '../combobox';
>>>>>>> d50511948 (create pkg):packages/react/src/autocomplete/Autocomplete.tsx

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
