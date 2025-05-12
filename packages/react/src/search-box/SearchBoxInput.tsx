import {
	forwardRef,
	type ChangeEvent,
	type InputHTMLAttributes,
	useRef,
	useState,
} from 'react';
import { textInputStyles } from '../text-input';
import { Stack } from '../stack';
import { globalPalette, mergeRefs, useId } from '../core';
import { SearchBoxClearButton } from './SearchBoxClearButton';
import { SearchBoxLabel } from './SearchBoxLabel';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseSearchBoxInputProps = {
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	placeholder?: NativeInputProps['placeholder'];
	value?: NativeInputProps['value'];
};

export type SearchBoxInputProps = BaseSearchBoxInputProps & {
	clearButton?: boolean;
	label?: string;
	labelVisible?: boolean;
};

export const SearchBoxInput = forwardRef<HTMLInputElement, SearchBoxInputProps>(
	function SearchBoxInput(
		{
			clearButton = false,
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
		const [internalValue, setInternalValue] = useState(valueProp || '');

		const value = typeof valueProp === 'string' ? valueProp : internalValue;
		const showClearButton = clearButton ? Boolean(value) : false;

		const onChange = (event: ChangeEvent<HTMLInputElement>) => {
			onChangeProps?.(event);
			setInternalValue(event.target.value);
		};

		// Clears the input while also triggering the `onChange` event to consumers
		const clearInput = () => {
			if (!value) return;
			// Cannot change the API, we still need to pass it as an HTMLInputEvent
			onChange({
				target: {
					value: '',
				},
			} as ChangeEvent<HTMLInputElement>);
			internalRef.current?.focus();
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
				{showClearButton ? <SearchBoxClearButton onClick={clearInput} /> : null}
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
