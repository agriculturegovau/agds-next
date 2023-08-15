import { ReactNode, RefObject } from 'react';
import { useCombobox } from 'downshift';
import { FieldMaxWidth } from '../core';
import { ComboboxBase } from './ComboboxBase';
import { DefaultComboboxOption, useComboboxInputId } from './utils';
import { useAsync } from './useAsync';

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
	/** @deprecated This prop is no longer being used. When true, the dropdown will open when the user focuses on the element  */
	openDropdownOnFocus?: boolean;
	/** If true, the dropdown trigger will be rendered. */
	showDropdownTrigger?: boolean;
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
	inputRef: inputRefProp,
	...props
}: ComboboxAsyncProps<Option>) {
	const inputId = useComboboxInputId(id);

	const isAutocomplete = !showDropdownTrigger;

	const {
		loading,
		networkError,
		inputItems,
		onInputValueChange,
		onIsOpenChange,
	} = useAsync<Option>(loadOptionsProp);

	const combobox = useCombobox<Option>({
		selectedItem: value,
		inputId,
		items: inputItems,
		defaultHighlightedIndex: 0,
		itemToString: (item) => item?.label ?? '',
		onInputValueChange,
		onIsOpenChange,
		onSelectedItemChange: ({ selectedItem = null }) => {
			onChange?.(selectedItem);
		},
		stateReducer: (state, actionAndChanges) => {
			const { type: actionAndChangesType, changes } = actionAndChanges;
			const shouldOpen = (changes.inputValue?.length ?? 0) > 0;
			switch (actionAndChangesType) {
				case useCombobox.stateChangeTypes.InputBlur:
					return {
						...changes,
						inputValue: state.selectedItem?.label ?? '',
					};
				case useCombobox.stateChangeTypes.InputFocus:
					if (!isAutocomplete) return changes;
					return { ...changes, isOpen: false };

				case useCombobox.stateChangeTypes.InputChange:
					if (!isAutocomplete) return changes;
					return {
						...changes,
						isOpen: shouldOpen,
					};
				default:
					return changes;
			}
		},
	});

	return (
		<ComboboxBase
			combobox={combobox}
			inputId={inputId}
			loading={loading}
			networkError={networkError}
			inputItems={inputItems}
			showDropdownTrigger={showDropdownTrigger}
			clearable={clearable}
			inputRef={inputRefProp}
			{...props}
		/>
	);
}
