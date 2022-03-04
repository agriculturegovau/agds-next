import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type InpageNavTitleProps = { children: ReactNode };

export const InpageNavTitle = ({ children }: InpageNavTitleProps) => (
	<Text as="h2" fontWeight="bold" lineHeight="heading">
		{children}
	</Text>
);
