import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { LinkListContext, useLinkListDepth } from './context';

type SideNavGroupProps = { children: ReactNode };

export const SideNavGroup = ({ children }: SideNavGroupProps) => {
	const depth = useLinkListDepth();
	return (
		<LinkListContext.Provider value={depth + 1}>
			<Box as="ul" role="menu">
				{children}
			</Box>
		</LinkListContext.Provider>
	);
};
