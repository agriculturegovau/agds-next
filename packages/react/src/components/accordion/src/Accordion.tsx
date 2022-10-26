import { ReactNode } from 'react';
import { Box } from '../../box/src';

export type AccordionProps = { children: ReactNode };

export const Accordion = ({ children }: AccordionProps) => (
	<Box width="100%" borderTop>
		{children}
	</Box>
);
