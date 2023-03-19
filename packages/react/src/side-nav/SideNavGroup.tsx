import { ReactNode } from 'react';
import { Box } from '../box';
import { LinkListContext, useLinkListDepth } from './context';

type SideNavGroupProps = { children: ReactNode };

export function SideNavGroup({ children }: SideNavGroupProps) {
	const depth = useLinkListDepth();
	const value = depth + 1;
	return (
		<LinkListContext.Provider value={value}>
			<Box as="ul">{children}</Box>
		</LinkListContext.Provider>
	);
}
