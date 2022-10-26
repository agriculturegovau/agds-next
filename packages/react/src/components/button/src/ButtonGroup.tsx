import { ReactNode } from 'react';
import { Flex } from '../../box/src';

export type ButtonGroupProps = { children: ReactNode };

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
	return (
		<Flex
			gap={1}
			flexDirection={['column', 'row']}
			alignItems={['stretch', 'center']}
		>
			{children}
		</Flex>
	);
};
