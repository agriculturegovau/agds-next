import React, { ReactNode, FormEvent } from 'react';
import { Flex } from '@ag.ds-next/box';

export type SearchFormProps = {
	children: ReactNode;
	'aria-label': string;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const SearchForm = ({ children, ...props }: SearchFormProps) => {
	return (
		<form {...props}>
			<Flex>{children}</Flex>
		</form>
	);
};
