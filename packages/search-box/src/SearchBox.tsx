import React, { FormHTMLAttributes } from 'react';
import { Flex } from '@ag.ds-next/box';

export type SearchBoxProps = FormHTMLAttributes<HTMLFormElement>;

export const SearchBox = ({
	'aria-label': ariaLabel = 'sitewide',
	children,
	...props
}: SearchBoxProps) => (
	<form role="search" aria-label={ariaLabel} {...props}>
		<Flex alignItems="flex-end">{children}</Flex>
	</form>
);
