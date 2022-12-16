import { ReactNode } from 'react';
import { FieldMaxWidth } from '@ag.ds-next/core';
import { ComboboxSync } from './ComboboxSync';
import { ComboboxAsync } from './ComboboxAsync';
import { DefaultComboboxOption } from './utils';

export type ComboboxProps<Option extends DefaultComboboxOption> = {
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
	disabled?: boolean;
	id?: string;
	name?: string;
	/** If true, the dropdown trigger will be rendered. */
	showDropdownTrigger?: boolean;
	/** If true, the selected item can be cleared. Only available when `showDropdownTrigger` is false. */
	clearable?: boolean;
	/** The list of options to show in the dropdown. */
	options?: Option[];
	/** Function to be used when options need to be loaded over the network. */
	loadOptions?: (inputValue: string) => Promise<Option[]>;
	/** The value of the field. */
	value?: Option | null;
	/** Function to be fired following a change event. */
	onChange?: (value: Option | null) => void;
	/** Used to override the default item rendering.  */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
};

/**
 * Internally, we have split up our logic for Combobox into 2 different components: `ComboboxSync` and `ComboboxAsync`
 * The reason for this is that the async version is much more complicated than the sync version, so we want to keep that complexity separate.
 */

export function Combobox<Option extends DefaultComboboxOption>({
	options,
	loadOptions,
	...props
}: ComboboxProps<Option>) {
	if (loadOptions) {
		return <ComboboxAsync loadOptions={loadOptions} {...props} />;
	}

	if (options) {
		return <ComboboxSync options={options} {...props} />;
	}

	return null;
}
