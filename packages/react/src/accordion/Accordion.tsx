import { ReactNode } from 'react';
import { Box } from '../box';

export type AccordionProps = { children: ReactNode; indent?: boolean };

export const Accordion = ({ children, indent }: AccordionProps) => (
	<Box borderTop data-accordion-indent={indent || undefined} width="100%">
		{children}
	</Box>
);
