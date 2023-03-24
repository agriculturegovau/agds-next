import {
	Fragment,
	ReactNode,
	RefObject,
	useCallback,
	useEffect,
	useState,
	MouseEvent,
	useRef,
} from 'react';
import {
	UseComboboxReturnValue,
	UseMultipleSelectionReturnValue,
} from 'downshift';
import { usePopper } from 'react-popper';
import {
	boxPalette,
	FieldMaxWidth,
	fontGrid,
	mapSpacing,
	mergeRefs,
	packs,
	tokens,
	useTernaryState,
} from '../../core';
import { Field } from '../../field';
import { Flex } from '../../box';
import { defaultRenderItem } from '../defaultRenderItem';
import { DefaultComboboxOption } from '../utils';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import {
	ComboboxDropdownTrigger,
	ComboboxClearButton,
	ComboboxButtonContainer,
} from './ComboboxButtons';
import { Tag } from './ComboboxTag';

type ComboboxMultiBaseProps<Option extends DefaultComboboxOption> = {
	// Field props
	label: string;
	hideOptionalLabel?: boolean;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	inputId: string;
	inputName?: string;
	disabled?: boolean;
	// Styles
	block?: boolean;
	maxWidth?: Extract<FieldMaxWidth, 'md' | 'lg' | 'xl'>;
	showDropdownTrigger?: boolean;
	clearable?: boolean;
	// Downshift
	combobox: UseComboboxReturnValue<Option>;
	multiSelection: UseMultipleSelectionReturnValue<Option>;
	selectedItems: Option[];
	onClear: () => void;
	inputRef: RefObject<HTMLInputElement>;
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue: string) => ReactNode;
};

export function ComboboxMultiBase<Option extends DefaultComboboxOption>({
	label,
	hideOptionalLabel,
	required,
	hint,
	message,
	invalid = false,
	inputId,
	disabled = false,
	block = true,
	maxWidth: maxWidthProp = 'xl',
	// clearable = false,
	renderItem = defaultRenderItem,
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	combobox,
	inputItems,
	selectedItems,
	multiSelection,
	onClear,
	inputRef,
}: ComboboxMultiBaseProps<Option>) {
	const [isInputFocused, setInputFocused, setInputBlurred] =
		useTernaryState(false);

	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLUListElement | null>(null);
	const {
		styles: popperStyles,
		attributes,
		update,
	} = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	// This component changes its height as the selected item change
	// So we need to update the popper element to recalculate its position
	useEffect(() => {
		update?.();
	}, [selectedItems, update]);

	const showClearButton = selectedItems?.length > 0;

	const styles = comboboxMultiStyles({
		block,
		disabled,
		invalid,
		isInputFocused,
		maxWidth: maxWidthProp,
		showClearButton,
	});

	const { ref: menuRef, ...menuProps } = combobox.getMenuProps({
		...attributes.popper,
		style: popperStyles.popper,
	});

	// Focus the input element if the user clicks inside the container
	// This should be prevented if a user clicks on any other element (e.g. a Tag)
	const fieldContainerRef = useRef<HTMLDivElement>(null);
	const handleFieldContainerClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target !== fieldContainerRef.current) return;
			inputRef.current?.focus();
		},
		[inputRef]
	);

	return (
		<Field
			label={label}
			hideOptionalLabel={hideOptionalLabel}
			required={Boolean(required)}
			hint={hint}
			message={message}
			invalid={invalid}
			id={inputId}
		>
			{(a11yProps) => (
				<div
					ref={setRefEl}
					css={styles.fieldContainer}
					onClick={handleFieldContainerClick}
				>
					<Flex
						ref={fieldContainerRef}
						gap={0.5}
						flexWrap="wrap"
						alignItems="center"
						css={styles.container}
					>
						{selectedItems.map((item, idx) => (
							<Tag
								key={`selected-item-${idx}`}
								onRemove={() => multiSelection.removeSelectedItem(item)}
								{...multiSelection.getSelectedItemProps({
									selectedItem: item,
									index: idx,
								})}
							>
								{item.label}
							</Tag>
						))}
						<div css={styles.inputContainer}>
							<input
								disabled={disabled}
								{...a11yProps}
								{...combobox.getInputProps(
									multiSelection.getDropdownProps({
										ref: inputRef,
										type: 'text',
										preventKeyAction: combobox.isOpen,
										onFocus: setInputFocused,
										onBlur: setInputBlurred,
									})
								)}
								css={styles.input}
							/>
						</div>
						<ComboboxButtonContainer>
							{showClearButton && (
								<ComboboxClearButton
									disabled={disabled}
									onClick={() => onClear()}
								/>
							)}
							<ComboboxDropdownTrigger
								disabled={disabled}
								{...combobox.getToggleButtonProps()}
							/>
						</ComboboxButtonContainer>
					</Flex>
					<ComboboxList
						{...menuProps}
						ref={mergeRefs([menuRef, setPopperEl])}
						maxWidth={maxWidthProp}
						isOpen={combobox.isOpen}
					>
						{combobox.isOpen && (
							<Fragment>
								{loading ? (
									<ComboboxListLoading />
								) : networkError ? (
									<ComboboxListError />
								) : (
									<Fragment>
										{inputItems?.length ? (
											inputItems.map((item, index) => (
												<ComboboxListItem
													key={`${item.value}-${index}`}
													isActiveItem={combobox.highlightedIndex === index}
													isInteractive={true}
													{...combobox.getItemProps({ item, index })}
												>
													{renderItem(item, combobox.inputValue)}
												</ComboboxListItem>
											))
										) : (
											<ComboboxListEmptyResults message={emptyResultsMessage} />
										)}
									</Fragment>
								)}
							</Fragment>
						)}
					</ComboboxList>
				</div>
			)}
		</Field>
	);
}

function comboboxMultiStyles({
	block,
	disabled,
	invalid,
	isInputFocused,
	maxWidth,
	showClearButton,
}: {
	block: boolean;
	disabled: boolean;
	invalid: boolean;
	isInputFocused: boolean;
	maxWidth: FieldMaxWidth;
	showClearButton: boolean;
}) {
	return {
		fieldContainer: {
			position: 'relative',
			...(!block && {
				maxWidth: tokens.maxWidth.field[maxWidth],
			}),
		},
		container: {
			position: 'relative',
			cursor: 'text',
			background: boxPalette.backgroundBody,
			borderWidth: tokens.borderWidth.lg,
			borderStyle: 'solid',
			borderColor: boxPalette.border,
			borderRadius: tokens.borderRadius,
			color: boxPalette.foregroundText,
			...packs.input.md,
			height: 'auto',
			minHeight: packs.input.md.height,
			margin: 0,
			paddingTop: mapSpacing(0.25),
			paddingBottom: mapSpacing(0.25),
			paddingLeft: mapSpacing(0.5),
			paddingRight: showClearButton ? '5rem' : '3rem',

			...(disabled && {
				cursor: 'not-allowed',
				borderColor: boxPalette.borderMuted,
				backgroundColor: boxPalette.backgroundShade,
				color: boxPalette.foregroundMuted,
			}),

			...(invalid && {
				backgroundColor: boxPalette.systemErrorMuted,
				borderColor: boxPalette.systemError,
			}),

			...(isInputFocused && packs.outline),
		},
		inputContainer: {
			display: 'flex',
			flex: '1 1 2rem',
		},
		input: {
			appearance: 'none',
			boxSizing: 'border-box',
			borderWidth: 0,
			width: '100%',
			background: boxPalette.backgroundBody,
			color: boxPalette.foregroundText,
			fontFamily: tokens.font.body,
			...fontGrid('sm', 'default'),

			...(invalid && {
				backgroundColor: boxPalette.systemErrorMuted,
				borderColor: boxPalette.systemError,
			}),

			'&:focus': {
				outline: 'none',
			},

			'&:disabled': {
				backgroundColor: boxPalette.backgroundShade,
			},
		},
	} as const;
}
