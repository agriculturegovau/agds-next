// @ts-nocheck
import {
	FocusEventHandler,
	ReactNode,
	Ref,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useCombobox } from 'downshift';
import { ComboboxBase } from './ComboboxBase';
import {
	filterOptions,
	type ComboboxMaxWidthValues,
	type DefaultComboboxOption,
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
	maxWidth?: ComboboxMaxWidthValues;
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
	/** Used to override the default item rendering. inputValue is now unused. */
	renderItem?: (item: Option, inputValue?: string) => ReactNode;
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

	const getInputProps = useCallback(combobox.getInputProps, [
		combobox.getInputProps,
	]);
	const getItemProps = useCallback(combobox.getItemProps, [
		combobox.getItemProps,
	]);
	const getLabelProps = useCallback(combobox.getLabelProps, [
		combobox.getLabelProps,
	]);
	const getMenuProps = useCallback(combobox.getMenuProps, [
		combobox.getMenuProps,
	]);
	const getToggleButtonProps = useCallback(combobox.getToggleButtonProps, [
		combobox.getToggleButtonProps,
	]);
	const reset = useCallback(combobox.reset, [combobox.reset]);
	const highlightedIndex = useMemo(
		() => combobox.highlightedIndex,
		[combobox.highlightedIndex]
	);
	const inputItemsCached = useMemo(() => inputItems, [inputItems]);
	const inputValue = useMemo(() => combobox.inputValue, [combobox.inputValue]);
	const isOpen = useMemo(() => combobox.isOpen, [combobox.isOpen]);
	const selectedItem = useMemo(
		() => combobox.selectedItem,
		[combobox.selectedItem]
	);

	// console.log(`combobox`, combobox);
	// console.log(`combobox.highlightedIndex`, combobox.highlightedIndex);

	// console.log(
	// 	`*****0 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[0],
	// 		index: 0,
	// 	})
	// );
	// console.log(
	// 	`*****1 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[1],
	// 		index: 1,
	// 	})
	// );
	// console.log(
	// 	`*****2 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[2],
	// 		index: 2,
	// 	})
	// );
	// console.log(
	// 	`*****3 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[3],
	// 		index: 3,
	// 	})
	// );
	// console.log(
	// 	`*****4 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[4],
	// 		index: 4,
	// 	})
	// );
	// console.log(
	// 	`0 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[0],
	// 		index: 0,
	// 	})?.onMouseMove.toString()
	// );
	// console.log(
	// 	`1 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[1],
	// 		index: 1,
	// 	})?.onMouseMove.toString()
	// );
	// console.log(
	// 	`2 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[2],
	// 		index: 2,
	// 	})?.onMouseMove.toString()
	// );
	// console.log(
	// 	`3 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[3],
	// 		index: 3,
	// 	})?.onMouseMove.toString()
	// );
	// console.log(
	// 	`4 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[4],
	// 		index: 4,
	// 	})?.onMouseMove.toString()
	// );
	// console.log(
	// 	`5 getItemProps()`,
	// 	getItemProps({
	// 		item: inputItemsCached[5],
	// 		index: 5,
	// 	})?.onMouseMove.toString()
	// );

	return (
		<ComboboxBase
			// combobox={combobox}
			getInputProps={getInputProps}
			getItemProps={getItemProps}
			getLabelProps={getLabelProps}
			getMenuProps={getMenuProps}
			getToggleButtonProps={getToggleButtonProps}
			reset={reset}
			highlightedIndex={highlightedIndex}
			inputValue={inputValue}
			isOpen={isOpen}
			selectedItem={selectedItem}
			inputItems={inputItemsCached}
			inputId={inputId}
			inputRef={inputRefProp}
			isAutocomplete={false}
			{...props}
		/>
	);
}
