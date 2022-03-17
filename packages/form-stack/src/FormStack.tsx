import { Flex } from '@ag.ds-next/box';
import { ReactNode } from 'react';

export type FormStackProps = { children: ReactNode };

export function FormStack({ children }: FormStackProps) {
	return (
		<Flex flexDirection="column" gap={2}>
			{children}
		</Flex>
	);
}
