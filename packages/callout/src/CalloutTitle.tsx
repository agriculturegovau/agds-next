import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export const CalloutTitle = ({
	as,
	children,
}: {
	as?: 'h2' | 'h3' | 'h4' | 'h5';
	children: ReactNode;
}) => {
	return (
		<Text as={as} fontSize="md" fontWeight="bold">
			{children}
		</Text>
	);
};
