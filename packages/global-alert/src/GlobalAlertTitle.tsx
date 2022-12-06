import { PropsWithChildren } from 'react';
import { Text } from '@ag.ds-next/text';

export type GlobalAlertTitleProps = PropsWithChildren<{
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}>;

export const GlobalAlertTitle = ({
	as = 'h3',
	children,
}: GlobalAlertTitleProps) => (
	<Text as={as} fontSize="lg" lineHeight="heading" fontWeight="bold">
		{children}
	</Text>
);
