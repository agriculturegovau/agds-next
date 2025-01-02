import { FormHTMLAttributes, PropsWithChildren } from 'react';
import { Flex } from '../flex';

type NativeFormProps = FormHTMLAttributes<HTMLFormElement>;

export type SearchBoxProps = PropsWithChildren<{
	'aria-label'?: string;
	onSubmit?: NativeFormProps['onSubmit'];
}>;

export const SearchBox = ({
	'aria-label': ariaLabel = 'Sitewide',
	children,
	onSubmit,
}: SearchBoxProps) => (
	<form aria-label={ariaLabel} onSubmit={onSubmit} role="search">
		<Flex alignItems="flex-end">{children}</Flex>
	</form>
);
