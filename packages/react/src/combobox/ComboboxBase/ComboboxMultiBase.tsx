import {
	Fragment,
	type FocusEvent,
	type FocusEventHandler,
	type MouseEvent,
	type ReactNode,
	type Ref,
	useCallback,
	useRef,
	useMemo,
} from 'react';
import {
	UseComboboxReturnValue,
	UseMultipleSelectionReturnValue,
} from 'downshift';
import { Popover, usePopover } from '../../_popover';
import {
	boxPalette,
	fontGrid,
	mapSpacing,
	mergeRefs,
	packs,
	tokens,
	useTernaryState,
} from '../../core';
import { Field } from '../../field';
import { Flex } from '../../flex';
import {
	ComboboxRenderItemDefault,
	renderItemLabel,
} from '../ComboboxRenderItemDefault';
import {
	generateHighlightStyles,
	type ComboboxMaxWidthValues,
	type DefaultComboboxOption,
	useIsIos,
	validateMaxWidth,
} from '../utils';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import {
	ComboboxDropdownTrigger,
	ComboboxClearButton,
	ComboboxButtonContainer,
	ComboboxButtonDivider,
} from './ComboboxButtons';
import { listItemStyles } from './ComboboxListItem';
import { ComboboxTag } from './ComboboxTag';

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
	block: boolean;
	maxWidth?: ComboboxMaxWidthValues;
	showDropdownTrigger?: boolean;
	clearable?: boolean;
	// Downshift
	combobox: UseComboboxReturnValue<Option>;
	multiSelection: UseMultipleSelectionReturnValue<Option>;
	selectedItems: Option[];
	setSelectedItems: (value: Option[]) => void;
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue?: string) => ReactNode;
	// input props
	'aria-describedby'?: string;
	'aria-invalid'?: boolean;
	inputRef?: Ref<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
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
	block,
	maxWidth: maxWidthProp = 'xl',
	// clearable = false,
	renderItem,
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	combobox,
	inputItems,
	selectedItems,
	setSelectedItems,
	multiSelection,
	inputRef: inputRefProp,
	onBlur,
	onFocus,
	...props
}: ComboboxMultiBaseProps<Option>) {
	const inputRef = useRef<HTMLInputElement>(null);
	const isIos = useIsIos();

	validateMaxWidth('ComboboxMulti', maxWidthProp);

	const [isInputFocused, setInputFocused, setInputBlurred] =
		useTernaryState(false);

	const popover = usePopover({
		// Popovers should always match the width of the related input
		matchReferenceWidth: true,
		// Popovers have a max-height as the list of options can be very long
		maxHeight: 295,
		// Minimum acceptable height of the popover before it gets flipped
		minHeight: 195,
		// For a11y reasons, the popover element is hidden with CSS and not conditionally rendered
		hiddenWithCSS: true,
		isOpen: combobox.isOpen,
	});

	const showClearButton = selectedItems?.length > 0;

	const styles = comboboxMultiStyles({
		block,
		disabled,
		inputValue: combobox.inputValue,
		invalid: invalid || Boolean(props['aria-invalid']),
		isInputFocused,
		maxWidth: maxWidthProp,
		showClearButton,
	});

	const itemLabels = useMemo(
		() =>
			inputItems?.length
				? inputItems.map((item) => renderItemLabel(item.label))
				: [],
		[inputItems]
	);

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

	const onClear = useCallback(() => {
		setSelectedItems([]);
		inputRef.current?.focus();
	}, [setSelectedItems]);

	const inputRefs = inputRefProp
		? mergeRefs([inputRef, inputRefProp])
		: inputRef;

	const { id: labelId } = combobox.getLabelProps();

	const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
		// If a user presses the Done button on the iOS keyboard, we shouldn't close the dropdown
		if (isIos && !event.nativeEvent?.relatedTarget) {
			// @ts-expect-error: Property 'preventDownshiftDefault' does not exist on type 'FocusEvent'
			event.nativeEvent.preventDownshiftDefault = true;
		}
		onBlur?.(event);
		setInputBlurred();
	};

	return (
		<Field
			label={label}
			labelId={labelId}
			hideOptionalLabel={hideOptionalLabel}
			required={Boolean(required)}
			hint={hint}
			maxWidth={maxWidthProp}
			message={message}
			invalid={invalid}
			id={inputId}
		>
			{(a11yProps) => (
				<div
					{...popover.getReferenceProps()}
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
							<ComboboxTag
								key={`selected-item-${idx}`}
								onRemove={() => multiSelection.removeSelectedItem(item)}
								disabled={disabled}
								{...multiSelection.getSelectedItemProps({
									selectedItem: item,
									index: idx,
								})}
							>
								{item.label}
							</ComboboxTag>
						))}
						<div css={styles.inputContainer}>
							<input
								disabled={disabled}
								{...combobox.getInputProps(
									multiSelection.getDropdownProps({
										...a11yProps,
										...{
											'aria-describedby':
												props['aria-describedby'] ||
												a11yProps['aria-describedby'],
											'aria-invalid':
												props['aria-invalid'] || a11yProps['aria-invalid'],
										},
										ref: inputRefs,
										type: 'text',
										preventKeyAction: false,
										onFocus: (event: FocusEvent<HTMLInputElement>) => {
											onFocus?.(event);
											setInputFocused();
										},
										onBlur: handleOnBlur,
									})
								)}
								css={styles.input}
							/>
						</div>
						<ComboboxButtonContainer>
							{showClearButton && (
								<Fragment>
									<ComboboxClearButton disabled={disabled} onClick={onClear} />
									<ComboboxButtonDivider />
								</Fragment>
							)}
							<ComboboxDropdownTrigger
								{...combobox.getToggleButtonProps({
									isOpen: combobox.isOpen,
									disabled,
								})}
							/>
						</ComboboxButtonContainer>
					</Flex>
					<Popover
						as="ul"
						{...combobox.getMenuProps(popover.getPopoverProps())}
						visibility={combobox.isOpen ? 'visible' : 'hidden'}
					>
						{combobox.isOpen ? (
							<Fragment>
								{loading ? (
									<ComboboxListLoading />
								) : networkError ? (
									<ComboboxListError />
								) : (
									<Fragment>
										{inputItems?.length ? (
											inputItems.map((item, index) => (
												<li
													data-combobox-list-item="interactive"
													key={`${item.value}-${index}`}
													{...combobox.getItemProps({ item, index })}
													// Required for Android TalkBack to be able to access the list items
													// See https://issues.chromium.org/issues/40260928
													// But stops iOS from being able to access them ◔_◔
													tabIndex={isIos ? undefined : -1}
												>
													{renderItem ? (
														renderItem({
															...item,
															label: itemLabels[index],
														})
													) : (
														<ComboboxRenderItemDefault>
															{itemLabels[index]}
														</ComboboxRenderItemDefault>
													)}
												</li>
											))
										) : (
											<ComboboxListEmptyResults message={emptyResultsMessage} />
										)}
									</Fragment>
								)}
							</Fragment>
						) : null}
					</Popover>
				</div>
			)}
		</Field>
	);
}

function comboboxMultiStyles({
	block,
	disabled,
	inputValue,
	invalid,
	isInputFocused,
	maxWidth,
	showClearButton,
}: {
	block: boolean;
	disabled: boolean;
	inputValue?: string;
	invalid: boolean;
	isInputFocused: boolean;
	maxWidth: ComboboxMaxWidthValues;
	showClearButton: boolean;
}) {
	return {
		fieldContainer: {
			...listItemStyles,
			...generateHighlightStyles(inputValue),
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

			'&[aria-invalid="true"]': {
				backgroundColor: boxPalette.systemErrorMuted,
				borderColor: boxPalette.systemError,
			},

			'&:focus': {
				outline: 'none',
			},

			'&:disabled': {
				cursor: 'not-allowed',
				color: boxPalette.foregroundMuted,
				backgroundColor: boxPalette.backgroundShade,
			},
		},
	} as const;
}
