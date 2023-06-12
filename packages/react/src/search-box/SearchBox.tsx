import { FormHTMLAttributes, PropsWithChildren } from 'react';
import { Flex } from '../flex';

type NativeFormProps = FormHTMLAttributes<HTMLFormElement>;

export type SearchBoxProps = PropsWithChildren<{
	'aria-label'?: string;
	onSubmit?: NativeFormProps['onSubmit'];
}>;

export const SearchBox = ({
	'aria-label': ariaLabel = 'sitewide',
	children,
	onSubmit,
}: SearchBoxProps) => (
	<form role="search" aria-label={ariaLabel} onSubmit={onSubmit}>
		<Flex alignItems="flex-end">{children}</Flex>
	</form>
);
