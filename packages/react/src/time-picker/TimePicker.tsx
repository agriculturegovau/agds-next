'use client';
import { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { type ComboboxProps } from '../combobox/Combobox';
import { ComboboxBase } from '../combobox/ComboboxBase/ComboboxBase';
import { useComboboxInputId } from '../combobox/utils';
import { type TimeFormat } from '../time-input/utils';
import { filterOptions, generateOptions } from './utils';

export function TimePicker({
	id,
	inputRef: inputRefProp,
	interval = 15,
	loading = false,
	max = '24:00',
	maxWidth = 'md',
	min = '00:00',
	onChange,
	timeFormat = 'h:mm aaa',
	value,
	...props
}: TimePickerProps) {
	const inputId = useComboboxInputId(id);
	const [options, setOptions] = useState(
		generateOptions({ interval, max, min, timeFormat })
	);
	const [inputItems, setInputItems] = useState(options);

	useEffect(() => {
		setOptions(generateOptions({ interval, max, min, timeFormat }));
	}, [interval, max, min, timeFormat]);

	const combobox = useCombobox({
		inputId,
		items: inputItems,
		itemToString: (item) => item?.label ?? '',
		selectedItem: value,
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
			inputId={inputId}
			inputItems={inputItems}
			inputRef={inputRefProp}
			isAutocomplete={false}
			loading={loading}
			maxWidth={maxWidth}
			{...props}
			renderItem={undefined}
		/>
	);
}

export type TimePickerProps = Omit<ComboboxProps, 'options' | 'renderItem'> & {
	/** A number of minutes between 1 & 180 to create options at appropriate intervals. */
	interval?: number;
	/** A boolean indicating whether to render the option's loading state. */
	loading?: boolean;
	/** The maximum time for options to end (HH:mm). */
	max?: string;
	/** The minimum time for options to start (HH:mm). */
	min?: string;
	/** Options are automatically generated with interval, max and min. */
	options?: never;
	/** Item rendering is handled internally by TimePicker. */
	renderItem?: never;
	/** The format to render the options' labels. */
	timeFormat?: TimeFormat;
};
