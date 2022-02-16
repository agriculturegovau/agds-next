import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export type AccordionProps = { children: ReactNode };

export const Accordion = ({ children }: AccordionProps) => (
	<Box borderLeft borderRight borderTop>
		{children}
	</Box>
);
