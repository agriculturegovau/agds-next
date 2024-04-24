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

export function TimePicker({
	id,
	inputRef: inputRefProp,
	interval = 15,
	max = '24:00',
	maxWidth = 'md',
	min = '00:00',
	onChange,
	timeFormat = 'h:mm aaa',
	value,
	...props
}: TimePickerProps) {
	const {
		// We remove this prop so that it can't be passed to ComboboxBase
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		renderItem,
		...consumerProps
	} = props;
	const inputId = useComboboxInputId(id);
	const [options, setOptions] = useState<DefaultComboboxOption[]>(
		generateOptions({ interval, max, min, timeFormat })
	);
	const [inputItems, setInputItems] =
		useState<DefaultComboboxOption[]>(options);

	useEffect(() => {
		setOptions(generateOptions({ interval, max, min, timeFormat }));
	}, [interval, max, min, timeFormat]);

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
			{...consumerProps}
		/>
	);
}

export type TimePickerProps = Omit<ComboboxProps, 'options' | 'renderItem'> & {
	/* A number of minutes between 1 & 60 to create options at appropriate intervals. */
	interval?: number;
	/* A boolean indicating whether to render the options' loading state. */
	loading?: boolean;
	/* The maximum time for options to end in HH:mm. */
	max?: string;
	/* The minimum time for options to start in HH:mm. */
	min?: string;
	/* The format to render the options. */
	timeFormat?: TimeFormat;
};
