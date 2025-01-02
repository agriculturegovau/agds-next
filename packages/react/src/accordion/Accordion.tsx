import { ReactNode } from 'react';
import { Box } from '../box';

export type AccordionProps = { children: ReactNode };

export const Accordion = ({ children }: AccordionProps) => (
	<Box borderTop width="100%">
		{children}
	</Box>
);
