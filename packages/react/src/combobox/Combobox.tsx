import { useState } from 'react';
import { useCombobox } from 'downshift';
<<<<<<< HEAD:packages/combobox/src/Combobox.tsx
import { ComboboxBase, CommonComboboxProps } from './ComboboxBase/ComboboxBase';
=======
import { usePopper } from 'react-popper';
import { FieldMaxWidth, mapSpacing, useId } from '../core';
import { textInputStyles } from '../text-input';
import { Field } from '../field';
import { Text } from '../text';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
>>>>>>> d50511948 (create pkg):packages/react/src/combobox/Combobox.tsx
import {
	DefaultComboboxOption,
	filterOptions,
	useComboboxInputId,
} from './utils';

export type ComboboxProps<Option extends DefaultComboboxOption> = Omit<
	CommonComboboxProps<Option>,
	'showDropdownTrigger' | 'clearable'
> & {
	/** The list of options to show in the dropdown. */
	options: Option[];
};

export function Combobox<Option extends DefaultComboboxOption>(
	props: ComboboxProps<Option>
) {
	const inputId = useComboboxInputId(props.id);
	const [inputItems, setInputItems] = useState<Option[]>(props.options);

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
			setInputItems(filterOptions(props.options, inputValue));
		},
		// When the menu is opened by the user, show the entire options list
		// This is common in other Combobox implementations (react-aria, react-select, etc)
		onIsOpenChange: ({ isOpen }) => {
			if (isOpen) setInputItems(filterOptions(props.options, ''));
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

	return (
		<ComboboxBase
			downshift={downshift}
			inputItems={inputItems}
			inputId={inputId}
			{...props}
		/>
	);
}
