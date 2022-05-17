import { PropsWithChildren } from 'react';
import { Text } from '@ag.ds-next/text';

export type PageAlertTitleProps = PropsWithChildren<{
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}>;

export const PageAlertTitle = ({
	as = 'h3',
	children,
}: PageAlertTitleProps) => (
	<Text as={as} fontSize="md" fontWeight="bold">
		{children}
	</Text>
);
