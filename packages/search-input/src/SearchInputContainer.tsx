import { PropsWithChildren } from 'react';

export type SearchInputContainerProps = PropsWithChildren<{ maxWidth: string }>;

export function SearchInputContainer({
	children,
	maxWidth,
}: SearchInputContainerProps) {
	return <div css={{ position: 'relative', maxWidth }}>{children}</div>;
}
