import {
	forwardRef,
	useRef,
	useState,
	type ChangeEvent,
	type InputHTMLAttributes,
} from 'react';
import { globalPalette, mergeRefs, useId } from '../core';
import { SearchInputClearButton } from '../search-input/SearchInputClearButton';
import { Stack } from '../stack';
import { textInputStyles } from '../text-input';
import { SearchBoxLabel } from './SearchBoxLabel';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseSearchBoxInputProps = {
	defaultValue?: NativeInputProps['defaultValue'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	placeholder?: NativeInputProps['placeholder'];
	value?: NativeInputProps['value'];
};

export type SearchBoxInputProps = BaseSearchBoxInputProps & {
	label?: string;
	labelVisible?: boolean;
};

export const SearchBoxInput = forwardRef<HTMLInputElement, SearchBoxInputProps>(
	function SearchBoxInput(
		{
			defaultValue,
			id,
			label = 'Search',
			labelVisible = false,
			onChange: onChangeProps,
			value: valueProp,
			...props
		},
		ref
	) {
		const internalRef = useRef<HTMLInputElement>(null);
		const [internalValue, setInternalValue] = useState(
			valueProp || defaultValue || ''
		);

		const value = typeof valueProp === 'string' ? valueProp : internalValue;
		const showClearButton = Boolean(value);

		const onChange = (event: ChangeEvent<HTMLInputElement>) => {
			onChangeProps?.(event);
			setInternalValue(event.target.value);
		};

		// Clears the input while also triggering the `onChange` event to consumers
		const clearInput = () => {
			if (!internalRef.current) return;
			// Workaround to setting the value and trigger an `onChange` event
			// See: https://stackoverflow.com/a/46012210
			const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
				window.HTMLInputElement.prototype,
				'value'
			)?.set;
			nativeInputValueSetter?.call(internalRef.current, '');
			const event = new Event('input', { bubbles: true });
			internalRef.current.dispatchEvent(event);
			internalRef.current.focus();
		};

		const inputId = useInputId(id);
		const styles = inputStyles({ showClearButton });
		return (
			<Stack css={{ position: 'relative' }} width="100%">
				<SearchBoxLabel htmlFor={inputId} visible={labelVisible}>
					{label}
				</SearchBoxLabel>
				<input
					autoComplete="off"
					css={styles}
					id={inputId}
					onChange={onChange}
					ref={mergeRefs([internalRef, ref])}
					type="search"
					value={value}
					{...props}
				/>
				{showClearButton ? (
					<SearchInputClearButton
						onClick={clearInput}
						// The input always uses the light background colour, button should also use the light action colour
						palette="light"
					/>
				) : null}
			</Stack>
		);
	}
);

const useInputId = (idProp?: string) => {
	const autoId = useId();
	return idProp || `search-${autoId}`;
};

const inputStyles = ({ showClearButton }: { showClearButton: boolean }) => {
	const baseStyles = textInputStyles({ block: true });
	return {
		...baseStyles,
		borderRightWidth: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		color: globalPalette.lightForegroundText,
		background: globalPalette.lightBackgroundBody,

		...(showClearButton && { paddingRight: '3rem' }),

		'&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
			{
				display: 'none',
			},
	};
};
