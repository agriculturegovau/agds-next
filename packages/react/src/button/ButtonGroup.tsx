import { ReactNode } from 'react';
import { Flex } from '../flex';

export type ButtonGroupProps = { children: ReactNode };

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
	return (
		<Flex
			alignItems={['stretch', 'center']}
			flexDirection={['column', 'row']}
			gap={1}
		>
			{children}
		</Flex>
	);
};
