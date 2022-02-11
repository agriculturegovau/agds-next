import React, { ChangeEvent, FormEvent, useRef, useCallback } from 'react';
import { useId } from '@reach/auto-id';
import { SearchForm } from './SearchForm';
import { SearchLabel } from './SearchLabel';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';

export type SearchProps = {
	label: string;
	'aria-label': string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>, value: string) => void;
};

export const Search = ({
	label,
	'aria-label': ariaLabel,
	value,
	onChange,
	onSubmit: onSubmitProp,
}: SearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { inputId } = useSearchIds();

	const onSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			onSubmitProp(event, inputRef.current?.value ?? '');
		},
		[onSubmitProp]
	);

	return (
		<SearchForm onSubmit={onSubmit} aria-label={ariaLabel}>
			<SearchLabel htmlFor={inputId}>{label}</SearchLabel>
			<SearchInput
				ref={inputRef}
				id={inputId}
				value={value}
				onChange={onChange}
			/>
			<SearchButton>Search</SearchButton>
		</SearchForm>
	);
};

export const useSearchIds = () => {
	const id = useId();
	return { inputId: `search-${id}` };
};
