import { Fragment, useState, ReactNode } from 'react';
import { useId } from '@reach/auto-id';
import { useCombobox } from 'downshift';
import { usePopper } from 'react-popper';
import { textInputStyles } from '@ag.ds-next/text-input';
import { Field } from '@ag.ds-next/field';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import { DefaultComboboxOption, defaultRenderItem } from './utils';
import { ComboboxDropdownTrigger } from './ComboboxDropdownTrigger';

type ComboBoxProps<Option extends DefaultComboboxOption> = {
	/** Describes the purpose of the field. */
	label: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid or valid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the valid state will be rendered. */
	valid?: boolean;
	// /** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	// /** The maximum width of the field. */
	// maxWidth?: FieldMax;
	disabled?: boolean;
	id?: string;
	name?: string;
	showDropdownTrigger?: boolean;
	options?: Option[];
	onChange?: (value: Option) => void;
	loadOptions?: (inputValue: string) => Promise<Option[]>;
	renderItem?: (item: Option, inputValue: string) => ReactNode;
};

export function Combobox<Option extends DefaultComboboxOption>({
	label,
	required,
	hint,
	message,
	invalid,
	valid,
	id: idProp,
	disabled,
	block,
	showDropdownTrigger = true,
	options = [],
	loadOptions,
	onChange,
	renderItem = defaultRenderItem,
}: ComboBoxProps<Option>) {
	const inputId = useComboboxInputId(idProp);
	const [loading, setLoading] = useState(false);
	const [inputItems, setInputItems] = useState<Option[]>(options);

	const {
		inputValue,
		isOpen,
		getToggleButtonProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox<Option>({
		inputId,
		items: inputItems,
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem }) => {
			if (onChange && selectedItem) onChange(selectedItem);
		},
		onInputValueChange: async ({ inputValue = '' }) => {
			inputValue = inputValue.toLowerCase();
			if (loadOptions) {
				// Asynchronous
				setLoading(true);
				const inputItems = await loadOptions(inputValue);
				setInputItems(inputItems);
				setLoading(false);
			} else {
				// Synchronous
				setInputItems(
					options.filter(
						({ value, label }) =>
							value.toLowerCase().includes(inputValue) ||
							label.toLowerCase().includes(inputValue)
					)
				);
			}
		},
		onIsOpenChange: async ({ isOpen, inputValue = '' }) => {
			if (!isOpen || inputValue) return;
			inputValue = inputValue.toLowerCase();
			if (loadOptions) {
				// Asynchronous
				setLoading(true);
				const inputItems = await loadOptions(inputValue);
				setInputItems(inputItems);
				setLoading(false);
			} else {
				// Synchronous
				setInputItems(
					options.filter(
						({ value, label }) =>
							value.toLowerCase().includes(inputValue) ||
							label.toLowerCase().includes(inputValue)
					)
				);
			}
		},
	});

	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const { maxWidth, ...inputStyles } = {
		...textInputStyles({
			block,
			maxWidth: 'xl',
			invalid,
			valid,
		}),
	};

	return (
		<div css={{ position: 'relative', maxWidth }} ref={setRefEl}>
			<Field
				label={label}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={inputId}
			>
				{(allyProps) => (
					<div css={{ position: 'relative' }} {...getComboboxProps()}>
						<input
							css={[inputStyles, { width: '100%' }]}
							disabled={disabled}
							{...allyProps}
							{...getInputProps()}
						/>
						{showDropdownTrigger && (
							<ComboboxDropdownTrigger
								disabled={disabled}
								{...getToggleButtonProps()}
							/>
						)}
					</div>
				)}
			</Field>
			<div
				ref={setPopperEl}
				style={styles.popper}
				{...attributes.popper}
				css={{ zIndex: 1, width: '100%' }}
			>
				<ComboboxList {...getMenuProps()} isOpen={isOpen}>
					{isOpen ? (
						<Fragment>
							{loading ? (
								<ComboboxListLoading />
							) : (
								<Fragment>
									{inputItems.length ? (
										inputItems.map((item, index) => {
											const isActiveItem = highlightedIndex === index;
											return (
												<ComboboxListItem
													key={`${item.value}${index}`}
													isActiveItem={isActiveItem}
													{...getItemProps({ item, index })}
												>
													{renderItem(item, inputValue)}
												</ComboboxListItem>
											);
										})
									) : (
										<ComboboxListEmptyResults />
									)}
								</Fragment>
							)}
						</Fragment>
					) : null}
				</ComboboxList>
			</div>
		</div>
	);
}

function useComboboxInputId(idProp?: string) {
	const autoId = useId();
	return idProp || `combobox-input-${autoId}`;
}
