import { ReactNode } from 'react';
import { Box } from '../box';
import { LinkListContext, useLinkListDepth } from './context';

type SideNavGroupProps = { children: ReactNode; isOpen: boolean };

export function SideNavGroup({ children, isOpen }: SideNavGroupProps) {
	const depth = useLinkListDepth();
	const value = depth + 1;
	return isOpen ? (
		<LinkListContext.Provider value={value}>
			<Box as="ul">{children}</Box>
		</LinkListContext.Provider>
	) : null;
}
