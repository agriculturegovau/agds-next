import { ReactNode } from 'react';
import { Flex } from '../flex';

export type FormStackProps = { children: ReactNode };

export function FormStack({ children }: FormStackProps) {
	return (
		<Flex flexDirection="column" gap={2}>
			{children}
		</Flex>
	);
}
