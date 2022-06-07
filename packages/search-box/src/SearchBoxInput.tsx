import { InputHTMLAttributes, forwardRef } from 'react';
import { useId } from '@reach/auto-id';
import { textInputStyles } from '@ag.ds-next/text-input';
import { Stack } from '@ag.ds-next/box';
import { SearchBoxLabel } from './SearchBoxLabel';

export type SearchBoxInputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	labelVisible?: boolean;
};

export const SearchBoxInput = forwardRef<HTMLInputElement, SearchBoxInputProps>(
	function SearchBoxInput(
		{ label = 'Search', labelVisible = false, id, ...props },
		ref
	) {
		const inputId = useInputId(id);
		const styles = inputStyles();
		return (
			<Stack width="100%">
				<SearchBoxLabel htmlFor={inputId} visible={labelVisible}>
					{label}
				</SearchBoxLabel>
				<input ref={ref} type="search" css={styles} id={inputId} {...props} />
			</Stack>
		);
	}
);

const useInputId = (idProp?: string) => {
	const autoId = useId();
	return idProp || `search-${autoId}`;
};

const inputStyles = () => {
	const baseStyles = textInputStyles({ block: true });
	return {
		...baseStyles,
		borderRightWidth: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,

		'&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
			{
				display: 'none',
			},

		'&:focus': {
			...baseStyles['&:focus'],
			zIndex: 2,
		},
	};
};
