import { PropsWithChildren } from 'react';
import { Text } from '@ag.ds-next/text';

export type CalloutTitleProps = PropsWithChildren<{
	as?: 'h2' | 'h3' | 'h4' | 'h5';
}>;

export const CalloutTitle = ({ as = 'h2', children }: CalloutTitleProps) => (
	<Text as={as} fontSize="md" fontWeight="bold">
		{children}
	</Text>
);
