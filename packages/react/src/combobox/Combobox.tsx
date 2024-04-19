import { FocusEventHandler, ReactNode, Ref, useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { FieldMaxWidth } from '../core';
import { ComboboxBase } from './ComboboxBase';
import {
	DefaultComboboxOption,
	filterOptions,
	useComboboxInputId,
} from './utils';

export type ComboboxProps<
	Option extends DefaultComboboxOption = DefaultComboboxOption,
> = {
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
	/** Function to be fired following a focus event. */
	onFocus?: FocusEventHandler<HTMLInputElement>;
	/** Function to be fired following a blur event. */
	onBlur?: FocusEventHandler<HTMLInputElement>;
	/** The list of options to show in the dropdown. */
	options: Option[];
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
	/** Ref to the input element. */
	inputRef?: Ref<HTMLInputElement>;
	/** Used to override the default item rendering. */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** If true, the clear button will be rendered when there is a selected option. */
	clearable?: boolean;
};

export function Combobox<Option extends DefaultComboboxOption>({
	id,
	value,
	onChange,
	options,
	inputRef: inputRefProp,
	...props
}: ComboboxProps<Option>) {
	const inputId = useComboboxInputId(id);
	const [inputItems, setInputItems] = useState<Option[]>(options);

	// The effect ensures the list of options change whenever the `options` prop changes
	useEffect(() => {
		setInputItems(options);
	}, [options]);

	const combobox = useCombobox<Option>({
		items: inputItems,
		selectedItem: value,
		inputId,
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem = null }) => {
			console.log(`selectedItem`, selectedItem);
			onChange?.(selectedItem);
		},
		onInputValueChange: ({ inputValue, isOpen }) => {
			inputValue = inputValue?.toLowerCase() ?? '';
			if (isOpen) {
				setInputItems(filterOptions(options, inputValue));
			} else {
				// When the menu is closed by the user, reset the entire options
				// This is common in other Combobox implementations (react-aria, react-select, etc)
				setInputItems(filterOptions(options, ''));
			}
		},
		stateReducer: (state, actionAndChanges) => {
			const { type: actionAndChangesType, changes } = actionAndChanges;
			switch (actionAndChangesType) {
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

	return (
		<ComboboxBase
			combobox={combobox}
			inputItems={inputItems}
			inputId={inputId}
			inputRef={inputRefProp}
			isAutocomplete={false}
			{...props}
		/>
	);
}
