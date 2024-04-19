import { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { type ComboboxProps } from '../combobox/Combobox';
import { ComboboxBase } from '../combobox/ComboboxBase/ComboboxBase';
import {
	type DefaultComboboxOption,
	useComboboxInputId,
} from '../combobox/utils';
import { type TimeFormat } from '../time-input/utils';
import { filterOptions, generateOptions } from './utils';

export type TimeSelectProps = Omit<ComboboxProps, 'options'> & {
	loading?: boolean;
	max?: string;
	min?: string;
	step?: number;
	timeFormat: TimeFormat;
};

export function TimeSelect({
	id,
	inputRef: inputRefProp,
	max = '24:00',
	maxWidth = 'md',
	min = '00:00',
	onChange,
	step = 15,
	timeFormat = 'h:mm aaa',
	value,
	...props
}: TimeSelectProps) {
	const inputId = useComboboxInputId(id);
	const [options, setOptions] = useState<DefaultComboboxOption[]>(
		generateOptions({ min, max, step, timeFormat })
	);
	const [inputItems, setInputItems] =
		useState<DefaultComboboxOption[]>(options);

	useEffect(() => {
		setOptions(generateOptions({ min, max, step, timeFormat }));
	}, [min, max, step, timeFormat]);

	const combobox = useCombobox<DefaultComboboxOption>({
		items: inputItems,
		selectedItem: value,
		inputId,
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem = null }) => {
			onChange?.(selectedItem);
		},
		onInputValueChange: ({ inputValue, isOpen }) => {
			inputValue = inputValue?.toLowerCase() ?? '';
			if (isOpen) {
				setInputItems(filterOptions(options, inputValue));
			} else {
				// When the menu is closed by the user, reset the entire options
				// This is common in other Combobox implementations (react-aria, react-select, etc)
				setInputItems(options);
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
			maxWidth={maxWidth}
			{...props}
		/>
	);
}
