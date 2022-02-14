import React, { ChangeEvent, FormEvent, useRef, useCallback } from 'react';
import { useId } from '@reach/auto-id';
import { Flex, Stack } from '@ag.ds-next/box';
import { SearchLabel } from './SearchLabel';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';

export type SearchProps = {
	label: string;
	labelVisible?: boolean;
	buttonLabel?: string;
	buttonIconOnly?: boolean;
	butttonReponsive?: boolean;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	'aria-label'?: string;
	onSubmit?: (event: FormEvent<HTMLFormElement>, value: string) => void;
};

export const Search = ({
	label,
	labelVisible = false,
	buttonLabel = 'Search',
	buttonIconOnly,
	butttonReponsive,
	value,
	onChange,
	'aria-label': ariaLabel,
	onSubmit: onSubmitProp,
}: SearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { inputId } = useSearchIds();

	const onSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			if (!onSubmitProp) return;
			onSubmitProp(event, inputRef.current?.value ?? '');
		},
		[onSubmitProp]
	);

	return (
		<form onSubmit={onSubmit} aria-label={ariaLabel}>
			<Stack background="body">
				<SearchLabel htmlFor={inputId} visible={labelVisible}>
					{label}
				</SearchLabel>
				<Flex>
					<SearchInput
						ref={inputRef}
						id={inputId}
						value={value}
						onChange={onChange}
					/>
					<SearchButton iconOnly={buttonIconOnly} responsive={butttonReponsive}>
						{buttonLabel}
					</SearchButton>
				</Flex>
			</Stack>
		</form>
	);
};

export const useSearchIds = () => {
	const id = useId();
	return { inputId: `search-${id}` };
};
