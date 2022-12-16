import { useState } from 'react';
import { useCombobox } from 'downshift';
import { ComboboxProps } from './Combobox';
import { ComboboxBase } from './ComboboxBase';
import {
	DefaultComboboxOption,
	filterOptions,
	useComboboxInputId,
} from './utils';

type ComboboxSyncProps<Option extends DefaultComboboxOption> =
	ComboboxProps<Option> & {
		options: Option[];
	};

export function ComboboxSync<Option extends DefaultComboboxOption>(
	props: ComboboxSyncProps<Option>
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
