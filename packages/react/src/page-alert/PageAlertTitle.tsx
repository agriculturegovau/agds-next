import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type PageAlertTitleProps = PropsWithChildren<{
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

export const PageAlertTitle = ({
	as = 'h3',
	children,
}: PageAlertTitleProps) => (
	<Text as={as} fontSize="lg" fontWeight="bold">
		{children}
	</Text>
);
