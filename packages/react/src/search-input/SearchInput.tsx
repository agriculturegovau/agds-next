import {
	forwardRef,
	InputHTMLAttributes,
	KeyboardEvent,
	useRef,
	useState,
} from 'react';
import { Field } from '../field';
import { FieldMaxWidth, mergeRefs } from '../core';
import { textInputStyles } from '../text-input';
import { SearchInputContainer } from './SearchInputContainer';
import { SearchInputClearButton } from './SearchInputClearButton';
import { SearchInputIcon } from './SearchInputIcon';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseSearchInputProps = {
	autoFocus?: NativeInputProps['autoFocus'];
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
	maxWidth?: SearchInputMaxWidth;
	/** Function to be called when the input is cleared. */
	onClear?: () => void;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	function SearchInput(
		{
			label,
			hideOptionalLabel,
			required,
			hint,
			message,
			invalid,
			block,
			maxWidth: maxWidthProp = 'md',
			id,
			disabled,
			value: valueProp,
			onChange: onChangeProp,
			onClear,
			...props
		},
		forwardedRef
	) {
		const internalRef = useRef<HTMLInputElement>(null);
		const [internalValue, setInternalValue] = useState(valueProp || '');

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
