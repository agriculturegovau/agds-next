import { createContext } from 'react';

export const AccordionContext = createContext({
	id: 'accordion',
	isOpen: true,
	onItemClose: () => {},
	onItemOpen: () => {},
	onItemToggle: () => {},
});
