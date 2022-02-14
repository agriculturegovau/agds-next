import React, { ChangeEvent, forwardRef, PropsWithRef } from 'react';
import { textInputStyles } from '@ag.ds-next/text-input';

export type SearchInputProps = PropsWithRef<{
	id: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}>;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	function Input(props, ref) {
		return <input ref={ref} type="search" css={inputStyles} {...props} />;
	}
);

const inputStyles = () => {
	const baseStyles = textInputStyles({
		block: true,
		maxWidth: undefined,
		invalid: undefined,
		valid: undefined,
	});
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
