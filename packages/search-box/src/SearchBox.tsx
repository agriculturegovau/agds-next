import React, { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { Flex } from '@ag.ds-next/box';

export type SearchBoxProps = DetailedHTMLProps<
	FormHTMLAttributes<HTMLFormElement>,
	HTMLFormElement
>;

export const SearchBox = ({ children, ...props }: SearchBoxProps) => (
	<form role="search" {...props}>
		<Flex alignItems="flex-end">{children}</Flex>
	</form>
);
