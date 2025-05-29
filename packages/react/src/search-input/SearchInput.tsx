import {
	forwardRef,
	type InputHTMLAttributes,
	type KeyboardEvent,
	useRef,
	useState,
} from 'react';
import { Field } from '../field';
import { mergeRefs, type FieldMaxWidth } from '../core';
import { textInputStyles } from '../text-input';
import { SearchInputContainer } from './SearchInputContainer';
import { SearchInputClearButton } from './SearchInputClearButton';
import { SearchInputIcon } from './SearchInputIcon';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseSearchInputProps = {
	autoFocus?: NativeInputProps['autoFocus'];
	defaultValue?: NativeInputProps['defaultValue'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
	onChange?: (value: string) => void;
	value?: NativeInputProps['value'];
};

export type SearchInputMaxWidth = Extract<FieldMaxWidth, 'md' | 'lg' | 'xl'>;

export type SearchInputProps = BaseSearchInputProps & {
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Describes the purpose of the field. */
	label: string;
	/** The maximum width of the field. */
	maxWidth?: SearchInputMaxWidth;
	/** Message to show when the field is invalid. */
	message?: string;
	/** Function to be called when the input is cleared. */
	onClear?: () => void;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	function SearchInput(
		{
			block,
			defaultValue,
			disabled,
			hideOptionalLabel,
			hint,
			id,
			invalid,
			label,
			maxWidth: maxWidthProp = 'md',
			message,
			onChange: onChangeProp,
			onClear,
			required,
			value: valueProp,
			...props
		},
		forwardedRef
	) {
		const internalRef = useRef<HTMLInputElement>(null);
		const [internalValue, setInternalValue] = useState(
			valueProp || defaultValue || ''
		);

		const value = typeof valueProp === 'string' ? valueProp : internalValue;

		const onChange = (value: string) => {
			onChangeProp?.(value);
			setInternalValue(value);
		};

		// Clears the input while also triggering the `onChange` event to consumers
		const clearInput = () => {
			if (!value) return;
			onChange('');
			onClear?.();
			internalRef.current?.focus();
		};

		// Clear the input if the user presses the escape key
		const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
			if (e.code !== 'Escape') return;
			clearInput();
		};

		const showClearButton = Boolean(value);

		const [maxWidth, styles] = searchInputStyles({
			block,
			maxWidth: maxWidthProp,
			showClearButton,
		});

		return (
			<Field
				hideOptionalLabel={hideOptionalLabel}
				hint={hint}
				id={id}
				invalid={invalid}
				label={label}
				maxWidth={maxWidthProp}
				message={message}
				required={required}
			>
				{(a11yProps) => (
					<SearchInputContainer maxWidth={maxWidth}>
						<SearchInputIcon disabled={disabled} />
						<input
							autoComplete="off"
							css={styles}
							disabled={disabled}
							onChange={(e) => onChange(e.target.value)}
							onKeyDown={onKeyDown}
							ref={mergeRefs([internalRef, forwardedRef])}
							type="search"
							value={value}
							{...a11yProps}
							{...props}
						/>
						{showClearButton ? (
							<SearchInputClearButton
								disabled={disabled}
								onClick={clearInput}
							/>
						) : null}
					</SearchInputContainer>
				)}
			</Field>
		);
	}
);

function searchInputStyles({
	block,
	maxWidth: maxWidthProp,
	showClearButton,
}: {
	block?: boolean;
	maxWidth: NonNullable<SearchInputMaxWidth>;
	showClearButton: boolean;
}) {
	const { maxWidth, ...baseStyles } = textInputStyles({
		block,
		maxWidth: maxWidthProp,
	});
	return [
		maxWidth,
		{
			...baseStyles,
			width: '100%',
			maxWidth: undefined,

			paddingLeft: '3rem',
			...(showClearButton && { paddingRight: '3rem' }),

			'&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
				{ display: 'none' },
		},
	] as const;
}
